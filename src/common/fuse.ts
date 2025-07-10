import { FuseResult } from "fuse.js";

function mapToFuse<T> (arr: T[]): Array<FuseResult<T>> {
  return arr.map((item: T, index: number): FuseResult<T> => ({
    item,
    refIndex: index
  }));
}

export {
  mapToFuse
};
