<template>
  <v-app>
    <!-- <transition name="spinner" v-if="this.loading">
      <div class="loader">
        <ring-loader color="#D73636" :size="150" sizeUnit="px" />
      </div>
    </transition> -->

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
  head() {
    return {
      link: [
        {
          rel: "canonical",
          href: `http://localhost:http://localhost:3000${this.$route.path}`,
        },
      ],
    };
  },
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
  // created() {
  //   this.$router.beforeEach((to, from, next) => {
  //     this.loading = true;
  //     setTimeout(next, 1000);
  //   });

  //   this.$router.afterEach((to, from) => {
  //     this.loading = false;
  //   });
  // },
  // mounted() {
  //   setTimeout(() => {
  //     this.loading = false;
  //     this.appReady = true;
  //   }, 1000);
  // },
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
