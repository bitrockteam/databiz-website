<template>
    <div
        id="cookie-notice"
        role="banner"
        class="cookie--notice cookie--notice--hidden"
        aria-label="Cookie Notice"
        >
        <span class="notice--text"
            >We use cookies to ensure that we give you the best experience on our
            website. If you continue to use this site we will assume that you are happy
            with it.</span
        >
        <button
            id="cookie-notice-accept"
            type="button"
            class="notice--accept-button"
            aria-label="Ok"
        >
            Ok
        </button>
        <svg
            id="cookie-notice-close"
            class="notice--close"
            width="15px"
            height="15px"
            viewBox="0 0 15 15"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            aria-label="Hamburger menu"
        >
            <g>
            <line x1="0" y1="0" x2="15" y2="15" stroke-width="1" />
            <line x1="0" y1="15" x2="15" y2="0" stroke-width="1" />
            </g>
        </svg>
    </div>
</template>
<script>
    import { cookieNotice } from '../libs/cookieNotice';
    export default {
        mounted () {
            cookieNotice();
        }
    }
</script>