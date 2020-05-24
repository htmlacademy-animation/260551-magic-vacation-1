  const SCREENS_WITH_BACKGROUND = [
    'prizes',
    'rules',
    'game',
  ];

export default class PageBackground {
  constructor() {
    this.backgroundEl = document.querySelector(`.page-background`);
  }

  init() {
    if (SCREENS_WITH_BACKGROUND.includes(location.hash.slice(1))) {
      this.backgroundEl.classList.add(`page-background--active`);
    }

    document.body.addEventListener(`screenChanged`, this.handlePageBackground.bind(this));
  }

  handlePageBackground(event) {
    if (SCREENS_WITH_BACKGROUND.includes(event.detail.screenName)) {
      this.backgroundEl.classList.add(`page-background--active`);
    } else {
      this.backgroundEl.classList.remove(`page-background--active`);
    }
  }
}
