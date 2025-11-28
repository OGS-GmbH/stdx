/**
 * @module Types
 */

export type UnionToIntersection<U> =
  (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void
    ? I
    : never;
export type InferArray<T extends unknown[]> = T extends Array<infer U> ? U : never;
export type IsUnion<T, U = T> = T extends unknown
  ? [U] extends [T]
    ? false
    : true
  : never;
export type If<T, ToCheck, True = true, False = false> = T extends ToCheck ? True : False;
export type ContainsUnion<T, U extends T> = [U] extends [T] ? true : false;
export type ExtractUnionByKey<U, K extends string | number | symbol> = U extends Record<K, unknown> ? U : never;
export type UnionKeys<U> = U extends unknown ? keyof U : never;
export type DeepNormalizedObject<T extends object> =
  {
    [K in keyof T]: DeepNormalized<T[K]>
  };
export type DeepNormalizedArray<T extends unknown[]> =
  T extends Array<infer U>
    ? Array<DeepNormalized<U>>
    : T;
export type DeepNormalized<T> = (
  T extends null
    ? null
    : T extends undefined
      ? undefined
      : T extends unknown[]
        ? DeepNormalizedArray<T>
        : T extends object
          ? DeepNormalizedObject<T>
          : T extends string
            ? T | null
            : T
  );
/**
 * Pick properties from an object O based on an array of keys K.
 * @typeParam O - The object type to pick properties from.
 */
export type PickFromKeys<O, K extends ReadonlyArray<keyof O>> = {
  [P in K[number]]: O[P];
};
export type NonPartial<T> = {
  [K in keyof T]: Exclude<T[K], undefined>;
};
export type DeepNullableObject<T extends object> = {
  [K in keyof T]: DeepNullable<T[K]>;
};
export type DeepNullableArray<T extends unknown[]> = T extends Array<infer U> ? Array<DeepNullable<U>> : T;
export type DeepNullable<T> = T extends object
  ? DeepNullableObject<T>
  : T extends unknown[]
    ? DeepNullableArray<T>
    : T | null;
export type NullableObject<T extends object> = {
  [K in keyof T]: T[K] | null;
};
export type NullableArray<T extends unknown[]> = T extends Array<infer U> ? Array<U | null> : T;
export type Nullable<T> = T extends object
  ? NullableObject<T>
  : T extends unknown[]
    ? NullableArray<T>
    : T | null;
