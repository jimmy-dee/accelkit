const rem = (value, base = 16) => {
  const valueInRem = value / base;
  return `${valueInRem}rem`;
};

const stripUnits = (value) => parseInt(value, 10);

module.exports = {
  rem,
  stripUnits,
};
