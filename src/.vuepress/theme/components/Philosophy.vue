<template>
  <section id="philosophy">
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
    </div>
  </section>
</template>

<script>
export default {
  props: {
    content: {
      type: Object
    }
  }
}
</script>

