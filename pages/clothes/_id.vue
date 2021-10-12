<template>
  <div class="loader" v-if="getLoading">
    <ring-loader color="#D73636" :size="150" sizeUnit="px" />
  </div>

  <div v-else class="content-wrapper">

    <notification
      :messages="messages"
     />

    <div class="single-section">
      <div class="col-md-8 fashions2">
        <slider-product-image v-if="products.length > 1" :product="product" />
        <div v-else class="slider2">
          <img :src="product.poster" :alt="product.title" />
        </div>
      </div>

      <!-- Sidebar -->
      <sidebar-product-item
        @updateProduct="updateProduct"
        @viewNotification="viewNotification"
        :product="product"
        :products="products"
        :key="Date.now().toLocaleString()"
      />
    </div>
  </div>
</template>

<script>
import SidebarProductItem from "../../components/Shop/SidebarProductItem.vue";
import SliderProductImage from "../../components/Shop/SliderProductImage.vue";
import Notification from "../../components/Notifications/Notification.vue";
export default {
  components: {
    SliderProductImage,
    SidebarProductItem,
    Notification
  },
  data() {
    return {
      products: [],
      product: {},
      messages: [] 
    };
  },

  async mounted() {
    const product = await this.$store.dispatch(
      "products/getProduct",
      this.$route.params.id
    );
    const sameProducts = await this.$store.dispatch("products/getSameProducts");
    this.products = sameProducts;
    this.product = product;
    console.log(this.products);
    this.hideNotification();
  },

  computed: {
    getLoading() {
      return this.$store.getters["products/loading"];
    },
  },

  methods: {
    updateProduct(newProduct) {
      this.product = newProduct;
    },
    viewNotification(message) {
      this.messages.unshift({
       ...message
      })
    },
    hideNotification() {
      let vm = this;
      if (this.messages.length) {
        setTimeout(function () {
          vm.messages.splice(vm.messages.length - 1, 1);
        }, 3000);
      }
    },
  },
   watch: {
      messages() {
        this.hideNotification();
      },
    },
};
</script>