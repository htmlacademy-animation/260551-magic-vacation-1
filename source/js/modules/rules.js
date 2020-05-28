export default () => {
  const lastRuleElement = document.querySelector(`.rules__item:last-child p`);
  const rulesBtn = document.querySelector(`.rules__link`);

  lastRuleElement.addEventListener(`animationend`, () => {
    rulesBtn.classList.add(`rules__link--active`);
  });

  document.body.addEventListener(`screenChanged`, (event) => {
    if (event.screenName !== `rules` && rulesBtn.classList.contains(`rules__link--active`)) {
      rulesBtn.classList.remove(`rules__link--active`);
    }
  });
};
