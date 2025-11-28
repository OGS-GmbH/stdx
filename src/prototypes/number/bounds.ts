
/**
 *Clamps a number to ensure it stays within the provided [min, max] range`.
 *If the value is less than min, it returns min.
 *If the value is greater than max, it returns max.
 *Otherwise, it returns the value itself.
 *Internally it first coerces this into a number using Number(this).
 * @param this Number we want to keep in range
 * @param min lower bound(inclusive)
 * @param max  upper bound (inclusive)
 * @returns A number that is guaranteed to be between min and max (inclusive), unless this coerces to NaN (see edge cases)
 */

export function ensureBounds (this: number, min: number, max: number): number {
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
