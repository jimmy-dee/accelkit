import { createHeadingId } from './id-generators';

const id = 'something';

describe('id generator functions', () => {
  test('returns a an id that is appended with -heading', () => {
    expect(createHeadingId(id)).toBe(`${id}-heading`);
  });
});
