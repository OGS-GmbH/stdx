# Getting started

## What's inside?

The library is organized into dedicated extension modules.\
When imported, they safely patch well‑defined methods onto native
prototypes.

Current extension categories include:

- Array
- Date
- Map
- Math
- Number
- Object
- String

Check out the [reference](/reference), to get a deeper understanding of each extension.

## Installation

### Prerequisites

- Node.js version 18 or higher
- A package manager: e.g. npm, pnpm, ...
- A Node.js-based project

Install `@ogs-gmbh/stdx` using your preferred package manager:

::: code-group

```bash [npm]
$ npm add @ogs-gmbh/stdx
```

```bash [pnpm]
$ pnpm install @ogs-gmbh/stdx
```

```bash [yarn]
$ yarn add @ogs-gmbh/stdx
```

```bash [bun]
$ bun add @ogs-gmbh/stdx
```

:::

### Usage

To enable the prototype extensions, simply make sure to import it at top-level:

```typescript [example.ts]
import "@ogs-gmbh/stdx";

// Other code here...
```

That's it!
