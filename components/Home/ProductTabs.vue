<template>
<!-- <div class="loader" v-if="getLoading">
      <ring-loader color="#D73636" :size="150" sizeUnit="px" />
    </div> -->
  <div class="tab-section">
    <div class="wrap">
      <div id="horizontalTab">
        <ul class="resp-tabs-list">
          <li>
            <a
              v-on:click="activetab = '1'"
              v-bind:class="[activetab === '1' ? 'active' : '']"
              >РЕКОМЕНДУЕМ</a
            >
          </li>
          <li>
            <a
              v-on:click="activetab = '2'"
              v-bind:class="[activetab === '2' ? 'active' : '']"
              >НОВИНКИ</a
            >
          </li>
          <li>
            <a
              v-on:click="activetab = '3'"
              v-bind:class="[activetab === '3' ? 'active' : '']"
              >РАСПРОДАЖА</a
            >
          </li>
          <div class="clearfix"></div>
        </ul>

        <div v-if="this.products" class="resp-tabs-container">
          <!---tab1----->

          <div v-if="activetab === '1'" class="tabcontent">
            <div class="course_demo1">
              <VueSlickCarousel
                multiple
                class="home-tabs"
                id="flexiselDemo1"
                v-if="this.products.length"
                v-bind="settings"
              >
                <li class="g1" v-for="product in getFeatured" :key="product.id">
                  <img
                    class="home-tabs_img"
                    :src="product.poster[0]"
                    :alt="product.title"
                  />
                  <a href="single.html"
                    ><div class="caption">
                      <h3>{{ product.title }}</h3>
                      <h5>{{ product.cost }} &euro;</h5>
                    </div></a
                  >
                </li>
              </VueSlickCarousel>
            </div>
          </div>

          <!---//tab1----->
          <!---tab2----->
          <div v-if="activetab === '2'" class="tabcontent">
            <div class="course_demo1">
              <VueSlickCarousel
                multiple
                class="home-tabs"
                id="flexiselDemo1"
                v-if="this.products.length"
                v-bind="settings"
              >
                <li class="g1" v-for="product in getSales" :key="product.id">
                  <img
                    class="home-tabs_img"
                    :src="product.poster[0]"
                    :alt="product.title"
                  />
                  <a href="single.html"
                    ><div class="caption">
                      <h3>{{ product.title }}</h3>
                      <h5>{{ product.cost }} &euro;</h5>
                    </div></a
                  >
                </li>
              </VueSlickCarousel>
            </div>
          </div>
          <!---//tab2----->
          <!---tab3----->
          <div v-if="activetab === '3'" class="tabcontent">
            <div class="course_demo1">
             <VueSlickCarousel
                multiple
                class="home-tabs"
                id="flexiselDemo1"
                v-if="this.products.length"
                v-bind="settings"
              >
                <li class="g1" v-for="product in getArrived" :key="product.id">
                  <img
                    class="home-tabs_img"
                    :src="product.poster[0]"
                    :alt="product.title"
                  />
                  <a href="single.html"
                    ><div class="caption">
                      <h3>{{ product.title }}</h3>
                      <h5>{{ product.cost }} &euro;</h5>
                    </div></a
                  >
                </li>
              </VueSlickCarousel>
            </div>
          </div>
          <!---//tab3----->
        </div>

        <div v-else>
          <p class="productNotFound">Товары не найдены</p>
        </div>
      </div>
    </div>

    <second-navigation />
    <!-- Navigation -->
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
import VueSlickCarousel from "vue-slick-carousel";
import "vue-slick-carousel/dist/vue-slick-carousel.css";
// optional style for arrows & dots
// import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";
import SecondNavigation from "~/components/Home/SecondNavigation.vue";
export default {
  components: {
    SecondNavigation,
    VueSlickCarousel,
  },
  data() {
    return {
      activetab: "1",
      products: [],
      settings: {
        arrows: true,
        dots: false,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
        cssEase: "linear",
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 4,
              infinite: true,
              dots: true,
            },
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2,
            },
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            },
          },
        ],
      },
    };
  },

  async mounted() {
    const products = await this.$store.dispatch("products/getProducts");
    this.products = products;
  },

  computed: {
	  ...mapGetters('products', ['loading']),
     getLoading() {
       console.log(this.loading)
      return this.$store.getters["products/loading"];
    },
    getFeatured() {
      let randomProduct = [];
      for (let i = 0; i <= 10; i++) {
        let index = Math.floor(Math.random() * 100 + 1);
        console.log(index);
        randomProduct.push(this.products[index]);
      }
      return randomProduct;
    },
	getSales() {
      let randomProduct = [];
      for (let i = 0; i <= 10; i++) {
        let index = Math.floor(Math.random() * 100 + 1);
        console.log(index);
        randomProduct.push(this.products[index]);
      }
      return randomProduct;
    },
	getArrived() {
      let randomProduct = [];
      for (let i = 0; i <= 10; i++) {
        let index = Math.floor(Math.random() * 100 + 1);
        randomProduct.push(this.products[index]);
      }
      return randomProduct;
    },
  },
};
</script>
