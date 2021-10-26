<template>
  <div class="container-fluid">
    <div class="title">
      <search @search="search = $event" />
    </div>
    <div class="row">
      <products-table :products="this.sortProducts" />
    </div>
  </div>
</template>

<script>
import Search from "~/components/UI/Search";
import ProductsTable from "~/components/Admin/Products/ProductsTable";
export default {
  layout: "admin",
  components: {
    Search,
    ProductsTable,
  },

  async asyncData({ $axios, store }) {
    const products = await $axios.$get(
      "https://shopper-4eb43-default-rtdb.asia-southeast1.firebasedatabase.app/products.json"
    );
    let productsArray = [];

    for (let [key, value] of Object.entries(products)) {
      productsArray.push({ ...value, id: key });
    }

    return {
      products: productsArray,
    };
  },

  data() {
    return {
      search: null,
    };
  },

  mounted() {
    this.$nuxt.refresh();
  },

  computed: {
    sortProducts() {
      if (this.search) {
        let products = this.products.filter((product) => {
          return product.title
            .toLowerCase()
            .includes(this.search.toLowerCase());
        });  
        return products
      } else {
        return this.products;
      }
    },
  },
};
</script>
