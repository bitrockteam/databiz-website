<template>
  <section class="partners" id="partners">
    <div class="wrapper">
      <article>
      <div>
        <header>
          <h2>our partners</h2>
        </header>
      </div>
      <div>
        <ul id="slider">
          <li v-for="partner in data">
            <img :src="partner.logo" :alt="partner.name">
            <p>{{ partner.description }}</p>
          </li>
        </ul>
      </div>
    </article>
    </div>
  </section>
</template>

<script>
import $ from 'jquery'

window.jQuery = $;

export default {
  props: {
    data: {
      type: Array,
    }
  },
  created () {
    const items = window.innerWidth < 992 ? 1 : 2; 

    import(/* webpackChunkName: "lightslider" */ 'lightslider').then(data => 
      $("#slider").lightSlider({
        item: items,
        auto: true,
        loop: true
      })
    );
  }
}
</script>

