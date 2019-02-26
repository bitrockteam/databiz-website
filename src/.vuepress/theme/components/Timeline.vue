<template>
  <article id="timeline">
    <div class="timeline">
      <div class="timeline__wrap">
        <div class="timeline__items">
          
          <div v-for="item in data" class="timeline__item">
            <div class="timeline__content">
              <h3>{{ item.year }}</h3>
              <p>{{ item.text}}</p>
            </div>
          </div>

        </div>
      </div>
    </div>
  </article>
</template>

<script>
import $ from 'jquery';

export default {
  props: {
    data: {
      type: Array
    }
  },
  mounted () {
    if (window) {
      window.jQuery = $;

      import(/* webpackChunkName: "timeline" */ 'timeline/src/js/timeline')
        .then( data => {
          $('.timeline').timeline({
            verticalTrigger: '150px'
          });
        });
    }
  }
}
</script>
