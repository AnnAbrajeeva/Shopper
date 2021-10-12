<template>
  <div class="slider">
    <div class="callbacks_container">
      <VueSlickCarousel v-bind="settings">
        <li>
          <img src="~static/assets/images/bnr.jpg" alt="" />
          <div class="banner-info">
            <h3>FASHIONS</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              consectetur adipiscing elit. consectetur adipiscing elit.
            </p>
          </div>
        </li>
        <li>
          <img src="~static/assets/images/bnr2.jpg" alt="" />
          <div class="banner-info">
            <h3>MODELING</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              consectetur adipiscing elit. consectetur adipiscing elit.
            </p>
          </div>
        </li>
        <li>
          <img src="~static/assets/images/bnr3.jpg" alt="" />
          <div class="banner-info">
            <h3>FASHIONS</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              consectetur adipiscing elit. consectetur adipiscing elit.
            </p>
          </div>
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