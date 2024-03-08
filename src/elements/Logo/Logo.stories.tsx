import Logo from './Logo';

export default {
  argTypes: {},
  component: Logo,
  title: 'Elements/Logo',
};

export const Camplify = {
  args: {
    logoKey: 'Camplify',
    size: 100,
  },
};

export const CamplifyWithNoText = {
  args: {
    hideText: true,
    logoKey: 'Camplify',
    size: 100,
  },
};

export const PaulCamper = {
  args: {
    logoKey: 'PaulCamper',
    size: 100,
  },
};

export const PaulCamperWithNoText = {
  args: {
    hideText: true,
    logoKey: 'PaulCamper',
    size: 100,
  },
};
