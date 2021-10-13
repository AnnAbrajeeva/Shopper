<template>
  <div class="content-wrapper">
    <div class="loader" v-if="getLoading">
      <ring-loader color="#D73636" :size="150" sizeUnit="px" />
    </div>

    <div class="men-fashions">
      <div class="container">
        <div class="col-md-9 fashions">
          <div class="title">
            <h3>Все товары</h3>
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

        <!-- Сайдбар -->
        <sidebar :products="this.products" :getCategories="getCategories" />
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

  // async asyncData({$http}) {

  //     const posts = await $http.$get('https://jsonplaceholder.typicode.com/posts')

  //     return { posts }
  // },

  // asyncData() {
  //   return axios
  //     .get('/api/products/')
  //     .then((res) => {
  //       return { products: res.data[0].data.content }
  //     })
  // },

  //  async asyncData({ params, $http }) {
  //       const products = await axios.get('/api/products/')
  //       return { products }
  //  },

  // async fetch() {
  //     return await axios.get('/api/products/')
  //      .then(res => {
  //       let products = res.data[0].data.content
  //       this.products = products
  //   })

  // },
  //  async fetch() {
  //     this.products = await fetch(
  //       '/api/products/'
  //     ).then(res => {
  //       console.log(res)
  //       return res.data[0].data.content.json()
  //     })
  //   },

  // async asyncData(context) {
  //   return new Promise((resolve, reject) => {
  //     resolve(axios("/api/products/"))
  //   })
  //     .then(data => {
  //       return data
  //     })
  //     .catch(e => {
  //       context.error(e)
  //     })
  //   },

  data() {
    return {
      page: 1,
      perPage: 6,
      pages: [],
      categories: [],
      products: [],
      sortingProducts: [],
      search: null,
      dialog: true
    };
  },
  components: {
    ProductItem,
    Pagination,
    Sidebar,
    RingLoader,
    Search,
  },

  async mounted() {
    const products = await this.$store.dispatch("products/getProducts");
    if(!products) {
      this.$router.push('/error')
    }
    this.products = products;
  },

  methods: {
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
      let numberOfPages = Math.ceil(this.sortingProducts.length / this.perPage);
      for (let index = 1; index <= numberOfPages; index++) {
        this.pages.push(index);
      }
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
