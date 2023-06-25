import { rem, stripUnits } from './css-functions';

const pixelNo = 16;
const pixelStr = '16px';

test('Converts pixel number to rem value', () => {
  expect(rem(pixelNo)).toBe('1rem');
});

test('Converts slug string array to one url string', () => {
  expect(stripUnits(pixelStr)).toBe(16);
});
