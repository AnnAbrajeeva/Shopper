<template>
  <div class="style">
    <div v-for="product in products" :key="product.id">
      <nuxt-link :to="`/product/${product.pSlug}`">
        <p>{{ product.pName }}</p>
        <img
          v-lazy="product.images.imgL"
          :class="$style.image"
        />
      </nuxt-link>
      <p>Цена {{ product.pPrice }}</p>
   
    </div>
  </div>
</template>

<script>

export default {
 
  props: {
    product: {
      type: Object,
      default: () => []
    }
  }
}
</script>

<style lang="scss" module>
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