interface Debounce {
  track: () => void;
  result: () => number | null;
  invoke: (callback: () => unknown) => void;
}


function createDebounce (expectedDuration: number): Debounce {
  let trackedTimestamp: number | undefined;

  function track (): void {
    trackedTimestamp = Date.now();
  }

  function result (): number {
    if (trackedTimestamp === undefined)
      throw new Error("Timestamp was not tracked.");

    const currentTimestamp: number = Date.now();
    const diffTimestamp: number = currentTimestamp - trackedTimestamp;

    return expectedDuration > diffTimestamp
      ? expectedDuration - diffTimestamp
      : 0;
  }

  function invoke (callback: () => unknown): void {
    const delay: number = result();

    if (delay === 0) {
      callback();

      return;
    }

    setTimeout((): void => {
      callback();
    }, delay);
  }

  return {
    track,
    result,
    invoke
  };
}

export {
  createDebounce
};
export type {
  Debounce
};
