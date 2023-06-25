import type { Meta, StoryObj } from '@storybook/react';

import Tile from './Tile';

const meta: Meta<typeof Tile> = {
  args: {
    children: 'Hello World!',
    id: 'story-tile',
  },
  component: Tile,
};

export default meta;
type Story = StoryObj<typeof Tile>;

export const Default: Story = {
  args: {},
};
