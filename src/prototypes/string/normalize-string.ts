export function normalizeStringImpl (this: string): string | null {
  const trimmedData: string = this.trim();

  return trimmedData.length === 0 ? null : trimmedData;
}


// eslint-disable-next-line no-extend-native
Object.defineProperty(String.prototype, "normalizeString", {
  value: normalizeStringImpl,
  writable: true,
  configurable: true,
  enumerable: false
});

declare global {
  interface String {
    // eslint-disable-next-line @tseslint/method-signature-style
    normalizeString(): string | null;
  }
}
