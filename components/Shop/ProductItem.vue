<template>
  <div class="card mb-3">
    <div class="card-img" :style="`background-image:url(${typeof(product.poster) == 'string' ? product.poster : product.poster[0]})`">
      <div class="product">
        <h3>{{ product.title }}</h3>
        <p><span></span> {{ product.cost }} сум</p>
      </div>
    </div>
    <div
      class="
        card-img-overlay
        d-flex
        flex-column
        justify-content-center
        align-items-center
      "
    >
      <h4>
        <nuxt-link :to="`/clothes/${product.id}`">
          <img src="https://img.icons8.com/ios/50/000000/visible--v2.png" />
          {{ $t('shop.view') }}</nuxt-link
        >
      </h4>
    </div>
  </div>
</template>

<script>
export default {
  props: ["product"],
};
</script>