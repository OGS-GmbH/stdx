type JoinArg = string | number | null | undefined;

// eslint-disable-next-line no-eq-null, eqeqeq
const isJoinable = (x: JoinArg): x is string | number => x != null;

export function joinNonNullImpl (this: readonly JoinArg[], separator: string = " "): string {
  return this.filter(isJoinable).map(String)
    .join(separator);
}


// eslint-disable-next-line no-extend-native
Object.defineProperty(Array.prototype, "joinNonNull", {
  value: joinNonNullImpl,
  writable: true,
  configurable: true,
  enumerable: false

});

declare global {
  interface Array<T> {
    // eslint-disable-next-line @tseslint/method-signature-style
    joinNonNull(this: ReadonlyArray<T | null | undefined>, separator: string): string;
  }
}

