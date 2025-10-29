export function intoNumber (value: unknown): number | null {
  if (typeof value === "number")
    return Number.isFinite(value) && Number.isSafeInteger(value) ? value : null;


  if (typeof value === "bigint") {
    const n: number = Number(value);

    return Number.isSafeInteger(n) ? n : null;
  }

  if (typeof value === "string") {
    const s: string = value.trim();

    if (s === "") return null;

    const n: number = Number(s);

    return Number.isFinite(n) ? n : null;
  }

  return null;
}

