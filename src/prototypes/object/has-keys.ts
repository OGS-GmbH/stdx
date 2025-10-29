import type { PickFromKeys } from "../../types";

export function hasKeysImpl<T extends object> (ObjectToCheck: T, ...keys: ReadonlyArray<keyof T >): ObjectToCheck is PickFromKeys<T, typeof keys> {
  let _hasKeys: boolean = true;

  for (const key of keys) {
    if (!_hasKeys)
      break;

    _hasKeys = key in ObjectToCheck;
  }

  return _hasKeys;
}


Object.defineProperty(Object, "hasKeys", {
  value: hasKeysImpl,
  writable: true,
  configurable: true,
  enumerable: false
});

declare global {
  interface ObjectConstructor {
    // eslint-disable-next-line @tseslint/method-signature-style
    hasKeys<T extends object>(ObjectToCheck: T, keys: ReadonlyArray<keyof T >): this is PickFromKeys<T, typeof keys>;
  }
}

