export const cookieNotice = () => {
    const isCookiePresent = localStorage.getItem('data-cookie-accept');
    if (!isCookiePresent) {
      const $cookieNotice = document.getElementById('cookie-notice');
      const $acceptCookieButton = document.getElementById('cookie-notice-accept');
      const $closeCookieNotice = document.getElementById('cookie-notice-close');
  
      $cookieNotice.classList.remove('cookie--notice--hidden');
  
      $acceptCookieButton.addEventListener('click', () => {
        localStorage.setItem('data-cookie-accept', true);
        $cookieNotice.classList.add('cookie--notice--hidden');
      });
      $closeCookieNotice.addEventListener('click', () => {
        $cookieNotice.classList.add('cookie--notice--hidden');
      });
    }
  };
  