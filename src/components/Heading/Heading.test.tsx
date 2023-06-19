import React from 'react';
import { render, screen } from '@testing-library/react';

import Heading from './Heading';

describe('Heading', () => {
  test('Simply render the element', async () => {
    render(
      <Heading>
        Something
      </Heading>
    );
    expect(screen.getByText('Something')).toBeDefined();
  });
});
