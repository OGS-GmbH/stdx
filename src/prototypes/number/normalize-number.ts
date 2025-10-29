export function normalizeNumberImpl (this: number): number {
  /* eslint-disable-next-line no-compare-neg-zero */
  return this === -0 ? 0 : this;
}

// eslint-disable-next-line no-extend-native
Object.defineProperty(Number.prototype, "normalizeNumber", {
  value: normalizeNumberImpl,
  writable: true,
  configurable: true,
  enumerable: false
});

declare global {
  interface Number {
    // eslint-disable-next-line @tseslint/method-signature-style
    normalizeNumber(): number;
  }
}
