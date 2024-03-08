export const Logos = {
  Camplify: require('./Camplify').default,
  PaulCamper: require('./PaulCamper').default,
};
export type LogoKey = keyof typeof Logos;
