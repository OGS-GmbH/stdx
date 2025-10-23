
export function parseMapToObject (map: Map<unknown, unknown>): object | undefined {
  // eslint-disable-next-line @tseslint/no-unsafe-assignment
  const obj: object | undefined = Object.fromEntries(map);

  return obj && Object.keys(obj).length > 0 ? obj : undefined;
}
export function roundWithThreshold (value: number, threshold: number): number {
  const integerPart: number = Math.floor(value);
  const fraction: number = value - integerPart;

  return fraction >= threshold
    ? Math.ceil(value)
    : integerPart;
}
export function intoNumber (value: unknown): number | null {
  if (typeof value === "number")
    return Number.isFinite(value) ? value : null;


  if (typeof value === "bigint") {
    const n: number = Number(value);

    return Number.isSafeInteger(n) ? n : null;
  }

  if (typeof value === "string") {
    const s: string = value.trim();

    if (s === "") return null;

    const n: number = Number(s);

    return Number.isFinite(n) ? n : null;
  }

  return null;
}
export function hasKeys<T extends object> (objectToCheck: T, ...keys: ReadonlyArray<keyof T>): objectToCheck is PickFromKeys<T, typeof keys> {
  let _hasKeys: boolean = true;

  for (const key of keys) {
    if (!_hasKeys)
      break;

    _hasKeys = key in objectToCheck;
  }

  return _hasKeys;
}
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
export function normalizeString (data: string): string | null {
  const trimmedData: string = data.trim();

  return trimmedData.length === 0 ? null : trimmedData;
}
export function deepNormalizeArray<T extends unknown[]> (data: T): DeepNormalizedArray<T> {
  /* eslint-disable-next-line @tseslint/no-use-before-define */
  return data.map((dataItem: unknown) => deepNormalize(dataItem)) as DeepNormalizedArray<T>;
}
export function deepNormalizeObject<T extends object> (data: T): DeepNormalizedObject<T> {
  const keys: Array<keyof T> = Object.keys(data) as Array<keyof T>;
  const normalized: object = {};

  for (const key of keys) {
    const value: unknown = data[ key ];

    /* eslint-disable @tseslint/no-use-before-define */
    // @ts-expect-error indexing by T
    normalized[ key ] = deepNormalize(value);
    /* eslint-enable @tseslint/no-use-before-define */
  }

  return normalized as DeepNormalizedObject<T>;
}
export function normalizeNumber (data: number): number {
  /* eslint-disable-next-line no-compare-neg-zero */
  return data === -0 ? 0 : data;
}
export function deepNormalize<T> (data: T): DeepNormalized<T> {
  if (data === null)
    return null as DeepNormalized<T>;

  if (data === undefined)
    return undefined as DeepNormalized<T>;

  if (Array.isArray(data))
    return deepNormalizeArray(data) as DeepNormalized<T>;

  const typeofData: "string" | "number" | "bigint" | "boolean" | "symbol" | "undefined" | "object" | "function" = typeof data;

  switch (typeofData) {
    case "object": {
      return deepNormalizeObject(data) as DeepNormalized<T>;
    }

    case "string": {
      return normalizeString(data as string) as DeepNormalized<T>;
    }

    case "number": {
      return normalizeNumber(data as number) as DeepNormalized<T>;
    }

    default: {
      return data as DeepNormalized<T>;
    }
  }
}

