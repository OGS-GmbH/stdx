function toISOStringDate (this: Date): string {
  const ISO_TIME_SEPARATOR: string = "T";

  /* eslint-disable-next-line @tseslint/no-non-null-assertion */
  return this.toISOString().split(ISO_TIME_SEPARATOR)
    .at(0)!;
}

// eslint-disable-next-line no-extend-native
Object.defineProperty(Date.prototype, "toISOStringDate", {
  value: toISOStringDate,
  writable: false,
  configurable: false,
  enumerable: false
});
