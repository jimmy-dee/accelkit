export const Icons = {
  '4X4': require('./4X4').default,
  BustVerified: require('./BustVerified').default,
  Headset: require('./Headset').default,
  Keys: require('./Keys').default,
  LocationPin: require('./LocationPin').default,
  RingCross: require('./RingCross').default,
  RingTick: require('./RingTick').default,
  ShieldTick: require('./ShieldTick').default,
};
export type IconKey = keyof typeof Icons;
