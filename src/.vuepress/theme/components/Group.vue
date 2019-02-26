<template>
  <section id="group">
    <div class="wrapper">
      <article>
      <div>
        <header>
          <h2>{{ title }}</h2>
        </header>
      </div>
      <div v-for="company in companies">
        <img :src="company.frontmatter.logo" :alt="company.title">
        <h3>{{ company.frontmatter.description }}</h3>
        <section v-html="company.excerpt">

        </section>
        <a class="cta" :href="company.frontmatter.url" target="_blank" rel="noopener">
          Discover
        </a>
      </div>
    </article>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    companies: {
      type: Array
    },
    title: {
      type: String
    }
  }
}
</script>

