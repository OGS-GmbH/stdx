import "./array/join";
import "./date/iso-date";
import "./map/to-object";
import "./math/round";
import "./number/bounds";
import "./number/into";
import "./object/has-keys";
import "./string/capitalize";
import { PickFromKeys } from "./types";

/* eslint-disable @tseslint/no-unused-vars */
export type * from "./types";

declare global {
  interface Array<T> {
    nonNullishJoin(separator: string): string;
  }

  interface Date {
    toISOStringDate(): string;
  }

  interface Map<K, V> {
    toObject(): K extends PropertyKey ? Record<K, V> | null : never;
  }

  interface Math {
    roundWithThreshold(value: number, threshold: number): number;
  }

  interface Number {
    ensureBounds(min: number, max: number): number;
  }

  interface NumberConstructor {
    into(value: unknown): number | null;
  }

  interface Object {
    hasKeys<T extends object>(...keys: ReadonlyArray<keyof T >): this is PickFromKeys<T, typeof keys>;
  }

  interface String {
    capitalize(): string;
  }
}

