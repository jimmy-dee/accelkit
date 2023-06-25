import type { Meta, StoryObj } from '@storybook/react';

import Heading from './Heading';

const meta: Meta<typeof Heading> = {
  args: {
    children: 'Hello World!',
    id: 'story-heading',
  },
  component: Heading,
};

export default meta;
type Story = StoryObj<typeof Heading>;

export const Heading1: Story = {
  args: {
    level: 1,
  },
};

export const Heading2: Story = {
  args: {
    level: 2,
  },
};

export const Heading3: Story = {
  args: {
    level: 3,
  },
};

export const Heading4: Story = {
  args: {
    level: 4,
  },
};

export const Heading5: Story = {
  args: {
    level: 5,
  },
};