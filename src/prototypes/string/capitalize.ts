export function capitalizeImpl (this: string): string {
  if (!this) return '';

  return this.charAt(0).toUpperCase() + this.slice(1);
}

// eslint-disable-next-line no-extend-native
Object.defineProperty(String.prototype, "capitalize", {
  value: capitalizeImpl,
  writable: true,
  configurable: true,
  enumerable: false
});

declare global {
  interface String {
    // eslint-disable-next-line @tseslint/method-signature-style
    capitalize(): string;
  }
}
