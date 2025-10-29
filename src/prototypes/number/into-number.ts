import type { IntoNumberArg } from "../../types";

export function intoNumberImpl (value: IntoNumberArg): number | null {
  if (value === null || value === undefined)
    return null;

  return Number(value);
}


Object.defineProperty(Number, "intoNumber", {
  value: intoNumberImpl,
  writable: true,
  configurable: true,
  enumerable: false
});

declare global {
  interface NumberConstructor {
    // eslint-disable-next-line @tseslint/method-signature-style
    intoNumber(value: IntoNumberArg): number | null;
  }
}
