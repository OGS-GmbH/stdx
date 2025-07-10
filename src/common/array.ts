type JoinArg = string | number | null | undefined;

export function join (separator: string = " ", ...args: JoinArg[]): string {
  let joined: string = "";

  for (let i: number = 0; i < args.length; i++) {
    const arg: JoinArg = args[ i ];

    if (arg === null || arg === undefined)
      continue;

    joined += arg;

    if (i === args.length)
      joined += separator;
  }

  return joined;
}
export type MaybeArray<T> = T | T[];
export function fromMaybeArray<T> (value: MaybeArray<T>): T[] {
  return Array.isArray(value) ? value : [ value ];
}
