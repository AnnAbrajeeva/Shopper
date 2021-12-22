<template>
  <v-app>
    <transition name="spinner" v-if="this.loading">
      <div class="loader">
        <ring-loader color="#D73636" :size="150" sizeUnit="px" />
      </div>
    </transition>

    <admin-header @showMenu="showMenu" />

    <sidebar :drawer="this.drawer" />
  <transition name="fade" mode="in-out" class="main-wrapper">
    <v-main>
      <nuxt />
    </v-main>
  </transition>
  </v-app>
</template>

<script>
import Sidebar from "~/components/Admin/Sidebar/Sidebar.vue";
import AdminHeader from "~/components/Admin/AdminHeader.vue";

export default {
  name: "adminLayout",

  components: {
    Sidebar,
    AdminHeader,
  },
  middleware: ["auth-check"],
  data() {
    return {
      cartModal: false,
      loading: true,
      appReady: false,
      drawer: true,
    };
  },
  methods: {
    showModal() {
      this.cartModal = true;
    },
    showMenu() {
      this.drawer = !this.drawer
    }
  },
  created() {
    this.$router.beforeEach((to, from, next) => {
      this.loading = true;
      setTimeout(next, 1000);
    });

    this.$router.afterEach((to, from) => {
      this.loading = false;
    });
  },
  mounted() {
    setTimeout(() => {
      this.loading = false;
      this.appReady = true;
    }, 1000);
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
</style>
