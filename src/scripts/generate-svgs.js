const { exec } = require('child_process');
const path = require('path');

const fs = require('fs-extra');
const prettier = require('prettier');

const commands = [
  'npx svgo core/assets/dividers -o core/assets/dividers',
  // command to generate the tsx versions of the divider based on the svg source files
  'npx @svgr/cli --out-dir elements/Divider/Dividers --ignore-existing --typescript --jsx-runtime automatic -- core/assets/dividers',
  // command to optimise logos without changing the paths
  'npx svgo --config=svgo-logos.config.js core/assets/logos -o core/assets/logos',
  // command to generate the tsx versions of the logos based on the svg source files, we need to pass the svgo config again as svgo is bundled with svgr
  'npx @svgr/cli --svgo-config svgo-logos.config.js --out-dir elements/Logo/Logos --ignore-existing --typescript --jsx-runtime automatic -- core/assets/logos',
  // command to generate the tsx versions of the icons based on the svg source files
  'npx svgo core/assets/icons -o core/assets/icons',
  'npx @svgr/cli --out-dir elements/Icon/Icons --ignore-existing --typescript --jsx-runtime automatic -- core/assets/icons',
];

const runScripts = async (commands) => {
  await commands.forEach(c => {
    exec(c, (error, stdout, stderr) => {
      if (error) {
        console.error(`Error executing command: ${error}`);
        return;
      }

      // Process the command output
      console.log(`stdout: ${stdout}`);
      console.error(`stderr: ${stderr}`);
    });
  });
};

// run the commands sequentially
runScripts(commands);

const generateIndexFile = async (key) => {
  try {
    const url = `../elements/${key}/${key}s`;
    // define the directory path to the icons
    const directoryPath = path.join(__dirname, url);
    // define the file path to the output file
    const outputFilePath = path.join(directoryPath, 'index.ts');
    // read the files in the directory
    const files = await fs.readdir(directoryPath);

    // remove the existing index.ts file from the svgr cli run
    await fs.remove(
      outputFilePath,
    );

    const svgs = files
      .filter(file => file.endsWith('.tsx'))
      .map(file => {
        const componentName = path.basename(file, '.tsx');

        return {
          name: componentName,
        };
      });

    const validSvgs = svgs.filter(s => s !== null);

    const indexFileContent = prettier.format(
      `
      export const ${key}s = {
        ${validSvgs
          .map(s => `'${s.name}': require('./${s.name}').default,`)
          .join('\n')}
      };
      export type ${key}Key = keyof typeof ${key}s;
    `,
      { parser: 'typescript', singleQuote: true },
    );

    await fs.outputFile(outputFilePath, indexFileContent);

    console.log('Index file generated successfully.');
  } catch (error) {
    console.error(`Error: ${error.message}`);
  }
};

generateIndexFile('Divider');
generateIndexFile('Icon');
generateIndexFile('Logo');

