import { render, screen } from '@testing-library/react';
import React from 'react';

import Heading, { Level } from './Heading';

const text = 'Hello World!';
const levels: Level[] = [1, 2, 3, 4, 5];

describe('Heading', () => {
  levels.map((level: Level) => {
    test(`Render a h${level} element`, () => {
      render(
        <Heading
          id="testing-heading"
          level={level}
        >
          {text}
        </Heading>,
      );

      const heading = screen.getByRole('heading', { level });
      expect(heading).toBeDefined();
      expect(screen.findByText(text)).toBeDefined();
    });
  });
});
