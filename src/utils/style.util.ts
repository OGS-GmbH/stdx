import _ from "lodash";

function toCSSUnit (value: string | number): string {
  if (typeof value === "number")
    return `${ value }px`;

  if (Number.isNaN(Number(value)))
    return value;

  return `${ value }px`;
}

export {
  toCSSUnit
};
