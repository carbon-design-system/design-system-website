**The _Carbon Component Library_ provides front-end developers & engineers a collection of reusable HTML and SCSS partials to build websites and user interfaces. Adopting the library enables developers to use consistent markup, styles, and behavior in prototype and production work.**

## Install

Using npm:

```sh
$ npm install --save carbon-components
```

## What's included

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

## CDN

Use unpkg for easy access to our built static files. This is great for prototyping and trying `carbon-components` without installing anything.

|     | URL                                                                  |
|-----|----------------------------------------------------------------------|
| CSS | https://unpkg.com/carbon-components/css/carbon-components.min.css    |
| ES5 | https://unpkg.com/carbon-components/scripts/carbon-components.min.js |
| UMD | https://unpkg.com/carbon-components/umd/index.js                     |

See all files from `carbon-components` available on unpkg CDN [here](https://unpkg.com/carbon-components/)

## SCSS

Using the Carbon Sass files infers usage of the SCSS pre-processor.
All Sass files use the `*.scss` file extension.

### Things to know

If you're starting a new project without a boilerplate,
you need to know about a few things to get started.

**Autoprefixer**: Make sure your build process uses [autoprefixer](https://github.com/postcss/autoprefixer) to ensure vendor prefixes are automatically added to your output CSS.

**Default body styles**: CSS is automatically applied to `<body>` element, which comes from [_css--body.scss](https://github.com/carbon-design-system/carbon-components/blob/master/src/globals/scss/_css--body.scss). These styles are meant to cascade down to everything in `<body>` to set common styles shared across all components.

```css
body {
  @include reset;
  font-family: 'IBM Plex Sans';
  color: $text-01;
  background-color: $ui-02;
  line-height: 1;
}
```

**Icons**: A lot of components depend on SVG icons from [carbon-icons](https://github.com/carbon-design-system/carbon-icons). Read the [docs](https://github.com/carbon-design-system/carbon-icons/blob/master/docs/usage.md) for details on how to use them.

**Global SCSS variables**: These variables are used to configure which parts of the SCSS gets compiled where each variable controls a SCSS file of the same name. All variables are set to `true` by default, except for `_css--font-face.scss`

For example:

- When you set `$css--reset: true`, then the contents of [_css--reset.scss](https://github.com/carbon-design-system/carbon-components/blob/master/src/globals/scss/_css--reset.scss) will be part of your output CSS.
- When you set `$css--reset: false`, then nothing gets included from that SCSS file.
- When the variable is not declared at all, then nothing gets included from that SCSS file.

The same rules apply to all the following variables:

```scss
// In styles.scss:
// These are the default settings.

$css--font-face: false !default; // _css--font-face.scss
$css--helpers: true !default;    // _css--helpers.scss
$css--body: true !default;       // _css--body.scss
$css--use-layer: true !default;  // _layer.scss
$css--reset: true !default;      // _css--reset.scss
$css--typography: true !default; // _css--typography.scss
```

These flags are set for you by default when you `@import` the `styles.scss` file.
You can override these default settings by redeclarining the variables.

#### Importing SCSS files

To add a component style to your build, simply import the component directly

```js
@import 'node_modules/carbon-components/scss/components/card/card';
```

Importing a component this way will bring in any dependencies that component has as well. The import system removes duplicate dependencies, so shared dependencies between components will not create extra CSS.

#### Namespacing

Carbon Components are built to be included individually and not clobber global styles - all `class` attributes are prefixed by the `bx--` moniker.

## Javascript

### Using a module bundler: recommended

Using a module bundler will bring in only the component code your application needs, created an optimized build for production. Carbon Components ships with a `umd` build for each component, as well as an `js:next` build for use with webpack 2 or rollup. After you've installed the components through `npm`, there are a few ways to initialize the component.

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
    <script src="node_modules/carbon-components/scripts/carbon-components.min.js"></script>
    <script>
      CarbonComponents.settings.disableAutoInit = true;
    </script>
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

### Wrapping a component with JavaScript framework of your choice

Many JavaScript frameworks have a mechanism to automatically create/destroy DOM elements, for example, upon change in array.
Carbon Components defined in DOM elements that are created after `DOMContentLoaded` event, like ones such JavaScript frameworks create upon change in array, need to be initialized (and released) manually.

The easiest way to manually initialize/release components is defining a "wrapping component", with the JavaScript framework of your choice. Here's an example with Web Components' [Custom Elements v1 spec](https://developer.mozilla.org/en-US/docs/Web/Web_Components/Custom_Elements), but the notion of components, along with the lifecycle callbacks, are commonly found in many other JavaScript frameworks.

```javascript
class BXLoading extends HTMLElement {
  // Called when this custom element gets into render tree
  connectedCallback() {
    // `this` here is `<bx-loading>` element
    this.innerHTML = '(e.g. snippet from http://carbondesignsystem.com/components/loading/code)';
    this.loading = CarbonComponents.Loading.create(this.querySelector('[data-loading]'));
  }

  // Called when this custom element gets out of render tree
  disconnectedCallback() {
    this.loading.release();
  }
}

customElements.define('bx-loading', BXLoading);
```
