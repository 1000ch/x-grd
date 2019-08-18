# `<x-grd>`

> Simple, Light-weight and Flexible Web Components for grid layout.

[![Build Status](https://travis-ci.org/1000ch/x-grd.svg?branch=master)](https://travis-ci.org/1000ch/x-grd)
[![NPM version](https://badge.fury.io/js/x-grd.svg)](http://badge.fury.io/js/x-grd)
[![Dependency Status](https://david-dm.org/1000ch/x-grd.svg)](https://david-dm.org/1000ch/x-grd)
[![devDependency Status](https://david-dm.org/1000ch/x-grd/dev-status.svg)](https://david-dm.org/1000ch/x-grd?type=dev)

## Install

Using [npm](https://www.npmjs.org/package/x-grd):

```sh
$ npm install x-grd
```

## Usage

Import `XGrid` and `XCell`, register them.

```html
<script type="module">
  import XGrid from './x-grd/dist/x-grid.js';
  import XCell from './x-grd/dist/x-cell.js';
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
