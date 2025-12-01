/**
 * @module Math
 */


/**
 * Rounds a number to the nearest integer using a custom fractional threshold instead of the standard 0.5.
 * @param value The number to round.
 * @param threshold  The fractional threshold at which rounding switches from floor to ceil.Typically between 0 and 1.
 * @returns The rounded integer result according to the provided threshold.
 * @example
 * ```ts
 *  console.assert(Math.roundWithThreshold(1.5,0.3) === 2)
 *  console.assert(Math.roundWithThreshold(1.2,0.3) === 1)
 *  ```
 */

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
