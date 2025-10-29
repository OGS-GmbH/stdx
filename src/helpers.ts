import type { DeepNormalized, DeepNormalizedObject, DeepNormalizedArray } from "./types";


export function deepNormalizeObject<T extends object> (data: T): DeepNormalizedObject<T> {
  const keys: Array<keyof T> = Object.keys(data) as Array<keyof T>;
  const normalized: object = {};

  for (const key of keys) {
    const value: unknown = data[ key ];

    // @ts-expect-error indexing by T
    // eslint-disable-next-line @tseslint/no-use-before-define
    normalized[ key ] = deepNormalize(value);
  }

  return normalized as DeepNormalizedObject<T>;
}
export function deepNormalizeArray<T extends unknown[]> (data: T): DeepNormalizedArray<T> {
  // eslint-disable-next-line @tseslint/no-use-before-define
  return data.map((dataItem: unknown) => deepNormalize(dataItem)) as DeepNormalizedArray<T>;
}
export function deepNormalize<T> (data: T): DeepNormalized<T> {
  if (data === null)
    return null as DeepNormalized<T>;

  if (data === undefined)
    return undefined as DeepNormalized<T>;

  if (Array.isArray(data))
    return (data as T[]).deepNormalize() as DeepNormalized<T>;

  const typeofData: "string" | "number" | "bigint" | "boolean" | "symbol" | "undefined" | "object" | "function" = typeof data;

  switch (typeofData) {
    case "object": {
      return deepNormalizeObject(data) as DeepNormalized<T>;
    }

    case "string": {
      return (data as string).normalizeString() as DeepNormalized<T>;
    }

    case "number": {
      return (data as number).normalizeNumber() as DeepNormalized<T>;
    }

    default: {
      return data as DeepNormalized<T>;
    }
  }
}
