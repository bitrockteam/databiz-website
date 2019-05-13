<template>
  <footer class="credits">
    <div class="wrapper">
      <article>
        <figure>
          <img src="/logos/DatabizLogo.white.svg" alt="Databiz Group">
        </figure>
      
        <p>{{ text }}</p>
        <!--  <span class="year">{{ year }}</span>  -->
          
      </article>
    </div>
  </footer>
</template>

<script>
export default {
  props: {
    text: ''
  },
  computed: {
    year () {
      return new Date().getFullYear()
    }
  }
}
</script>

