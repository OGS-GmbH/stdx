
/**
 * @module Date
 */


/**
 * Returns the date portion of a `Date` instance in ISO-8601 format (`YYYY-MM-DD`).
 *
 * By default, the date is computed in UTC (i.e. based on `Date.prototype.toISOString()`),
 * which means the returned value may differ from the local calendar day if your local
 * timezone is behind/ahead of UTC.
 *
 * If `isLocal` is set to `true`, the date is instead computed using local time
 * (`getFullYear()`, `getMonth()`, `getDate()`), so the string always reflects the
 * local calendar date.
 *
 * @this Date The `Date` instance the method is called on.
 * @param {boolean} [isLocal=false] Whether to format the date in the local timezone
 * rather than UTC.
 * @returns {string} The ISO-8601 date string (`YYYY-MM-DD`) for this `Date`.
 *
 * @example
 * const d = new Date("2025-03-15T23:30:00Z");
 *
 * // UTC-based date (default):
 * d.toISOStringDate();        // e.g. "2025-03-15"
 *
 * // Local-time-based date:
 * d.toISOStringDate(true);    // e.g. "2025-03-16" in a timezone ahead of UTC
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

