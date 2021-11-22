import XCell from '../src/x-cell';

describe('XCell', (): void => {
  beforeAll(() => {
    customElements.define('x-cell', XCell);
  });

  test('should be defined', (): void => {
    expect(XCell).toBeDefined();
    expect(customElements.get('x-cell')).toBe(XCell);

    const cell = new XCell();
    expect(cell).toBeInstanceOf(HTMLElement);
  });
})
