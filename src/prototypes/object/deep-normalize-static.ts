
import { deepNormalize, deepNormalizeObject } from "../../helpers";
import type { DeepNormalized, DeepNormalizedObject } from "../../types";


Object.defineProperty(Object, "deepNormalize", {
  value <T>(value: T): DeepNormalized<T> {
    return deepNormalize(value);
  },
  writable: true,
  configurable: true,
  enumerable: false
});
Object.defineProperty(Object, "deepNormalizeObject", {
  value <T extends object>(value: T): DeepNormalizedObject<T> {
    return deepNormalizeObject(value);
  },
  writable: true,
  configurable: true,
  enumerable: false
});


declare global {
  interface ObjectConstructor {
    // eslint-disable-next-line @tseslint/method-signature-style
    deepNormalize<T>(value: T): DeepNormalized<T>;
    // eslint-disable-next-line @tseslint/method-signature-style
    deepNormalizeObject<T extends object>(value: T): DeepNormalizedObject<T>;
  }
}
