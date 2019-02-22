<template>
  <div>
    <Header />
    <Hero :intro="intro" />
  </div>
</template>

<script>
import Header from './../components/Header'
import Hero from './../components/Hero'

export default {
  components: {
    Header,
    Hero
  },
  computed: {
    intro () {
      return {
        title: 'We have evolved',
        tagline: 'to face the future'
      }
    }
  },
  mounted () {
    document.body.classList.add('hero-only');
  }
}
</script>

<style lang="sass">
  @import './../styles/app.scss'
</style>
