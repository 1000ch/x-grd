const alignValues = [
  'top',
  'middle',
  'bottom',
  'stretch',
  'baseline'
];

const justifyValues = [
  'start',
  'center',
  'end',
  'between',
  'around'
];

const templateHTML = `
  <style>
    .Grid {
      display: flex;
      flex-wrap: wrap;
    }
    .Grid.\-top {
      align-items: flex-start;
    }
    .Grid.\-middle {
      align-items: center;
    }
    .Grid.\-bottom {
      align-items: flex-end;
    }
    .Grid.\-stretch {
      align-items: stretch;
    }
    .Grid.\-baseline {
      align-items: baseline;
    }
    .Grid.\-start {
      justify-content: flex-start;
    }
    .Grid.\-center {
      justify-content: center;
    }
    .Grid.\-end {
      justify-content: flex-end;
    }
    .Grid.\-between {
      justify-content: space-between;
    }
    .Grid.\-around {
      justify-content: space-around;
    }
  </style>
  <div class="Grid">
    <slot />
  </div>
`;

export default class XGrid extends HTMLElement {
  grid: HTMLDivElement | null = null;

  get align(): string | undefined {
    if (this.hasAttribute('align')) {
      return this.getAttribute('align') || undefined;
    }

    return undefined;
  }

  set align(value: string | undefined) {
    if (value == null) {
      this.removeAttribute('align');
    } else if (alignValues.includes(value)) {
      this.setAttribute('align', value);
    }
  }

  get justify(): string | undefined {
    if (this.hasAttribute('justify')) {
      return this.getAttribute('justify') || undefined;
    }

    return undefined;
  }

  set justify(value: string | undefined) {
    if (value == null) {
      this.removeAttribute('justify');
    } else if (justifyValues.includes(value)) {
      this.setAttribute('justify', value);
    }
  }

  constructor() {
    super();

    this.attachShadow({
      mode: 'open'
    }).innerHTML = templateHTML;

    if (this.shadowRoot) {
      this.grid = this.shadowRoot.querySelector<HTMLDivElement>('div');
    }
  }

  attributeChangedCallback(attributeName: string, oldValue: string, newValue: string) {
    switch(attributeName) {
      case 'align':
        if (this.grid) {
          this.grid.classList.remove(`-${oldValue}`);
          this.grid.classList.add(`-${newValue}`);
        }
        break;
      case 'justify':
        if (this.grid) {
          this.grid.classList.remove(`-${oldValue}`);
          this.grid.classList.add(`-${newValue}`);
        }
        break;
      default:
        break;
    }
  }
}
