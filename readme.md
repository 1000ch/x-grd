# `<x-grd>`

Simple, Light-weight and Flexible Web Components for grid layout.

## Install

Using [npm](https://www.npmjs.org/package/x-grd):

```sh
$ npm install x-grd
```

## Usage

Import `XGrid` and `XCell`, register them.

```html
<script type="module">
  import { XGrid, XCell } from './x-grd/index.js';
  customElements.define('x-grid', XGrid);
  customElements.define('x-cell', XCell);
</script>
```

Put `<x-grid>` and `<x-cell>`.

```html
<x-grid>
  <x-cell></x-cell>
</x-cell>
```

## License

[MIT](https://1000ch.mit-license.org) © [Shogo Sensui](https://github.com/1000ch)
