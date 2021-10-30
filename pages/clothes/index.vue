<template>
  <div class="content-wrapper" @click.stop="drawer = null">
    <div class="loader" v-if="getLoading">
      <ring-loader color="#D73636" :size="150" sizeUnit="px" />
    </div>

    <!-- Сайдбар -->
        <sidebar :drawer="this.drawer" :products="this.products" :getCategories="getCategories" />

    <div class="men-fashions">
      <div class="container">
        <div 
        :class="drawer ? 'col-md-9' : 'col-md-12'"
        class="fashions">
          
          <div class="title">
            <v-icon @click.stop="drawer = !drawer">mdi-view-dashboard</v-icon>
            <h3>{{ $t('shop.allProducts') }}</h3>
            <search @search="search = $event" />
          </div>
            <div class="fashion-section">
              <div
                class="col-12 col-md-4"
                v-for="product in sortProducts"
                :key="product.id"
              >
                <product-item :product="product" :key="product.id" />
              </div>
              <div class="clearfix"></div>
            </div>

            <!-- Пагинация  -->
            <section v-if="this.products.length" class="pagination-wrapper">
              <pagination :pages="pages" @changePage="changePage" />
            </section>
        </div>

        
      </div>

    </div>
  </div>
</template>

<script>
import axios from "axios";
import { mapGetters } from "vuex";
import Pagination from "~/components/Pagination";
import ProductItem from "~/components/Shop/ProductItem";
import Sidebar from "~/components/Shop/Sidebar";
import { RingLoader } from "@saeris/vue-spinners";
import Search from "../../components/UI/Search.vue";
export default {
  head() {
    return {
      title: "My Page title",
      meta: [
        {
          hid: "description",
          name: "description",
          content: "Одежда для женщин",
        },
      ],
    };
  },

  middleware: ['auth-check'],

  data() {
    return {
      page: 1,
      perPage: 6,
      pages: [],
      categories: [],
      sortingProducts: [],
      search: null,
      dialog: true,
      drawer: null,
    };
  },
  components: {
    ProductItem,
    Pagination,
    Sidebar,
    RingLoader,
    Search,
  },

  async asyncData({ $axios }) {
    const products = await $axios.$get(
      "https://shopper-4eb43-default-rtdb.asia-southeast1.firebasedatabase.app/products.json"
    );
    let productsArray = [];

    for (let [key, value] of Object.entries(products)) {
      productsArray.push({ ...value, id: key });
    }
  
    return { products: productsArray };
  },

  methods: {
    showSidebar() {
      this.drawer = true
    },
    getError() {
      this.dialog = false
      this.$router.push('/')
    },

    getUniqueListBy(arr, key) {
      return [...new Map(arr.map((item) => [item[key], item])).values()];
    },

    changePage(page) {
      this.page = page;
    },

    paginate(products) {
      let page = this.page;
      let perPage = this.perPage;
      let from = page * perPage - perPage;
      let to = page * perPage;
      return products.slice(from, to);
    },
    setPages() {
      this.pages = Math.ceil(this.sortingProducts.length / this.perPage);
    },
  },

  computed: {
    ...mapGetters("products", ["getPriceValue", "getColors", "getSize"]),

    sortProducts() {
      if (this.products.length) {
        this.pages = [];

        let sortProducts = this.products;
        sortProducts = this.products.filter((product) => {
          if (this.getPriceValue) {
            return (
              product.cost >= this.getPriceValue[0] &&
              product.cost <= this.getPriceValue[1]
            );
          }
        });

        sortProducts = sortProducts.filter((product) => {
          if (this.getSize) {
            return product.sizes.indexOf(this.getSize) >= 0;
          } else {
            return sortProducts;
          }
        });

        sortProducts = sortProducts.filter((product) => {
          if (this.getColors.length > 0) {
            for (let i = 0; i < this.getColors.length; i++)
              return this.getColors.includes(product.color);
          } else {
            return sortProducts;
          }
        });

        sortProducts = sortProducts.filter((product) => {
          if (this.search) {
            return product.title
              .toLowerCase()
              .includes(this.search.toLowerCase());
          } else {
            return sortProducts;
          }
        });

        sortProducts = this.getUniqueListBy(sortProducts, "title");

        this.sortingProducts = sortProducts;
        this.setPages();
        return this.paginate(this.sortingProducts);
      }
    },

    getLoading() {
      return this.$store.getters["products/loading"];
    },
    getCategories() {
      let sortCategory = this.getUniqueListBy(this.products, "category-name");
      return sortCategory;
    },
  },
};
</script>

<style lang="scss">
.pagination-wrapper {
  margin: 20px 0;
  width: 100%;
}
.fashions {
  position: relative;
}
</style>
