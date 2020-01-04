import XGrid from 'https://unpkg.com/x-grd/dist/x-grid.js';
import XCell from 'https://unpkg.com/x-grd/dist/x-cell.js';
import XMarked from 'https://unpkg.com/x-marked/dist/index.js';

customElements.define('x-grid', XGrid);
customElements.define('x-cell', XCell);
customElements.define('x-marked', XMarked);

const grid = document.querySelector('#grid');
const align = document.querySelector('#align-items');
const justify = document.querySelector('#justify-content');

align.addEventListener('change', () => {
  grid.align = align.value;
});

justify.addEventListener('change', () => {
  grid.justify = justify.value;
});

const template = document.querySelector('#template-cell');
const add = document.querySelector('#add');
const remove = document.querySelector('#remove');

add.addEventListener('click', () => {
  const cell = document.importNode(template.content, true);
  const select = cell.querySelector('select');

  grid.appendChild(cell);
  select.addEventListener('change', () => {
    select.parentNode.width = select.value;
  });
});

remove.addEventListener('click', () => {
  if (grid.children.length) {
    grid.children[grid.children.length - 1].remove();
  }
});

add.click();
add.click();
