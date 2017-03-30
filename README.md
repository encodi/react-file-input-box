# File Input Box

File input is an helper component to be able to add input boxes in any React form


## Demo & Examples

Live demo: [encodi.github.io/react-file-input-box](http://encodi.github.io/react-file-input-box/)

To build the examples locally, run:

```
npm install
npm start
```

Then open [`localhost:8000`](http://localhost:8000) in a browser.


## Installation

The easiest way to use react-file-input-box is to install it from NPM and include it in your own React build process (using [Browserify](http://browserify.org), [Webpack](http://webpack.github.io/), etc).

You can also use the standalone build by including `dist/react-file-input-box.js` in your page. If you use this, make sure you have already included React, and it is available as a global variable.

```
npm install react-file-input-box --save
```


## Usage

```
var FileInputBox = require('react-file-input-box');

<FileInputBox name="string" label="string" handleInput={(e)=>{//doSomething with file value}} >Example</FileInputBox>
```

### Properties

* name optional String that could help reference the input box
* label optional String for a Left side <label></label>
* handleInput required Function callback that will manage the value of the input

### Notes

Feel free to create Pull requests and improve this component.


## Development (`src`, `lib` and the build process)

**NOTE:** The source code for the component is in `src`. A transpiled CommonJS version (generated with Babel) is available in `lib` for use with node.js, browserify and webpack. A UMD bundle is also built to `dist`, which can be included without the need for any build system.

To build, watch and serve the examples (which will also watch the component source), run `npm start`. If you just want to watch changes to `src` and rebuild `lib`, run `npm run watch` (this is useful if you are working with `npm link`).

## License

MIT

Copyright (c) 2017 encodi.
