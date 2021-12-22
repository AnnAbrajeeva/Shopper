<template>
  <v-app>
    <template >
      <header-component @showModal="showModal" key="header" />
      <transition name="fade" mode="in-out" class="main-wrapper">
        <v-main key="main">
          <nuxt class="main" key="nuxt" />
        </v-main>
      </transition>

      <footer-component key="footer" />
      <cart-modal cartModal="cartModal" key="modal" />
    </template>
  </v-app>
</template>

<script>
import HeaderComponent from "~/components/HeaderComponent.vue";
import FooterComponent from "~/components/FooterComponent.vue";
import CartModal from "~/components/Cart/CartModal.vue";
export default {
  
   middleware: ["auth-check"],
  components: {
    HeaderComponent,
    FooterComponent,
    CartModal,
  },

  data() {
    return {
      cartModal: false,
      loading: true,
      appReady: false,
    };
  },
  methods: {
    showModal() {
      this.cartModal = true;
    },
  },
};
</script>

<style lang="scss">
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}

.fade-enter,
.fade-leave-active {
  opacity: 0;
}

.spinner-enter-active,
.spinner-leave-active {
  transition: opacity 1s ease-in;
}

.spinner-enter,
.spinner-leave-active {
  opacity: 0;
}

// .v-spinner {
//   position: absolute;
//   top: 0;
//   left: 0;
//   right: 0;
//   margin-top: 20px;
// }
</style>
