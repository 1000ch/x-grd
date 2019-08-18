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
    :host {
      box-sizing: border-box;
      flex-shrink: 0;
    }
    :host([width="fill"]) {
      width: 0;
      min-width: 0;
      flex-grow: 1;
    }
    :host([width="1of12"]) {
      width: calc(100% * 1 / 12);
    }
    :host([width="2of12"]) {
      width: calc(100% * 2 / 12);
    }
    :host([width="3of12"]) {
      width: calc(100% * 3 / 12);
    }
    :host([width="4of12"]) {
      width: calc(100% * 4 / 12);
    }
    :host([width="5of12"]) {
      width: calc(100% * 5 / 12);
    }
    :host([width="6of12"]) {
      width: calc(100% * 6 / 12);
    }
    :host([width="7of12"]) {
      width: calc(100% * 7 / 12);
    }
    :host([width="8of12"]) {
      width: calc(100% * 8 / 12);
    }
    :host([width="9of12"]) {
      width: calc(100% * 9 / 12);
    }
    :host([width="10of12"]) {
      width: calc(100% * 10 / 12);
    }
    :host([width="11of12"]) {
      width: calc(100% * 11 / 12);
    }
    :host([width="12of12"]) {
      width: 100%;
    }
  </style>
  <slot />
`;

export default class XCell extends HTMLElement {
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
      mode: 'closed'
    }).innerHTML = templateHTML;
  }
}
