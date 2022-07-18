A JavaScript utility function to convert a string into "Spongebob case".

## Installation

```shell
npm i @jgarrow/spongebob-case
```

## Usage


 ### ES6 `import`
 
```js
import { toSpongebobCase } from '@jgarrow/spongebob-case';

const myString = "This is a string.";
const spongebobString = toSpongebobCase(myString);

console.log(spongebobString); // "tHiS iS a StRiNg."
```

### CommonJS `require`

```js
const { toSpongebobCase } = require('@jgarrow/spongebob-case');

const myString = "This is a string.";
const spongebobString = toSpongebobCase(myString);

console.log(spongebobString); // "tHiS iS a StRiNg."
```
