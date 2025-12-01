
/**
 * Converts an arbitrary value into a number using Number(value), but returns null instead of NaN when the input is null or undefined.
 * @param value unknown value that we want to turn into a number
 * @returns null if value is null or undefined. Otherwise, the result of Number(value) (which may be NaN).
 * @example
 * ```ts
 * console.assert(Number.isNaN(Number.into("abc")) === true);
 * console.assert(Number.into("5") === 5);
 * console.assert(Number.into(undefined) === null);
 * console.assert(Number.into(5n) === 5);
 *  ```
 */


export function into (value: unknown): number | null {
  if (value === null || value === undefined)
    return null;

  return Number(value);
}

Object.defineProperty(Number, "into", {
  value: into,
  writable: true,
  configurable: false,
  enumerable: false
});
