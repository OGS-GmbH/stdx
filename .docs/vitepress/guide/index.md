# Getting started

## Installation

Install `@ogs-gmbh/stdx` using your preferred package manager:

::: code-group
```bash [npm]
npm install @ogs-gmbh/stdx
```
```bash [yarn]
yarn add @ogs-gmbh/stdx
```
```bash [pnpm]
pnpm install @ogs-gmbh/stdx
```
:::

## Quick Start


```typescript
import '@ogs-gmbh/stdx';

const mixed = ['apple', null, 'banana', undefined, 'cherry'];
const filtered = mixed.nonNullishJoin(', ');
console.log(filtered);
// => "apple, banana, cherry"

const name = capitalize('hello world');
// => 'Hello world'
```

## 🧩 What's Inside?

The library is organized into dedicated extension modules.\
When imported, they safely patch well‑defined methods onto native
prototypes.

Current extension categories include:

### **Array Extensions**

Useful helpers like: - `nonNullishJoin` --- join elements while skipping
`null`/`undefined` - ...and more coming soon

### **String Extensions**

Clean and readable string helpers such as: - `capitalize` --- uppercase
only the first letter of a string

### **Object Extensions**

Utilities for merging, flattening, safe access, etc. *(Upcoming)*



