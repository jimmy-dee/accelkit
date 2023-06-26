import type { Meta, StoryObj } from '@storybook/react';

import Tile from './Tile';

const meta: Meta<typeof Tile> = {
  args: {
    children: 'This is a semantic tile component, you can give me a border rounded edges and more. You can change my corners, borders using props. To update other styles simply pass custom classes',
    className: 'bg-sky-500/75',
    heading: 'Title Heading',
    id: 'story-tile',
  },
  component: Tile,
};

export default meta;
type Story = StoryObj<typeof Tile>;

export const Default: Story = {
  args: {
  },
};

export const Border: Story = {
  args: {
    border: true,
  },
};

export const Rounded: Story = {
  args: {
    rounded: true,
  },
};

export const RoundedWithBorder: Story = {
  args: {
    border: true,
    rounded: true,
  },
};

export const SrOnlyHeading: Story = {
  args: {
    srOnly: true,
  },
};

export const SrOnlyHeadingRounded: Story = {
  args: {
    rounded: true,
    srOnly: true,
  },
};
