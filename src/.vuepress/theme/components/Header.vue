<template>
  <header class="topbar">
    <div class="wrapper">
      <figure>
        <a href="/">
          <img 
            src="/logos/DatabizLogo.svg"
            alt="Databiz Group"
          >
        </a>
      </figure>
      <nav>
        <ul>
          <li v-for="item in items">
            <a :href="item.link">{{ item.text }}</a>
          </li>
        </ul>
      </nav>
      <button class="hamburger hamburger--spin" type="button">
        <span class="hamburger-box">
          <span class="hamburger-inner"></span>
        </span>
      </button>
    </div>
  </header>
</template>

<script>
export default {
  computed: {
    items () {
      return this.$themeConfig.nav
    }
  }
}
</script>

