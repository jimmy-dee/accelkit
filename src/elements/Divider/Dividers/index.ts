export const Dividers = {
  Campervan: require('./Campervan').default,
  Caravan: require('./Caravan').default,
};
export type DividerKey = keyof typeof Dividers;
