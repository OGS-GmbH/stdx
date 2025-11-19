function toObject<K extends PropertyKey, V> (this: ReadonlyMap<K, V>): Record<PropertyKey, V> | null {
  if (this.size === 0)
    return null;

  const obj: Record<PropertyKey, V> = Object.fromEntries(this) as Record<PropertyKey, V>;

  return Object.keys(obj).length ? obj : null;
}

/* eslint-disable-next-line no-extend-native */
Object.defineProperty(Map.prototype, "toObject", {
  value: toObject,
  writable: false,
  configurable: false,
  enumerable: false
});
