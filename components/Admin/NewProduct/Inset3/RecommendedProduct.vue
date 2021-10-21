<template>
  <div class="container">
      <choose-recommended-product @closeAddRecommended=
      "closeAddRecommended" :products="products" :addRecommendedShow="addRecommendedShow" />
    <v-row v-if="!addRecommendedShow">
      <div v-if="getRecomendedProducts" class="new-product__recommended-wrapper">
      <v-col
          v-for="product in getRecomendedProducts"
          cols="12" sm="12" md="4"
          :key="product.id"
        >
          <v-card>
            <v-img
              :src="Array.isArray(product.poster) ? product.poster[0] : product.poster"
              class="white--text align-end"
              gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
              height="300px"
            >
              <v-card-title v-text="product.title"></v-card-title>
            </v-img>
          </v-card>
        </v-col>
      </div>
    </v-row>

      <div v-if="getRecomendedProducts.length <= 6 && !addRecommendedShow" @click="addRecommendedShow = true" class="new-product__recommended-add mt-5">
            <p>Выбрать</p>          
          </div>

  </div>
</template>

<script>
import {mapGetters} from 'vuex'
import ChooseRecommendedProduct from './ChooseRecommendedProduct.vue'
export default {
    props: {
        products: {
            type: Array,
        }
    },
    data() {
        return {
            addRecommendedShow: false,
        }
    },
    components: {
        ChooseRecommendedProduct
    },
    methods: {
      closeAddRecommended(product) {
        this.addRecommendedShow = false
      }
    },
    computed: {
      ...mapGetters('adminProducts',['getRecomendedProducts'])
    }
}
</script>