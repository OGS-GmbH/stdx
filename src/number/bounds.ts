/**
 * Clamps a `number` to ensure it stays within the provided [min, max] range`.
 *
 * @param this - `number` instance
 * @param min - lower bound (inclusive)
 * @param max - upper bound (inclusive)
 * @returns `number` that is guaranteed to be between min and max (inclusive), unless this coerces to `NaN` (see edge cases)
 *
 * @example
 * const boundedNumberMax = (100).ensureBounds(1, 50);
 * const boundedNumberMin = (0).ensureBounds(1,50);
 * console.assert(boundedNumberMax === 50);
 * console.assert(boundedNumberMin === 1);
 *
 * @since 1.0.0
 * @author Simon Kovtyk
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
