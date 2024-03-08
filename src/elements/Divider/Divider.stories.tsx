import type { Meta, StoryObj } from '@storybook/react';

import Divider from './Divider';

const meta: Meta<typeof Divider> = {
  args: {
    children: 'Hello World!',
    id: 'story-heading',
  },
  component: Divider,
  title: 'Elements/Divider',
};

export default meta;
type Story = StoryObj<typeof Divider>;

export const Campervan: Story = {
  args: {
    dividerKey: 'Campervan',
  },
};

export const Caravan: Story = {
  args: {
    dividerKey: 'Caravan',
  },
};


