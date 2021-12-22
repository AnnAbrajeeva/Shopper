<template>
  <v-app-bar elevate-on-scroll color="black" light class="header">
    <div class="container">
      <div class="header-wrapper">
        <div class="header-left">
          <v-app-bar-nav-icon
            class="header-menu-icon"
            @click="menu = !menu"
          ></v-app-bar-nav-icon>
          <v-menu 
          v-model="menu" 
          bottom
      origin="center center"
      transition="scale-transition"
          style="max-width: 600px">
            <v-list>
              <v-list-item-group>
                <v-list-item>
                  <v-list-item-title>
                    <nuxt-link class="header-menu-title" :to="localePath('/')">
                      {{ $t("pages.home") }}</nuxt-link
                    >
                  </v-list-item-title>
                </v-list-item>
                <v-list-item>
                  <v-list-item-title>
                    <nuxt-link class="header-menu-title" :to="localePath('/clothes')">
                      {{ $t("pages.shop") }}</nuxt-link
                    ></v-list-item-title
                  >
                </v-list-item>
                 <v-list-item>
                  <v-list-item-title>
                    <nuxt-link class="header-menu-title" :to="localePath('/admin')">
                      {{ Admin }}</nuxt-link
                    ></v-list-item-title
                  >
                </v-list-item>
              </v-list-item-group>
            </v-list>
          </v-menu>
          <div class="top-menu">
            <ul>
              <li>
                <nuxt-link :to="localePath('/')">
                  {{ $t("pages.home") }}</nuxt-link
                >
              </li>
              <li>
                <nuxt-link :to="localePath('/clothes')">{{
                  $t("pages.shop")
                }}</nuxt-link>
              </li>
               <li>
                <nuxt-link :to="localePath('/admin')">
                  Admin
                </nuxt-link>
              </li>
            </ul>
          </div>
        </div>
        <div class="logo">
          <nuxt-link to="/"
            ><img src="~/static/assets/images/logo.png" alt=""
          /></nuxt-link>
        </div>
        <div class="header-right">
          <div class="signin">
            <nuxt-link
              class="select-lang"
              v-for="locale in $i18n.locales"
              v-if="locale.code !== $i18n.locale"
              :key="locale.code"
              :to="switchLocalePath(locale.code)"
              >{{ locale.code }}</nuxt-link
            >
            <div class="cart-sec">
              <button class="cart-length" @click="showModal">
                <img src="~/static/assets/images/cart.png" alt="cart" /><span>{{
                  `(${cartItemCount})`
                }}</span>
              </button>
            </div>
            <ul v-if="!this.checkAuthUser">
              <li>
                <nuxt-link :to="localePath('/auth/registration')">
                  {{ $t("home.auth.register") }}</nuxt-link
                >
                <span>/</span> &nbsp;
              </li>
              <li>
                   <nuxt-link :to="localePath('/auth/login')">
                  {{ $t("home.auth.login") }}</nuxt-link
                >
              </li>
            </ul>

            <v-btn
              @click="logoutUser"
              v-else
              class="ma-2 signout"
              text
              icon
              large
              left
              color="white"
            >
              <v-icon>mdi-logout-variant</v-icon>
              {{ $t("home.auth.logout") }}
            </v-btn>
          </div>
        </div>
       
      </div>
    </div>
    <cart-modal />
  </v-app-bar>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import CartModal from "~/components/Cart/CartModal.vue";
export default {
  data() {
    return {
      menu: false,
      // cart: []
    };
  },
  components: {
    CartModal,
  },
  computed: {
    ...mapGetters("cart", ["getCart", "getCartModal"]),
    ...mapGetters("user", ["checkAuthUser"]),
    cartItemCount() {
      return this.getCart.length || 0;
    },
  },
  methods: {
    ...mapActions("cart", ["fetchProductsInCart"]),
    openMenu() {
      this.menu = true;
    },
    showModal() {
      this.$store.dispatch("cart/openModal");
    },
    logoutUser() {
      this.$toasted.success("Вы вышли из системы", {
        theme: "bubble",
        position: "top-right",
        duration: 5000,
      });
      this.$store.dispatch("user/logoutUser")
    },
  },

  mounted() {
    this.fetchProductsInCart();
  },
};
</script>