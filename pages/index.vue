<template>
<div class="loader" v-if="loading">
      <ring-loader color="#D73636" :size="150" sizeUnit="px" />
    </div>
  <div v-else>
    <slider />
    <product-tabs />
  </div>
</template>

<script>
import Slider from "~/components/Home/Slider.vue";
import ProductTabs from "~/components/Home/ProductTabs.vue";

export default {
  head() {
    return {
      title: "My Page title",
      meta: [
        {
          hid: "description",
          name: "description",
          content: "marketing website",
        },
      ],
    };
  },
  data() {
    return {
      loading: false
    }
  },

  components: {
    Slider,
    ProductTabs,
  },
};
</script>
