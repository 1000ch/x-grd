# `<x-grd>`

> Simple, Light-weight and Flexible Web Components for grid layout.

[![Build Status](https://travis-ci.org/1000ch/x-grd.svg?branch=master)](https://travis-ci.org/1000ch/x-grd)
[![NPM version](https://badge.fury.io/js/x-grd.svg)](http://badge.fury.io/js/x-grd)
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
import XGrid from 'https://cdn.jsdelivr.net/npm/x-grd/dist/x-grid.js';
import XCell from 'https://cdn.jsdelivr.net/npm/x-grd/dist/x-cell.js';

customElements.define('x-grid', XGrid);
customElements.define('x-cell', XCell);
</script>
```

Put `<x-grid>` and `<x-cell>`.

```html
<x-grid align="stretch" justify="center">
  <x-cell width="fill"></x-cell>
  <x-cell width="2of12"></x-cell>
</x-cell>
```

## API

### `<x-grid align>` attribute

- `top`: Pull items to top
- `middle`: Pull items to middle
- `bottom`: Pull items to bottom
- `stretch`: Stretch items
- `baseline`: Pull items to baseline

### `<x-grid justify>` attribute

- `start`: Layout items to start
- `center`: Layout items to center
- `end`: Layout items to end
- `between` Add spaces between items
- `around`: Add spaces around items

### `<x-cell width>` attribute

- `fill`: Set item width to left
- `1of12`: Set item width to 8.3%
- `2of12`: Set item width to 16.7%
- `3of12`: Set item width to 25%
- `4of12`: Set item width to 33%
- `5of12`: Set item width to 41.7%
- `6of12`: Set item width to 50%
- `7of12`: Set item width to 58.3%
- `8of12`: Set item width to 66.7%
- `9of12`: Set item width to 75%
- `10of12`: Set item width to 83.3%
- `11of12`: Set item width to 91.7%
- `12of12`: Set item width to 100%

## License

[MIT](https://1000ch.mit-license.org) © [Shogo Sensui](https://github.com/1000ch)
