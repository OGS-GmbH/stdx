export const ISO_TIME_SEPARATOR: string = "T";
export function getIsoDate (date: Date): string {
  /* eslint-disable-next-line @tseslint/no-non-null-assertion */
  return date.toISOString()
    .split(ISO_TIME_SEPARATOR)
    .at(0)!;
}
