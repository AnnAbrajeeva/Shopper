<template>
      <div v-if="product" class="basket__cart">
          <img class="basket__cart_img" :src="typeof(product.poster) == 'string' ? product.poster : product.poster[0]" :alt="product.title" />

          <div class="basket__cart__info">
            <div class="basket__cart_title">{{product.title}}</div>
            <div class="basket__cart_price">{{product.cost*product.quantity}} {{ $t("currency") }}</div>
            <div class="basket__cart_count">{{product.quantity}} {{ $tc('cart.piece', product.quantity) }}</div>
          </div>
            <div class="basket__cart_del" @click="delFromCart(product.id)">
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
</template>

<script>
export default {
    props: ['product'],
    methods: {
      delFromCart(id) {
        this.$store.dispatch('cart/deleteProductFromCart', id)
      }
    }
}
</script>

<style lang="scss">
.basket__cart {
  display: flex;
  height: 120px;
  position: relative;
  padding: 15px;
  justify-content: space-between;
  background: #ffff;
  box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.05);
  border-radius: 8px;
  margin-bottom: 12px;
}

.basket__cart:hover {
  box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.25);
}

.basket__cart__info {
    display: flex;
    flex-direction: column;
    justify-content: space-between;

}

.basket__cart_title {
  font-style: normal;
   font-weight: bold;
  font-size: 14px;
  line-height: 18px;
  color: #59606d;
  margin-bottom: 6px;
}

.basket__cart_price {
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 18px;
}

.basket__cart_count {
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 18px;
  color: #59606d;
  margin-bottom: 6px;
}

.basket__cart_del {
  display: flex;
  align-items: center;
  cursor: pointer;
}

.basket__cart_del svg path {
  fill: #959DAD;
}

.basket__cart_del svg:hover path {
  fill: #1f1f1f;
}
</style>