<template>
 
  <div class="basket" :class="getCartModal == true ? 'active' : ''" >
    <div class="basket__overlay" @click="hideModal"></div>

    <div class="basket__wrap" :key="Date.now()">
      <div class="basket__wrap_header" >
        <div class="basket__wrap_header-title">{{ $t("cart.cart") }}</div>
        <div @click="hideModal" class="basket__wrap_header-close">+</div>
      </div>

      <div class="basket__wrap__desc">{{ $t("cart.productsInCart") }}</div>
      <div v-if="this.getCart.length === 0">
        <p class="basket__wrap_emptyCart">
          {{ $t("cart.noProducts") }}
       
        </p>
      </div>

      <div v-else v-for="product in this.getCart" :key="product.id" class="basket__wrap_body">
        <cart-modal-item :product="product" />
      </div>
      <nuxt-link @click.native="hideModal()" :to="localePath('/order')" class="basket__wrap_button">{{ $t("cart.order") }}</nuxt-link>
     
    </div>
  </div>
    

</template>

<script>
import { mapGetters } from "vuex";
import CartModalItem from "~/components/Cart/CartModalItem.vue";
export default {
  components: {
    CartModalItem,
  },
  data() {
    return {
      cart: []
    }
  },
  computed: {
    ...mapGetters("cart", ["getCart", "getCartModal"]),
    cartItems() {   
      return this.getCart
    },
  },
  methods: {
    hideModal() {
      this.$store.dispatch('cart/closeModal')
    },
  },
};
</script>

<style lang="css">


.basket {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 99999;
  display: none;
}

.basket.active {
  display: block;
}


.basket__overlay {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: #ffff;
  opacity: 0.4;
}

.basket__wrap {
  position: absolute;
  right: 0;
  top: 0;
  width: 460px;
  height: 100%;
  background: #ffff;
  box-shadow: -4px 0px 16px rgba(0, 0, 0, .05);
  border-radius: 8px 0 0 8px;
  padding: 52px 48px 0 48px;
}

.basket__wrap_header {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.basket__wrap_header-title {
  font-style: normal;
  font-weight: bold;
  font-size: 32px;
  line-height: 41px;
}

.basket__wrap_header-close {
  font-size: 40px;
  line-height: 40px;
  width: 40px;
  text-align: center;
  transform: rotate(45deg);
  cursor: pointer;
}

.basket__wrap__desc {
  margin-top: 24px;
  margin-bottom: 16px;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 23px;
  color: #59606d;
}

.basket__wrap_emptyCart {
  margin-top: 20px;
  font-size: 24px;
  font-weight: bold;
}

.basket__wrap_body {
  margin-top: 16px;
}

.basket__wrap_button {
  color: #fff !important;
  background: #1a1818;
  padding: 0.7em;
  text-decoration: none !important;
  display: block;
  margin-top: 6em;
  text-align: center;
  width: 100%;
}

.basket__wrap_button:hover {
  color: #fff;
  background: #9f0000;
}
</style>