<template>
  <div class="content-wrapper">
    <div class="loader" v-if="getLoading">
      <ring-loader color="#D73636" :size="150" sizeUnit="px" />
    </div>

    <div v-else class="men-fashions">
      <div class="container">
        <div class="col-md-9 fashions">
          <div class="title">
            <h3>{{getThisCategory}}</h3>
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
        <sidebar :getCategories="getCategories" />
      </div>
    </div>
  </div>
</template>

<script>
import {mapGetters} from 'vuex';
import Pagination from "~/components/Pagination";
import ProductItem from "~/components/Shop/ProductItem";
import Sidebar from "~/components/Shop/Sidebar";
import { RingLoader } from "@saeris/vue-spinners";
export default {
  head() {
    return {
      title: "My Page title",
      meta: [
        {
          hid: "description",
          name: "description",
          content: "Категории",
        },
      ],
    };
  },
  data() {
    return {
      page: 1,
      perPage: 6,
      pages: [], 
      categoryProducts: [],
      allProducts: [],
      products: [],
      size: "",
      sortingProducts: []
    };
  },
  components: {
    ProductItem,
    Pagination,
    Sidebar,
    RingLoader,
  },

  async mounted() {
    const products = await this.$store.dispatch(
      "products/getProductsInCategory",
      this.$route.params.id
    );
    const allProducts = await this.$store.dispatch("products/getProducts");
    this.categoryProducts = products;
    this.products = allProducts;
  },

  methods: {
    
    getUniqueListBy(arr, key) {
      return [...new Map(arr.map((item) => [item[key], item])).values()];
    },
 
    changePage(page) {
       this.page = page
    },

    paginate (products) {
      let page = this.page;
      let perPage = this.perPage;
      let from = (page * perPage) - perPage;
      let to = (page * perPage);
      return products.slice(from, to);
    },

    setPages () {
      let numberOfPages = Math.ceil(this.sortingProducts.length / this.perPage);
      for (let index = 1; index <= numberOfPages; index++) {
        this.pages.push(index);
      }
    },

  },
  computed: {
     ...mapGetters("products", ["getPriceValue", "getColors"]),

     sortProducts() {
      this.pages = []
      let sortProducts = this.categoryProducts;
      sortProducts = this.categoryProducts.filter((product) => {
        if (this.getPriceValue) {
          return (
            product.cost >= this.getPriceValue[0] &&
            product.cost <= this.getPriceValue[1]
          );
        }
      });

      sortProducts = sortProducts.filter((product) => {
        if (this.size) {
          return product.sizes.indexOf(this.size) >= 0;
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

      sortProducts = this.getUniqueListBy(sortProducts, "title");

      this.sortingProducts = sortProducts
      this.setPages()
      return this.paginate(sortProducts);
    },

    getLoading() {
      return this.$store.getters["products/loading"];
    },
    getCategories() {
      let sortCategory = this.getUniqueListBy(this.products, "category-name");
      return sortCategory;
    },
    getThisCategory() {
      if (this.categoryProducts.length > 0) {
        let category = this.categoryProducts.find(
          (product) => product["category-id"] == this.$route.params.id
        );
        console.log(category);
        return category['category-name'];
      }
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
