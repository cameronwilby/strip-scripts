# strip-scripts

Strip all script tags from a given string containing markup.

### Installation

`npm install strip-scripts --save`

or

`yarn add strip-scripts`

## Example Usage

```js
const stripScripts = require('strip-scripts');

const markup = stripScripts(`
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
  </head>
  <body>
     <script src="main.js" charset="utf-8"></script> 
  </body>
</html>
`);

console.log(markup);
```

The above example will log the following to the console:

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
  </head>
  <body>
     
  </body>
</html>
```