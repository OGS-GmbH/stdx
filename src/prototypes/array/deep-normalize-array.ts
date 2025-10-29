
import { deepNormalizeArray } from "../../helpers";
import type { DeepNormalizedArray } from "../../types";

/* eslint-disable no-extend-native */
function arrayDeepNormalizeImpl<T> (this: readonly T[]): DeepNormalizedArray<T[]> {
  return deepNormalizeArray(this as unknown as T[]);
}


Object.defineProperty(Array.prototype, "deepNormalize", {
  value: arrayDeepNormalizeImpl,
  writable: true,
  configurable: true,
  enumerable: false
});


declare global {
  interface Array<T> {
    // eslint-disable-next-line @tseslint/method-signature-style
    deepNormalize(this: readonly T[]): DeepNormalizedArray<T[]>;
  }
}
