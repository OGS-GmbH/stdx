
export function roundWithThresholdImpl (this: number, threshold: number): number {
  const integerPart: number = Math.floor(this);
  const fraction: number = this - integerPart;

  return fraction >= threshold
    ? Math.ceil(this)
    : integerPart;
}


// eslint-disable-next-line no-extend-native
Object.defineProperty(Number.prototype, "roundWithThreshold", {
  value: roundWithThresholdImpl,
  writable: true,
  configurable: true,
  enumerable: false
});

declare global {
  interface Number {
    // eslint-disable-next-line @tseslint/method-signature-style
    roundWithThreshold(threshold: number): number;
  }
}
