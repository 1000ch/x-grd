import XGrid from './x-grid.js';
import XCell from './x-cell.js';

export { XGrid, XCell };

declare global {
  interface HTMLElementTagNameMap {
    'x-grid': XGrid;
    'x-cell': XCell;
  }
}
