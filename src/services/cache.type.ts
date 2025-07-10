interface MaybeCacheResolved<T> {
  data: T;
  fromCache: boolean;
}

export type {
  MaybeCacheResolved
};
