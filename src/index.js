
import $ from 'jquery';
import { installRouter } from 'pwa-helpers/router';
import smoothscroll from 'smoothscroll-polyfill';
import { scrollTop, scrollToElem } from './libs/dom';
import { navigation, hero, about, group,
  philosophy, footer, partners } from './components/stateless';
import content from './../content/data';
import 'particles.js';
import './styles/app.scss';

smoothscroll.polyfill();


// Client side routing
installRouter((location) => {
  // console.log(location.pathname);
  const page_path = location.pathname;
  gtag('config', 'UA-127386306-1', { page_path });

  switch(location.pathname){
    case '/':
      scrollTop();
      break;
    case '/hero':
      document.body.classList.add('hero-only');
      break;
  }
});


// Setup slider for "partners" section
const setupSlider = () => {
  const items = window.innerWidth < 992 ? 1 : 2; 

  import(/* webpackChunkName: "lightslider" */ 'lightslider').then(data => 
    $("#slider").lightSlider({
      item: items,
      auto: true,
      loop: true
    })
  );
};

// Apply class to top bar when scoll past hero
$(window).on('scroll', evt => {
  const hero = document.querySelector('#hero');
  const condition = window.scrollY > hero.clientHeight;
  const nav = $('header.topbar');
  condition ? nav.addClass('sticky') : nav.removeClass('sticky');
});

// Scroll to element for navigation
const setupScrollNav = () => {
  $('header nav li a, #hero .cta').on('click', evt => {
    $('button.hamburger').removeClass('is-active');
    $('header.topbar').removeClass('open');
    const target = '#' + evt.target.href.split('/')[3];
    scrollToElem(target);
  });
}

// Open/close mobile nav
$('button.hamburger').on('click', evt => {
  $('button.hamburger').toggleClass('is-active');
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

  navigation(content.navigation);
  hero(content.hero);
  about(content.about);
  group(content.group);
  philosophy(content.philosophy);
  partners(content.partners);
  footer();

  setupSlider();
  setupScrollNav();

  import(/* webpackChunkName: "timeline" */ 
  'timeline/src/js/timeline').then( data => {
    $('.timeline').timeline({
      verticalTrigger: '150px'
    });
  });

  particlesJS.load('particles', './data/particles.txt');
});