function into (value: unknown): number | null {
  if (value === null || value === undefined)
    return null;

  return Number(value);
}

Object.defineProperty(Number, "into", {
  value: into,
  writable: true,
  configurable: false,
  enumerable: false
});
