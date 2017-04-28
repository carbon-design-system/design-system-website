**The _Carbon component library_ provides front-end developers & engineers a collection of reusable HTML and SCSS partials to build websites and user interfaces. Adopting the library enables developers to use consistent markup, styles, and behavior in prototype and production work.**

## Quick start

Using npm:

```bash
$ npm install --save carbon-components
```

## What's included

The `global` directory includes transpiled, minified assets needed to use the Carbon Design System.


Including the minified or the non-minified assets as well as any HTML snippets will have Carbon work for you out of the box. This methodology is appropriate for sandbox environments or testing, but we recommend people use the modules to create an optimized build.

```js
carbon-components/
├── html
├── css
│   ├── carbon-components.css
│   └── carbon-components.min.css
├── scripts
│   ├── carbon-components.js
│   └── carbon-components.min.js
├── scss
│   └── modal
│       └── _modal.scss
├── umd
│   └── index.js
├── es
│   └── index.js
└── src
```

## SCSS

Using the Carbon Sass files infers usage of the SCSS pre-processor.

#### Importing a component style

To add a component style to your build, simply import the component directly

```javascript
@import 'node_modules/carbon-components/scss/card/card';
```

Importing a component this way will bring in any dependencies that component has as well. The import system removes duplicate dependencies, so shared dependencies between components will not create extra CSS.

#### Namespacing

Carbon components are built to be included individually and not clobber global styles - all `class` attributes are prefixed by the `bx--` moniker.

#### Global Flags

Carbon exposes a few global flags to alter what CSS gets compiled.

| SCSS flag       | Default | Description                                                                         |
|-----------------|---------|-------------------------------------------------------------------------------------|
| $css--font-face | false   | If set to true, add in css font face definition                                     |
| $css--helpers   | true    | If set to true, create the css visual helper styles                                 |
| $css--body      | true    | If set to true, set default body and typographical styles                           |
| $css--reset     | false   | If set to true, remove the reset on individual components and apply to global scope |

## Javascript

### Using a module bundler: recommended

Using a module bundler will bring in only the component code your application needs, created an optimized build for production. Carbon components ships with a `umd` build for each component, as well as an `js:next` build for use with webpack 2 or rollup. After you've installed the components through `npm`, there are a few ways to initialize the component.

#### Initialize all instances of a component using a module bundler

```js
import { Modal } from 'carbon-components'
Modal.init();
```

#### Initialize a specific instance

```js
import { Modal } from 'carbon-components';
const myModal = document.querySelector('[data-modal]'); // element node of the modal itself
Modal.init(myModal);
```

#### Reference a previously initialized component using a module bundler

```js
import { Modal } from 'carbon-components';
const myModal = document.querySelector('[data-modal]');
const myModalInstance = Modal.components.get(myModal);
```

### Using the compiled carbon-components file directly

Users can also opt to use the pre-compiled `carbon-components.js` file directly. We recommend that most users do _not_ use this file, as it includes components your application may or may not actually be using. By default, including the javascript file will automatically instantiate any component on the page as well as create a global objected called `CarbonComponents`.

#### Initialize all instances of a component using the compiled file directly

```html
<html>
  <body>
    <!-- Put HTML snippets of components here... -->
    <script src="node_modules/carbon-components/scripts/carbon-components.min.js"></script>
  </body>
</html>
```

#### Don't initialize components by default

```html
<html>
  <body>
    <!-- Put HTML snippets of components here... -->
    <script>
      CarbonComponents.settings.disableAutoInit = true;
    </script>
    <script src="node_modules/carbon-components/scripts/carbon-components.min.js"></script>
  </body>
</html>
```

#### Initialize specific component

```html
<html>
  <body>
    <!-- Put a HTML snippet from http://www.carbondesignsystem.com/components/modal/code here -->
    <script src="node_modules/carbon-components/scripts/carbon-components.min.js"></script>
    <script>
      CarbonComponents.settings.disableAutoInit = true;
      var modal = document.querySelector('[data-modal]');
      CarbonComponents.Modal.init(modal);
    </script>
  </body>
</html>
```

#### Reference a previously initialized component using the compiled file directly

```html
<html>
  <body>
    <!-- Put a HTML snippet from http://www.carbondesignsystem.com/components/modal/code here -->
    <script src="node_modules/carbon-components/scripts/carbon-components.min.js"></script>
    <script>
      var modal = document.querySelector('[data-modal]');
      var myModalRef = CarbonComponents.Modal.components.get(modal);
    </script>
  </body>
</html>
```
