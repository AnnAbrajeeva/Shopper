<template>
  <div class="slider">
    <div class="callbacks_container">
      <VueSlickCarousel v-bind="settings">
        <div class="home-slider__wrap">
          <img src="~static/assets/images/1616606592_35-p-fon-odezhda-38.jpg" alt="" />
          <div class="banner-info">
            <h3>{{ $t('home.slider.slide1') }}</h3>
            <p>
              {{ $t('home.slider.slide11') }}
            </p>
          </div>
        </div>
        <div class="home-slider__wrap">
          <img src="~static/assets/images/1616606687_48-p-fon-odezhda-55.jpg" alt="" />
          <div class="banner-info">
            <h3>{{ $t('home.slider.slide2') }}</h3>
            <h3>{{ $t('home.slider.slide22') }}</h3>
            <!-- <p>
              ВЕСНА-ЛЕТО
            </p> -->
          </div>
        </div>
         <div class="home-slider__wrap">
          <img src="~static/assets/images/1616606643_53-p-fon-odezhda-60.jpg" alt="" />
          <div class="banner-info">
            <h3>{{ $t('home.slider.slide3') }}</h3>
            <p>
             {{ $t('home.slider.slide33') }}
            </p>
          </div>
        </div>
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