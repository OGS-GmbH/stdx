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
