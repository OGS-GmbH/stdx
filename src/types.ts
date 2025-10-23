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
