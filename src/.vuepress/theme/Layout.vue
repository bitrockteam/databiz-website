<template>
  <div class="theme-container">
    <Header />
    <Main />
    <Footer />
  </div>
</template>

<script>
import Header from './components/Header.vue';
import Main from './components/Main.vue';
import Footer from './components/Footer.vue';

export default {
  components: {
    Header,
    Main,
    Footer,
  },
}

</script>

<style lang="sass">
  @import './styles/app.scss'
</style>

