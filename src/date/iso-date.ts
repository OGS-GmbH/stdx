/**
 * @module Date
 */

/**
 * Converts a Date object to an ISO 8601 date string (YYYY-MM-DD).
 * @param this The Date object to convert.
 * @param [isLocal=false] If true, uses local time; otherwise, uses UTC time.
 * @return The ISO 8601 date string.
 *
 * @since 1.1.0
 * @author Ian Wenneckers
 */
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

