<template>
  <div class="header">
    <div class="container">
      <div class="header-wrapper">
        <div class="header-left">
          <div class="top-menu">
            <ul>
              <li><nuxt-link to="/">Главная</nuxt-link></li>
              <li><nuxt-link to="/clothes">Магазин</nuxt-link></li>
            </ul>
          </div>
        </div>
        <div class="logo">
          <nuxt-link to="/"
            ><img src="~/static/assets/images/logo.png" alt=""
          /></nuxt-link>
        </div>
        <div class="header-right">
          <!-- <div class="currency">			 
				 <a href="#"><i class="c1"></i></a>
				 <a class="active" href="#"><i class="c2"></i></a>
				 <a href="#"><i class="c3"></i></a>
				 <a href="#"><i class="c4"></i></a>
			 </div>		  -->
          <div class="signin">
            <div class="cart-sec">
              <button class="cart-length" @click="showModal">
                <img src="~/static/assets/images/cart.png" alt="cart" /><span>{{
                  `(${cartItemCount})`
                }}</span>
              </button>
            </div>
            <ul v-if="!this.checkAuthUser">
              <li>
                <nuxt-link to="/auth/registration">Регистрация</nuxt-link>
                <span>/</span> &nbsp;
              </li>
              <li><nuxt-link to="/auth/login">Вход</nuxt-link></li>
            </ul>

            <v-btn @click="logoutUser" v-else class="ma-2 signout" text icon large left color="white">
              <v-icon>mdi-logout-variant</v-icon>
              Выйти
            </v-btn>
          </div>
        </div>
        <!-- <div class="clearfix"></div> -->
      </div>
    </div>
    <cart-modal />
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import CartModal from "~/components/Cart/CartModal.vue";
export default {
  data() {
    return {
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
    ...mapActions('cart', ['fetchProductsInCart']),
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
      .then(()=>{this.$router.push('/')})
    }
  },

  mounted() {
    this.fetchProductsInCart()
  }
 
};
</script>