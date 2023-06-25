import { render, screen } from '@testing-library/react';
import React from 'react';

import Tile from './Tile';

const text = 'Hello World!';

describe('Tile', () => {
  test('Render a tile component', () => {
    render(
      <Tile
        id="testing-tile"
      >
        {text}
      </Tile>,
    );

    expect(screen.findByText(text)).toBeDefined();
  });
});
