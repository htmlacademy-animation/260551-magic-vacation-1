export default class AccentTypographyBuild {
  constructor(
      elementSelector,
      timer,
      property,
      timeOffset,
      classForActivate,
  ) {
    this._TIMING_FUNCTIONS = [`ease`, `ease-in`, `ease-out`, `ease-in-out`, `linear`];
    this._defaultClassForActivate = `accent-typography`;

    this._elementSelector = elementSelector;
    this._timer = timer;
    this._classForActivate = classForActivate || `accent-typography`;
    this._wordClass = `accent-typography__word`;
    this._property = property;
    this._element = document.querySelector(this._elementSelector);
    this._timeOffset = timeOffset;

    this.prePareText();
  }

  createElement(letter) {
    const span = document.createElement(`span`);

    const randomNumber = Math.floor(Math.random() * this._TIMING_FUNCTIONS.length);
    const timingFunction = this._TIMING_FUNCTIONS[randomNumber];

    span.textContent = letter;
    span.style.transition = `${this._property} ${this._timer}ms ${timingFunction} ${this._timeOffset}ms`;

    return span;
  }

  prePareText() {
    if (!this._element) {
      return;
    }

    const text = this._element.textContent.trim().split(` `).filter((letter) => letter !== ``);

    const content = text.reduce((fragmentParent, word) => {
      const wordElement = Array.from(word).reduce((fragment, letter) => {
        fragment.appendChild(this.createElement(letter));
        return fragment;
      }, document.createDocumentFragment());

      const wordContainer = document.createElement(`span`);

      wordContainer.classList.add(this._wordClass);
      wordContainer.appendChild(wordElement);
      fragmentParent.appendChild(wordContainer);

      return fragmentParent;
    }, document.createDocumentFragment());

    this._element.innerHTML = ``;
    this._element.appendChild(content);
  }

  runAnimation() {
    if (!this._element || this._classForActivate !== this._defaultClassForActivate) {
      return;
    }

    this._element.classList.add(this._classForActivate);
  }

  destroyAnimation() {
    this._element.classList.remove(this._classForActivate);
  }
}
