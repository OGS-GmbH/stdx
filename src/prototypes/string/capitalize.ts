/**
 * @module String
 */

/**
 * Converts the first character of a string to uppercase and returns the resulting string. All remaining characters are left unchanged.
 * @param this the string we want to capitalize
 * @returns A new string with the first character converted to uppercase. If the string is empty, an empty string is returned.
 */

function capitalize (this: string): string {
  return this.charAt(0).toUpperCase() + this.slice(1);
}

// eslint-disable-next-line no-extend-native
Object.defineProperty(String.prototype, "capitalize", {
  value: capitalize,
  writable: false,
  configurable: false,
  enumerable: false
});
