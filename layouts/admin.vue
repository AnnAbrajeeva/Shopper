<template>
  <v-app>
    <transition name="spinner" v-if="this.loading">
      <div class="loader">
        <ring-loader color="#D73636" :size="150" sizeUnit="px" />
      </div>
    </transition>

    <admin-header @showMenu="showMenu" />

    <sidebar :drawer="this.drawer" />

    <v-main>
      <nuxt />
    </v-main>
  </v-app>
</template>

<script>
import Sidebar from "~/components/Admin/Sidebar/Sidebar.vue";
import AdminHeader from "~/components/Admin/AdminHeader.vue";

export default {
  name: "adminLayout",
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
    Sidebar,
    AdminHeader,
  },
  middleware: ["auth-check", "auth-admin"],
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
