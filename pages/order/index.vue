<template>
  <div class="content-wrapper order">
    <div class="container">
      <div v-if="!getCart.length" class="title order-title">В корзине нет товаров</div>
      <div v-else class="title order-title">Товаров в корзине {{ getCart.length }} шт.</div>

      <div class="shopping-cart">
        <!-- Title -->

        <!-- Товар #1 -->
        <div
          class="item"
          v-for="(product, index) in this.getCart"
          :key="product.id"
        >
          <div class="numberOfProduct">
            <span>{{ index + 1 }}</span>
          </div>

          <div class="image">
            <img
              class="basket__cart_img order__img"
              :src="
                typeof product.poster == 'string'
                  ? product.poster
                  : product.poster[0]
              "
              :alt="product.title"
            />
          </div>

          <div class="description">
            <span>{{ product.title }}</span>
            <span>Цвет: {{ product.color }}</span>
          </div>

          <div class="quantity">
            <!-- <label for="sb-inline">Кол-во</label> -->
            <b-form-spinbutton
              id="sb-inline"
              :v-model="Number(product.quantity)"
              inline
              @change="changeQuantity($event, product.id)"
              :value="Number(product.quantity)"
            ></b-form-spinbutton>
          </div>

          <div class="total-price">
            {{ product.cost * product.quantity }} сум
          </div>

          <div class="delete-cart" @click="delFromCart(product.id)">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="25"
              fill="currentColor"
              class="bi bi-trash"
              viewBox="0 0 16 16"
            >
              <path
                d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"
              />
              <path
                fill-rule="evenodd"
                d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"
              />
            </svg>
          </div>
        </div>

        <div class="order__total">
         
          <div>Итого: {{getTotalPrice}} сум</div>
        </div>
         <nuxt-link to="/checkout" class="order__button">Оформить заказ</nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      product: {
        quantity: "",
      },
    };
  },
  computed: {
    ...mapGetters("cart", ["getCart"]),
    getTotalPrice() {
      if (this.getCart.length) {
        let result = [];
        this.getCart.map((product) => {
          result.push(product.quantity * product.cost);
        });
        result = result.reduce((sum, el) => sum + el);
        return result;
      } else {
        return 0
      }
    },
  },
  methods: {
    changeQuantity(value, id) {
      console.log(value, id);
      this.$store.dispatch("cart/changeQuantityInCart", {
        value: value,
        id: id,
      });
    },
    delFromCart(id) {
      this.$store.dispatch("cart/deleteProductFromCart", id);
    },
  },
};
</script>