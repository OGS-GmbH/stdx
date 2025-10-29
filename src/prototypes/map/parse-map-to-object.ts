export function parseMapToObjectImpl<K, V> (this: ReadonlyMap<K, V>): Record<K & PropertyKey, V> | undefined {
  if (this.size === 0) return undefined;

  const obj: Record<K & PropertyKey, V> = Object.fromEntries(this) as Record<K & PropertyKey, V>;

  return Reflect.ownKeys(obj).length ? obj : undefined;
}

/* eslint-disable no-extend-native */

Object.defineProperty(Map.prototype, "parseMapToObject", {
  value: parseMapToObjectImpl,
  writable: true,
  configurable: true,
  enumerable: false
});


declare global {
  interface Map<K, V> {
    // eslint-disable-next-line @tseslint/method-signature-style
    parseMapToObject(): K extends PropertyKey ? Record<K, V> | undefined : never;
  }
}
