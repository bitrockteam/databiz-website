<template>
  <div class="theme-container">
    <Header />
    <Main />
    <Footer />
    <CookieNotice />
  </div>
</template>

<script>
import Header from './components/Header.vue';
import Main from './components/Main.vue';
import Footer from './components/Footer.vue';
import CookieNotice from './components/CookieNotice.vue';

export default {
  components: {
    Header,
    Main,
    Footer,
    CookieNotice
  },
}

</script>

<style lang="sass">
  @import './styles/app.scss'
</style>

