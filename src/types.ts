/**
 * @module Types
 */
/* eslint-disable @stylistic/ts/padding-line-between-statements */

/**
 * Converts a union type to an intersection type.
 *
 * @typeParam U - The union type to convert
 *
 * @example
 * type Union = { a: string } | { b: number };
 * type Result = UnionToIntersection<Union>;
 * // Result: { a: string } & { b: number }
 */
export type UnionToIntersection<U> =
  (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void
    ? I
    : never;

/**
 * Extracts the element type from an `array` type.
 *
 * @typeParam T - The `array` type to infer from
 *
 * @example
 * type Result = InferArray<[string, number, boolean]>;
 * // Result: string | number | boolean
 */
export type InferArray<T extends unknown[]> = T extends Array<infer U> ? U : never;

/**
 * Determines whether a type is a union type (has multiple constituents).
 *
 * @typeParam T - The type to check
 * @typeParam U - Internal parameter for comparison (defaults to T)
 * @example
 * type A = IsUnion<string | number>; // true
 * type B = IsUnion<string>; // false
 */
export type IsUnion<T, U = T> = T extends unknown
  ? [U] extends [T]
    ? false
    : true
  : never;

/**
 * Conditional type that returns `true` if `T` extends `ToCheck`, otherwise returns `false`.
 *
 * @typeParam T - The type to check
 * @typeParam ToCheck - The type to check against
 * @typeParam True - The type to return if the condition is `true` (default: `true`)
 * @typeParam False - The type to return if the condition is `false` (default: `false`)
 *
 * @example
 * type A = If<string, string, 'yes', 'no'>; // 'yes'
 * type B = If<string, number, 'yes', 'no'>; // 'no'
 */
export type If<T, ToCheck, True = true, False = false> = T extends ToCheck ? True : False;

/**
 * Checks whether type `U` is fully contained within type `T` (i.e., whether `U` is a subtype of `T`).
 *
 * @typeParam T - The broader type
 * @typeParam U - The type to check, constrained to extend T
 *
 * @example
 * type A = ContainsUnion<string | number, string>; // true
 * type B = ContainsUnion<string, string | number>; // false
 */
export type ContainsUnion<T, U extends T> = [U] extends [T] ? true : false;

/**
 * Extracts members from a union type `U` that have a specific key `K`.
 *
 * @typeParam U - The union type to filter
 * @typeParam K - The key that must exist on the extracted types
 *
 * @example
 * type Union = { type: 'a'; value: string } | { type: 'b'; count: number } | { other: boolean };
 * type Result = ExtractUnionByKey<Union, 'type'>;
 * // Result: { type: 'a'; value: string } | { type: 'b'; count: number }
 */
export type ExtractUnionByKey<U, K extends string | number | symbol> = U extends Record<K, unknown> ? U : never;

/**
 * Extracts all possible keys from a union of `object` types.
 *
 * @typeParam U - The union type to extract keys from
 *
 * @example
 * type Union = { a: string; b: number } | { b: number; c: boolean };
 * type Keys = UnionKeys<Union>;
 * // Keys: 'a' | 'b' | 'c'
 */
export type UnionKeys<U> = U extends unknown ? keyof U : never;

/**
 * Recursively applies `DeepNormalized` to all properties of an `object` type.
 *
 * @typeParam T - `object` type to normalize
 *
 * @example
 * // Before:
 * type RawUser = {
 *   id: string | number | null;
 *   name?: string | null;
 *   address: {
 *     street: string | null;
 *     city?: string | null;
 *   } | null;
 * };
 *
 * // Usage:
 * type NormalizedUser = DeepNormalizedObject<RawUser>;
 *
 * // After (assuming `DeepNormalized<T>` removes null/undefined and recurses):
 * // type NormalizedUser = {
 * //   id: string | number;
 * //   name: string;
 * //   address: {
 * //     street: string;
 * //     city: string;
 * //   };
 * // };
 */
export type DeepNormalizedObject<T extends object> =
  {
    [K in keyof T]: DeepNormalized<T[K]>
  };


/**
 * Recursively applies `DeepNormalized` to an `array` type.
 *
 * @typeParam T - The array type to normalize
 *
 * @example
 * // Before:
 * type RawItem = {
 *   id: string | number | null;
 *   tags?: (string | null | undefined)[];
 * };
 *
 * type RawItems = RawItem[];
 *
 * // Usage:
 * type NormalizedItems = DeepNormalizedArray<RawItems>;
 *
 * // After (assuming `DeepNormalized<T>` removes null/undefined and recurses):
 * // type NormalizedItems = Array<{
 * //   id: string | number;
 * //   tags: string[];
 * // }>;
 */
export type DeepNormalizedArray<T extends unknown[]> =
  T extends Array<infer U>
    ? Array<DeepNormalized<U>>
    : T;

/**
 * Recursively normalizes a type by making all properties nullable throughout the type tree.
 * Non-string primitive types, null, and undefined are preserved as-is.
 *
 * @typeParam T - Type to normalize
 * @example
 * type Original = {
 *   name: string;
 *   age: number;
 *   address: {
 *     street: string
 *   }
 * };
 *
 * type Result = DeepNormalized<Original>;
 * // Result: {
 * //   name: string | null;
 * //   age: number;
 * //   address: {
 * //     street: string | null
 * //   }
 * // }
 */
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
 * Creates a new type by picking only the properties specified in the keys `array` from `object`.
 * Similar to `Pick`, but accepts a readonly `array` of keys.
 *
 * @typeParam O - The `object` type to pick from
 * @typeParam K - A readonly array of keys to pick
 *
 * @example
 * type Original = {
 *   a: string
 *   b: number
 *   c: boolean
 * };
 *
 * type Result = PickFromKeys<Original, ['a', 'c']>;
 * // Result: { a: string; c: boolean }
 */
export type PickFromKeys<O, K extends ReadonlyArray<keyof O>> = {
  [P in K[number]]: O[P];
};

/**
 * Makes all properties of a `object` type required by excluding `undefined` from each property type.
 *
 * @typeParam T - `object` to make non-partial
 *
 * @example
 * type Original = { a?: string; b: number | undefined };
 * type Result = NonPartial<Original>;
 * // Result: { a: string; b: number }
 */
export type NonPartial<T> = {
  [K in keyof T]: Exclude<T[K], undefined>;
};

/**
 * Recursively applies `DeepNullable` to all properties of an `object` type.
 *
 * @typeParam T - `object` type to make nullable
 */
export type DeepNullableObject<T extends object> = {
  [K in keyof T]: DeepNullable<T[K]>;
};

/**
 * Recursively applies `DeepNullable` to `array` type.
 *
 * @typeParam T - `Array` type to make nullable
 */
export type DeepNullableArray<T extends unknown[]> = T extends Array<infer U> ? Array<DeepNullable<U>> : T;

/**
 * Recursively makes all properties throughout a type tree nullable by adding `null` to each property.
 *
 * @typeParam T - The type to make deeply nullable
 *
 * @example
 * type Original = {
 *   name: string;
 *   address: {
 *     street: string;
 *     city: string;
 *   }
 * };
 *
 * type Result = DeepNullable<Original>;
 * // Result: {
 * //   name: string | null;
 * //   address: {
 * //   street: string | null;
 * //   city: string | null;
 * //   } | null;
 * // }
 */
export type DeepNullable<T> = T extends object
  ? DeepNullableObject<T>
  : T extends unknown[]
    ? DeepNullableArray<T>
    : T | null;

/**
 * Makes all properties of an `object` type nullable (adds `null` to each property).
 *
 * @typeParam T - `object` type to make nullable
 *
 * @example
 * type Original = { name: string; age: number };
 * type Result = NullableObject<Original>;
 * // Result: { name: string | null; age: number | null }
 */
export type NullableObject<T extends object> = {
  [K in keyof T]: T[K] | null;
};

/**
 * Makes `array` type nullable (adds `null` to the element type).
 *
 * @typeParam T - `array` type to make nullable
 *
 * @example
 * type Original = string[];
 * type Result = NullableArray<Original>;
 * // Result: (string | null)[]
 */
export type NullableArray<T extends unknown[]> = T extends Array<infer U> ? Array<U | null> : T;

/**
 * Makes all properties at the first level nullable by adding `null`.
 * Unlike `DeepNullable`, this only applies to the immediate properties, not nested ones.
 *
 * @typeParam T - Type to make nullable
 *
 * @example
 * type Original = { name: string; address: { street: string } };
 * type Result = Nullable<Original>;
 * // Result: { name: string | null; address: { street: string } | null }
 */
export type Nullable<T> = T extends object
  ? NullableObject<T>
  : T extends unknown[]
    ? NullableArray<T>
    : T | null;
