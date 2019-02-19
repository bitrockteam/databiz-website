<template>
  <div class="theme-container">
    <!-- <Content/> -->

    <Header />
    <Hero :cta="cta" :intro="intro" />
    <About />
    <Philosophy />
    <Partners :data="data.partners" />
    <Footer />
    <Credits :text="data.footer" />  
  </div>
</template>

<script>
import Header from './components/Header.vue';
import Hero from './components/Hero.vue';
import About from './components/About.vue';
import Group from './components/Group.vue';
import Philosophy from './components/Philosophy.vue';
import Partners from './components/Partners.vue';
import Footer from './components/Footer.vue';
import Credits from './components/Credits.vue';

export default {
  components: {
    Header,
    Hero,
    About,
    Group,
    Philosophy,
    Partners,
    Footer,
    Credits
  },
  computed: {
    intro () {
      return {
        title: this.$page.frontmatter.claim,
        tagline: this.$page.frontmatter.tagline
      }
    },
    cta () {
      return {
        link: this.$page.frontmatter.ctaLink,
        text: this.$page.frontmatter.ctaText
      }
    },
    data () {
      return this.$page.frontmatter
    }
  }
}

</script>

<style lang="sass">
  @import './styles/app.scss'
</style>

