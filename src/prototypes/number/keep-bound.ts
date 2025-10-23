
export type Bounds = { min: number; max: number; };

function keepBoundsImpl (this: number, bounds: Bounds): number {
  const value: number = Number(this);

  if (value < bounds.min) return bounds.min;

  if (value > bounds.max) return bounds.max;

  return value;
}

// eslint-disable-next-line no-extend-native
Object.defineProperty(Number.prototype, "keepBound", {
  value: keepBoundsImpl,
  writable: true,
  configurable: true,
  enumerable: false
});

declare global {
  interface Number {
    // eslint-disable-next-line @tseslint/method-signature-style
    keepBound(bounds: { min: number; max: number; }): number;
  }
}
