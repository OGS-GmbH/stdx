function toISOStringDate (this: Date, isLocal: boolean = false): string {
  if (isLocal) {
    return `${ this.getFullYear() }-${ (this.getMonth() + 1).toString().padStart(2, "0") }-${ this.getDate().toString()
      .padStart(2, "0") }`;
  }

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

