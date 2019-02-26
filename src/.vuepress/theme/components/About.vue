<template>
  <section id="about">
    <div class="wrapper">
      <article>
        <div>
          <header>
            <h2>{{ content.title }}</h2>
          </header>
          <figure>
            <img :src="content.frontmatter.image"
              :alt="content.title">
          </figure>
        </div>
        <div v-html="content.excerpt">
          
        </div>
      </article>
      
      <Timeline :data="timeline" />
    </div>
  </section>
</template>

<script>
import Timeline from './Timeline.vue';

export default {
  components: {
    Timeline
  },
  props: {
    content: {
      type: Object
    },
    timeline: {
      type: Array
    }
  }
}
</script>

