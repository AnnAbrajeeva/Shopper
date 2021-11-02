<template>
  <div class="recommended">
    <div class="container">
      <h3 class="recommended__title">С этим товаром также покупают:</h3>
      <div class="recommended_wrapper">
        <div
          class="g1 recommended_products"
          v-for="product in product.recomendedProducts"
          :key="product.id"
        >
          <img
            class="home-tabs_img"
            :src="product.poster[0]"
            :alt="product.title"
          />
          <nuxt-link :to="localePath(`/clothes/${product.id}`)"
            ><div class="caption">
              <h3>{{ product.title }}</h3>
              <h5>{{ product.cost }} сум</h5>
            </div></nuxt-link
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    product: {
      type: Object,
    },
  },
};
</script>

<style lang="scss" module>
.recommended {
  display: flex;
  justify-content: space-between;
}
.wrapper {
  display: flex;
  flex-wrap: wrap;
  > div {
    margin: 1em;
  }
  p {
    max-width: 270px;
    height: 35px;
  }
}
.image {
  width: 300px;
  height: 300px;
  object-fit: cover;
}
</style>