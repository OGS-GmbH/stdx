/**
 * @module Map
 */

/**
 * Converts a `Map` (or `ReadonlyMap`) into a plain object whose properties correspond to the `Map`’s keys and values. If the `M̀ap` is empty, or if it yields no enumerable keys after conversion, `null` is returned instead of an empty `object`.
 *
 * @param this - `Map` instance
 * @returns A `Record<PropertyKey, V>` with the same key-value pairs as the `Map`. Or `null` if the `Map` is empty or the resulting `object` has no own enumerable keys.
 *
 * @example
 * const mapTest = new Map();
 *
 * const sym = Symbol()
 *
 * mapTest.set("name", "John");
 * mapTest.set(1, 1);
 * mapTest.set(sym, { test: "hello" });
 *
 * const object = mapTest.toObject();
 *
 * const expectedResult = {
 *   name: "John",
 *   1: 1,
 *   [sym]: { test: "hello" }
 * }
 *
 * console.assert(JSON.stringify(expectedResult) === JSON.stringify(object));
 *
 * @since 1.0.0
 * @author Ian Wenneckers
 */
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
