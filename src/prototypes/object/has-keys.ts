/**
 * @module Object
 */


/**
 * Checks whether an object has all of the specified keys, and acts as a TypeScript type guard that narrows the type of the object to only include those keys.
 * @param this object we are checking
 * @param keys -  A list of keys to check for on the object.
 * @returns true if all specified keys are present in the object.
 *false otherwise.
 * When true, TypeScript narrows the type of this to PickFromKeys<this, typeof keys> (the object with at least those keys)
 */

import { PickFromKeys } from "../../types";

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
