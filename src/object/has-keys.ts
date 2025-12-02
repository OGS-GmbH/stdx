/**
 * @module Object
 */
import { PickFromKeys } from "../types";

/**
 * Checks whether an `object` has all of the specified keys, and acts as a TypeScript type guard that narrows the type of the object to only include those keys
 *
 * @param this - `object` instance
 * @param keys - The keys to check for in the `object`
 * @returns `true` if all specified keys are present in the `object`. Otherwise `false`. When `true`, TypeScript narrows the type of this to `PickFromKeys<this, typeof keys>` (the `object` with at least those keys)
 *
 * @example
 * const hasKeysObject = { name: "john", age: 39 };
 * console.assert(hasKeysObject.hasKeys("name"));
 * console.assert(hasKeysObject.hasKeys("age"));
 *
 * @since 1.0.0
 * @author Simon Kovtyk
 */
export function hasKeys (this: object, ...keys: ReadonlyArray<keyof typeof this>): this is PickFromKeys<typeof this, typeof keys> {
  let _hasKeys: boolean = true;

  for (const key of keys) {
    if (!_hasKeys)
      break;

    _hasKeys = key in this;
  }

  return _hasKeys;
}

/* eslint-disable-next-line no-extend-native */
Object.defineProperty(Object.prototype, "hasKeys", {
  value: hasKeys,
  writable: false,
  configurable: false,
  enumerable: false
});
