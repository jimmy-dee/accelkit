import type { Meta, StoryObj } from '@storybook/react';

import Icon from './Icon';

const meta: Meta<typeof Icon> = {
  args: {
    id: 'story-heading',
  },
  component: Icon,
  title: 'Elements/Icon',
};

export default meta;
type Story = StoryObj<typeof Icon>;

export const FourWheelDrive: Story = {
  args: {
    iconKey: '4X4',
  },
};

export const BustVerified: Story = {
  args: {
    iconKey: 'BustVerified',
  },
};

export const Headset: Story = {
  args: {
    iconKey: 'BustVerified',
  },
};

export const Keys: Story = {
  args: {
    iconKey: 'Keys',
  },
};

export const LocationPin: Story = {
  args: {
    iconKey: 'LocationPin',
  },
};

export const RingCross: Story = {
  args: {
    iconKey: 'RingCross',
  },
};

export const RingTick: Story = {
  args: {
    iconKey: 'RingTick',
  },
};

export const ShieldTick: Story = {
  args: {
    iconKey: 'ShieldTick',
  },
};
