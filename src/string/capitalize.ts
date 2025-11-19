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
