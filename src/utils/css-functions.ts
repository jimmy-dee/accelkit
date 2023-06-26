export const rem = (value: number, base = 16) => {
  const valueInRem = value / base;
  return `${valueInRem}rem`;
};

export const stripUnits = (value: string) => parseInt(value, 10);
