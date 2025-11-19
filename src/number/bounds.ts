function ensureBounds (this: number, min: number, max: number): number {
  const value: number = Number(this);

  if (value < min)
    return min;

  if (value > max)
    return max;

  return value;
}

// eslint-disable-next-line no-extend-native
Object.defineProperty(Number.prototype, "ensureBounds", {
  value: ensureBounds,
  writable: false,
  configurable: false,
  enumerable: false
});
