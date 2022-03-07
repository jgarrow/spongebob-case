A JavaScript utility function to convert a string into "Spongebob case".

## Installation

```shell
npm i @jgarrow/spongebob-case
```

## Usage

```js
import { toSpongebobCase } from '@jgarrow/spongebob-case';

const myString = "This is a string.";
const spongebobString = toSpongebobCase(myString);

console.log(spongebobString); // "tHiS iS a StRiNg."
```