<template>
  <section id="hero">
    <div id="particles"></div>
    <div class="wrapper">
      <article>
        <header>
          <div class="claim">
            <h2>{{ intro.title }}</h2>
            <h3>{{ intro.tagline }}</h3>
          </div>
          <a class="cta" :href="cta.link">
            {{ cta.text }}
          </a>
        </header>
        <figure>
          <img src="/logos/HeroBubbles.svg" alt="Databiz Group">
        </figure>
      </article>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    intro: {
      type: Object,
      default: function () {
        return { title: '', tagline: '' }
      }
    },
    cta: {
      type: Object,
      default: function () {
        return { link: '', text: '' }
      }
    }
  },
  mounted () {
    import(/* webpackChunkName: "particles" */ 'particles.js')
      .then(data => particlesJS.load('particles', '/particles.json'));
  }
}
</script>

