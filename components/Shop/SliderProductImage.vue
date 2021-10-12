<template>
  <div class="slider2">
    <div class="callbacks_container">
      <VueSlickCarousel v-bind="settings">
        <li v-for="(poster, index) in product.poster" :key="index">
          <img :src="poster" alt="product.title" />
        </li>
      </VueSlickCarousel>
    </div>
  </div>
</template>

<script>
import VueSlickCarousel from "vue-slick-carousel";
import "vue-slick-carousel/dist/vue-slick-carousel.css";
// optional style for arrows & dots
import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";
export default {
  name: "Slider",
  components: { VueSlickCarousel },
  props: ['product'],
  data() {
    return {
      settings: {
        "arrows": false,
        "dots": false,
        "infinite": true,
        "slidesToShow": 1,
        "slidesToScroll": 1,
         "fade": true,
        "autoplay": true,
        "speed": 1000,
        "cssEase": "linear"
      },
    };
  },
};
</script>