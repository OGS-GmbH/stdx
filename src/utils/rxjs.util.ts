import { MaybeCacheResolved } from "../services/cache.type";

function mapToMaybeCacheResolved<T> (fromCache: boolean): (value: T) => MaybeCacheResolved<T> {
  return function (data: T): MaybeCacheResolved<T> {
    return {
      data,
      fromCache
    };
  };
}

export {
  mapToMaybeCacheResolved
};
