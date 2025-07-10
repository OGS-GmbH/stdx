type IntoNumberArg = string | bigint | null | undefined;

export function intoNumber (value: IntoNumberArg): number | null {
  if (value === null || value === undefined)
    return null;

  return Number(value);
}
export type Bounds = {
  min?: number;
  max?: number;
};
export function keepBounds (value: number, bounds: Bounds): number {
  if (bounds.min !== undefined && bounds.min > value)
    return bounds.min;

  if (bounds.max !== undefined && bounds.max < value)
    return bounds.max;

  return value;
}
