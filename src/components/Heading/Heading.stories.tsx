import type { Meta, StoryObj } from '@storybook/react';

import Heading from './Heading';

const meta: Meta<typeof Heading> = {
  args: {
    children: 'Hello World!',
  },
  component: Heading,
};

export default meta;
type Story = StoryObj<typeof Heading>;

export const H1: Story = {
  args: {
    id: 'story-heading',
  },
};

export const H2: Story = {
  args: {
    id: 'story-heading',
  },
};

export const H3: Story = {
  args: {
    id: 'story-heading',
  },
};

export const H4: Story = {
  args: {
    id: 'story-heading',
  },
};

export const H5: Story = {
  args: {
    id: 'story-heading',
  },
};