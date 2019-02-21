import $ from 'jquery';
import smoothscroll from 'smoothscroll-polyfill';

const behavior = 'smooth';
const block = 'start';

export const scrollToElem = elem => document
  .querySelector(elem)
  .scrollIntoView({ behavior, block });

if (window) {

  // Open/close mobile nav
  $('button.hamburger').on('click', evt => {
    $('button.hamburger').toggleClass('is-active');
    $('header.topbar').toggleClass('open');
  });

  smoothscroll.polyfill();

  // Scroll to element for navigation
  $('header nav li a, #hero .cta').on('click', evt => {
    evt.preventDefault();
    $('button.hamburger').removeClass('is-active');
    $('header.topbar').removeClass('open');
    const target = '#' + evt.target.href.split('/')[3];
    scrollToElem(target);
  });

  // Apply class to top bar when scoll past hero
  $(window).on('scroll', evt => {
    const hero = document.querySelector('#hero');
    const condition = window.scrollY > hero.clientHeight;
    const nav = $('header.topbar');
    condition ? nav.addClass('sticky') : nav.removeClass('sticky');
  });

  // Add client side routing
  import(/* webpackChunkName: "router" */ 'pwa-helpers/router')
    .then(data => data.installRouter)
    .then(installRouter => installRouter((location) => {
      switch (location.pathname) {
        case '/':
          window.scroll({
            top: 0,
            left: 0,
            behavior
          });
          break;
        case '/hero':
          document.body.classList.add('hero-only');
          break;
      }
    }));

}