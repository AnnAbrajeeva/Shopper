<template>

      <div class="container-fluid">
        <div class="title">
          <!-- <h3>Все товары</h3> -->
          <search @search="search = $event" />
        </div>
        <div class="row">
          <products-table :products="products" />
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

  async asyncData({ $axios, store  }) {
    const products = await $axios.$get(
      "https://shopper-4eb43-default-rtdb.asia-southeast1.firebasedatabase.app/products.json"
    );
    let productsArray = [];
    
    for (let [key, value] of Object.entries(products)) {
      productsArray.push(value);
    }

    return {
      products: productsArray,
    };
    
  },

  mounted() {
    this.$nuxt.refresh()
  }

 

};
</script>
