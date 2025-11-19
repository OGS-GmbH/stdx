function roundWithThreshold (value: number, threshold: number): number {
  const integerPart: number = Math.floor(value);
  const fraction: number = value - integerPart;

  return fraction >= threshold
    ? Math.ceil(value)
    : integerPart;
}

Object.defineProperty(Math, "roundWithThreshold", {
  value: roundWithThreshold,
  writable: false,
  configurable: false,
  enumerable: false
});
