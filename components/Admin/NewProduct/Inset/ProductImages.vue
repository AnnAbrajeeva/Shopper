<template>
  <div class="container">
    <p>Фото</p>
    <v-row>
      <div class="new-product__foto-wrapper">
        <div v-for="i in 5" :key="i">
          <template v-for="(image, index) in product.poster">
            <add-foto :image="index = product.poster.length ? image : null" v-if="i < 4" :key="index" />
          </template>
        </div>
      </div>
    </v-row>
    <!-- <v-row class="mt-5">
      <div class="new-product__foto-wrapper">
        <add-foto />
        <add-foto />
        <add-foto />
        <add-foto />
      </div>
    </v-row> -->
  </div>
</template>

<script>
import AddFoto from "~/components/Admin/NewProduct/AddFoto/AddFoto.vue";
export default {
  props: {
    product: {
      type: Object,
    },
  },
  data() {
    return {
      imageUrl: [],
    };
  },
  components: {
    AddFoto,
  },

  computed: {
    getImage() {
      let images = [];
      if (this.product) {
        for (let [key, value] of Object.entries(this.product)) {
          if (key === "poster") {
            value.forEach((image) => {
              images.push(image);
            });
          }
          //  console.log(key)
          //  console.log(value)
          // if(value.id == params.id) {
          //   product = value
          // }
        }
        return images;
      }
    },
  },
};
</script>