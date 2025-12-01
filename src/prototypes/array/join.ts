/**
 * @module Array
 */

/**
 * Joins array elements into a string, automatically skipping null and undefined values.
 * @param this Array of values
 * @param separator The string to insert between array elements
 * @returns A string with all non-nullish array elements joined by the separator.
 * @example
 * ```ts
 *const array = [1, "a",undefined, "b", 3, , null];
 *const joined = array.nonNullishJoin("-")
 *console.assert(joined === "1-a-b-3-");
 * ```
 */

function nonNullishJoin (this: readonly unknown[], separator: string): string {
  let joined: string = "";

  for (let i: number = 0; i < this.length; i++) {
    const item: unknown = this[ i ];

    if (item === null || item === undefined)
      continue;

    joined += String(item);

    if (i < this.length - 1)
      joined += separator;
  }

  return joined;
}

// eslint-disable-next-line no-extend-native
Object.defineProperty(Array.prototype, "nonNullishJoin", {
  value: nonNullishJoin,
  writable: false,
  configurable: false,
  enumerable: false
});
