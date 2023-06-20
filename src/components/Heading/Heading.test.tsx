import { render, screen } from '@testing-library/react';
import React from 'react';

import Heading from './Heading';

describe('Heading', () => {
  test('Render a h1 element', () => {
    render(
      <Heading
        id="testing-heading"
        level={1}
      >
        Test Heading 1
      </Heading>,
    );

    const heading = screen.getByRole('heading', { level: 1 });
    expect(heading).toBeDefined();
  });

  test('Render a h2 element', () => {
    render(
      <Heading id="testing-heading">
        Test Heading 2
      </Heading>,
    );

    const heading = screen.getByRole('heading', { level: 2 });
    expect(heading).toBeDefined();
  });

  test('Render a h3 element', () => {
    render(
      <Heading
        id="testing-heading"
        level={3}
      >
        Test Heading 3
      </Heading>,
    );

    const heading = screen.getByRole('heading', { level: 3 });
    expect(heading).toBeDefined();
  });

  test('Render a h4 element', () => {
    render(
      <Heading
        id="testing-heading"
        level={4}
      >
        Test Heading 4
      </Heading>,
    );

    const heading = screen.getByRole('heading', { level: 4 });
    expect(heading).toBeDefined();
  });

  test('Render a h5 element', () => {
    render(
      <Heading
        id="testing-heading"
        level={5}
      >
        Test Heading 5
      </Heading>,
    );

    const heading = screen.getByRole('heading', { level: 5 });
    expect(heading).toBeDefined();
  });
});
