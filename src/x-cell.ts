const widthValues = [
  'fill',
  '1of12',
  '2of12',
  '3of12',
  '4of12',
  '5of12',
  '6of12',
  '7of12',
  '8of12',
  '9of12',
  '10of12',
  '11of12',
  '12of12'
];

const templateHTML = `
  <style>
    .Cell {
      box-sizing: border-box;
      flex-shrink: 0;
    }
    .Cell.\-fill {
      width: 0;
      min-width: 0;
      flex-grow: 1;
    }
    .Cell.\-1of12 {
      width: calc(100% * 1 / 12);
    }
    .Cell.\-2of12 {
      width: calc(100% * 2 / 12);
    }
    .Cell.\-3of12 {
      width: calc(100% * 3 / 12);
    }
    .Cell.\-4of12 {
      width: calc(100% * 4 / 12);
    }
    .Cell.\-5of12 {
      width: calc(100% * 5 / 12);
    }
    .Cell.\-6of12 {
      width: calc(100% * 6 / 12);
    }
    .Cell.\-7of12 {
      width: calc(100% * 7 / 12);
    }
    .Cell.\-8of12 {
      width: calc(100% * 8 / 12);
    }
    .Cell.\-9of12 {
      width: calc(100% * 9 / 12);
    }
    .Cell.\-10of12 {
      width: calc(100% * 10 / 12);
    }
    .Cell.\-11of12 {
      width: calc(100% * 11 / 12);
    }
    .Cell.\-12of12 {
      width: 100%;
    }
  </style>
  <div class="Cell">
    <slot />
  </div>
`;

export default class XCell extends HTMLElement {
  cell: HTMLDivElement | null = null;

  get width(): string | undefined {
    if (this.hasAttribute('width')) {
      return this.getAttribute('width') || undefined;
    }

    return undefined;
  }

  set width(value: string | undefined) {
    if (value == null) {
      this.removeAttribute('width');
    } else if (widthValues.includes(value)) {
      this.setAttribute('width', value);
    }
  }

  constructor() {
    super();

    this.attachShadow({
      mode: 'open'
    }).innerHTML = templateHTML;

    if (this.shadowRoot) {
      this.cell = this.shadowRoot.querySelector<HTMLDivElement>('div');
    }
  }

  attributeChangedCallback(attributeName: string, oldValue: string, newValue: string) {
    switch(attributeName) {
      case 'width':
        if (this.cell) {
          this.cell.classList.remove(`-${oldValue}`);
          this.cell.classList.add(`-${newValue}`);
        }
        break;
      default:
        break;
    }
  }
}
