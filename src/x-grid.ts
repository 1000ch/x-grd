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
    :host { display: flex; flex-wrap: wrap; }
    :host([align="top"]) { align-items: flex-start; }
    :host([align="middle"]) { align-items: center; }
    :host([align="bottom"]) { align-items: flex-end; }
    :host([align="stretch"]) { align-items: stretch; }
    :host([align="baseline"]) { align-items: baseline; }
    :host([justify="start"]) { justify-content: flex-start; }
    :host([justify="center"]) { justify-content: center; }
    :host([justify="end"]) { justify-content: flex-end; }
    :host([justify="between"]) { justify-content: space-between; }
    :host([justify="around"]) { justify-content: space-around; }
  </style>
  <slot />
`;

export default class XGrid extends HTMLElement {
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
      mode: 'closed'
    }).innerHTML = templateHTML;
  }
}
