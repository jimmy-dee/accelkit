module.exports = {
  stories: ['../src/components/**/*.stories.tsx'],
  addons: ["@storybook/addon-links", "@storybook/addon-essentials", "@storybook/addon-interactions", {
    name: '@storybook/addon-styling',
    options: {
      postCss: true
    }
  }],
  framework: {
    name: "@storybook/react-webpack5",
    options: {}
  },
  docs: {
    autodocs: true
  }
};