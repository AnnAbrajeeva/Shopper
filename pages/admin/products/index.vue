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
    // productsArray = Array.from(products)
    // console.log(products)
    // let newArray = []
    // Object.keys(products).forEach(key => {
    //   let product = {}
    //   product[key] = products[key]
    //   productsArray.push(...product)
    //   console.log(product)
    // })
    // console.log(productsArray)

    // for(let key in products) {
    //   console.log(key)
    //   productsArray.push({key:{products[key]}})
    // }
    for (let [key, value] of Object.entries(products)) {
      productsArray.push(value);
    }

    return {
      products: productsArray,
    };
    // console.log(productsArray)
    // return productsArray
    // .then(res => {
    //   const productsArray = Object.entries(products);
    //   console.log(productsArray)

    //   console.log(productsArray)
    //   return productsArray
    //   })

    // return {products}
    // const productsArray = []
    // for(let key in products) {
    //   productsArray.push({...products[key]})
    // }
    // console.log()
    // return productsArray
  },
};
</script>

//  async asyncData({ $axios }) {
//     const products = await $axios.$get(
//       "https://shopper-4eb43-default-rtdb.asia-southeast1.firebasedatabase.app/data/content.json"
//     );
       
//     let productsArray = []
//     Object.keys(products).forEach(key => {
//       productsArray.push(products[key])
//     })
//     return {products: productsArray}
//   },