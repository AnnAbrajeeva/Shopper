<template>
  <div v-if="addRecommendedShow" class="choose-product__wrapper">
    <div class="choose-product__header">
      <p>Выберите модель:</p>
      <button class="choose-product__button">Отменить</button>
    </div>
    <div class="choose-product__content">
      <p>Выберите категорию:</p>
      <v-col class="d-flex p-0" cols="12" sm="6">
        <v-select
        app
          v-model="selectCategory"
          data-app
          :items="getCategories"
          label="Выберите категорию"
          solo
        ></v-select>
      </v-col>

      <div class="choose-product__list-products">
        <v-container fluid>
          <v-row dense>
            <v-col
              v-for="product in getProducts"
              cols="12"
              sm="12"
              md="6"
              :key="product.id"
            >
              <v-card @click="selectProduct(product)">
                <v-img
                  :src="
                    Array.isArray(product.poster)
                      ? product.poster[0]
                      : product.poster
                  "
                  class="white--text align-end"
                  gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
                  height="300px"
                >
                  <v-card-title v-text="product.title"></v-card-title>
                </v-img>
              </v-card>
            </v-col>
          </v-row>
        </v-container>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    addRecommendedShow: {
      type: Boolean,
    },
    products: {
      type: Array,
    },
  },
  data() {
    return {
      selectCategory: "",
    };
  },
  computed: {
    getCategories() {
      let categories = [];
      this.products.forEach((product) => {
        categories.push(product["category-name"]);
      });
      categories = categories.filter(
        (item, index) => categories.indexOf(item) === index
      );
      this.categoriesList = categories;

      return categories;
    },

    getProducts() {
      let productsList = [];
      productsList = this.products.filter(
        (product) => product["category-name"] == this.selectCategory
      );
      return productsList;
    },
  },

  methods: {
    selectProduct(product) {
      this.$store.dispatch("adminProducts/setRecomendedProducts", product);
      this.selectCategory = null;
      this.$emit("closeAddRecommended");
    },
  },
};
</script>

