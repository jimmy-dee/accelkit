import type { Meta, StoryObj } from '@storybook/react';

import Text from './Text';

const meta: Meta<typeof Text> = {
  args: {
    children: 'Hello World!',
    id: 'story-heading',
  },
  component: Text,
  title: 'Elements/Text',
};

export default meta;
type Story = StoryObj<typeof Text>;

export const Base: Story = {
  args: {
    size: 'base',
  },
};

export const Large: Story = {
  args: {
    size: 'large',
  },
};

export const Small: Story = {
  args: {
    size: 'small',
  },
};

export const XSmall: Story = {
  args: {
    size: 'xs',
  },
};
