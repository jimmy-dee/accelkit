import { rem, stripUnits } from './css-functions';

const pixelNo = 16;
const pixelStr = '16px';

describe('css specific functions', () => {
  test('Converts pixel number to rem value and returns 1 rem', () => {
    expect(rem(pixelNo)).toBe('1rem');
  });

  test('removes px from the css unit 16px and returns 16', () => {
    expect(stripUnits(pixelStr)).toBe(16);
  });
});
