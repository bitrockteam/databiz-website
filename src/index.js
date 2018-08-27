
import $ from 'jquery';
import { scrollTop, scrollToElem } from './libs/dom';
import './styles/app.scss';

// Setup slider for "partners" section
const setupSlider = () => {
  import('lightslider').then(data => 
    $("#slider").lightSlider({
      item: 2,
      auto: true,
      loop: true
    })
  );
};

// Dynamic year in footer
const setYear = () => {
  const year = new Date().getFullYear();
  $('span.year').innerHTML = year;
};

// Setting hero height equals screen space
const setHeroHeight = () => {
  const screen = window.innerHeight - 90;
  $('#hero').height(screen);
};

// Apply class to top bar when scoll past hero
$(window).on('scroll', evt => {
  const hero = document.querySelector('#hero');
  const condition = window.scrollY > hero.clientHeight;
  const nav = $('header.topbar');
  condition ? nav.addClass('sticky') : nav.removeClass('sticky');
});

// Scroll to element for navigation
$('header nav li a').on('click', evt => {
  evt.preventDefault();
  $('header.topbar').removeClass('open');
  const target = '#' + evt.target.href.split('#')[1];
  scrollToElem(target);
});

// Click logo, scroll back to top
$('header.topbar img').on('click', e => scrollTop());

$('i.fa-bars').on('click', evt => {
  $('header.topbar').toggleClass('open');
});

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


// Initialize everything
$(window).on('load', evt => {
  window.jQuery = $;

  setYear();
  setupSlider();
  setHeroHeight();

  import('./libs/nodes');
});