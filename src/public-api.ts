import "./prototypes/array/join";
import "./prototypes/date/iso-date";
import "./prototypes/map/to-object";
import "./prototypes/math/round";
import "./prototypes/number/bounds";
import "./prototypes/number/into";
import "./prototypes/object/has-keys";
import "./prototypes/string/capitalize";
import { PickFromKeys } from "./types";

/* eslint-disable @tseslint/no-unused-vars */
export type * from "./types";

declare global {
  interface Array<T> {
    nonNullishJoin(separator: string): string;
  }

  interface Date {
    /**
     * @param isLocal Indicates whether the date should be returned in local time. If omitted, the date is returned in UTC.
     * @returns date in ISO-8601 format (`YYYY-MM-DD`)
     *
     * @author Ian Wenneckers
     * @since 1.1.0
     */
    toISOStringDate(isLocal?: boolean): string;
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

