/**
 * @module Object
 */


import { PickFromKeys } from "../../types";

/**
 * Checks whether an object has all of the specified keys, and acts as a TypeScript type guard that narrows the type of the object to only include those keys.
 * @param objectToCheck object we are checking
 * @param keys -  A list of keys to check for on the object.
 * @returns true if all specified keys are present in the object.
 *false otherwise.
 * When true, TypeScript narrows the type of this to PickFromKeys<this, typeof keys> (the object with at least those keys)
 * @example
 * ```ts
 *  const hasKeysObject = {name : "john", age: 39};
 *  console.assert(hasKeysObject.hasKeys("name"));
 *  console.assert(hasKeysObject.hasKeys("age"));
 * ```
 */


export function hasKeys<T extends object> (objectToCheck: T, ...keys: ReadonlyArray<keyof T>): objectToCheck is PickFromKeys<T, typeof keys> {
  let _hasKeys: boolean = true;

  for (const key of keys) {
    if (!_hasKeys)
      break;

    _hasKeys = key in objectToCheck;
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
