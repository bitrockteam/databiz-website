
import './styles/app.scss';
import { scrollTop, scrollToElem, $, $$ } from './libs/dom';

// Dynamic year in footer
const year = new Date().getFullYear();
$('span.year').innerHTML = year;

// Scroll to element for navigation
const navigate = elem => {
  elem.addEventListener('click', evt => {
    evt.preventDefault();
    const target = '#' + evt.target.href.split('#')[1];
    scrollToElem(target);
  });
}

[...$$('header nav li a')].map(e => navigate(e));

// Register service workers for PWA
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('./sw.js').then(registration => {
      console.log('SW registered: ', registration);
    }).catch(registrationError => {
      console.log('SW registration failed: ', registrationError);
    });
  });
}

// Javascript disabled warning
document.querySelector('.js-warning').style.display = 'none';