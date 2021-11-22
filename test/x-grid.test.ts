import XGrid from '../src/x-grid';

describe('XGrid', (): void => {
  beforeAll(() => {
    customElements.define('x-grid', XGrid);
  });

  test('should be defined', (): void => {
    expect(XGrid).toBeDefined();
    expect(customElements.get('x-grid')).toBe(XGrid);

    const grid = new XGrid();
    expect(grid).toBeInstanceOf(HTMLElement);
  });
})
