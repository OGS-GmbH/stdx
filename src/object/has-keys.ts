import { PickFromKeys } from "../types";

function hasKeys (this: object, ...keys: ReadonlyArray<keyof typeof this>): this is PickFromKeys<typeof this, typeof keys> {
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
