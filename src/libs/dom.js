const behavior = 'smooth';
const block = 'start';

export const scrollTop = () => window.scroll({
  top: 0,
  left: 0,
  behavior
});

export const scrollToElem = elem => document
  .querySelector(elem)
  .scrollIntoView({ behavior, block });


window.scrollTop = scrollTop;
window.scrollToElem = scrollToElem;