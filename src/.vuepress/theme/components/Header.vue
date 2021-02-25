<template>
  <header class="header--bar">
    <div id="particles-wrapper" class="particles--wrapper"></div>
    <h1><span class="bold--font">DATABIZ GROUP</span> HAS BECOME <span class="bold--font">FORTITUDE GROUP</span></h1>
    <svg height="2" width="100%">
      <line x1="0" y1="0" x2="100%" y2="0" />
    </svg>
    <h2>STARTING JANUARY 2021</h2>
  </header>
</template>

<script>
export default {
  mounted () {
    import(/* webpackChunkName: "particles" */ 'particles.js')
      .then(data => particlesJS.load('particles-wrapper', '/particles.json'));
  }
}
</script>




