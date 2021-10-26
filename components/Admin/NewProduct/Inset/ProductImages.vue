<template>
  <div class="container">
    <p>Фото</p>
  
    <div v-if="this.product">
      <template v-if="posterType == 'object'">
        <div class="new-product__foto-wrapper">
         
          <template v-for="(image, index) in product.poster" :v-if="index < 3">
            <add-foto
              :image="index <= product.poster.length ? image : ''"
              :key="index"
            />
          </template>
          <template v-for="i in getImageCount">
            <add-foto :key="i+1" />
          </template>
       
        </div>
      </template>

      <template v-if="posterType == 'string'">
        <div class="new-product__foto-wrapper">
          <add-foto :image="product.poster" />
          <add-foto />
          <add-foto />
          <add-foto />
        </div>
        <div class="new-product__foto-wrapper">
          <add-foto />
          <add-foto />
          <add-foto />
          <add-foto />
        </div>
      </template>
    </div>
    <v-row v-else class="mt-5">
      <div class="new-product__foto-wrapper">
        <add-foto />
        <add-foto />
        <add-foto />
        <add-foto />
      </div>
      <div class="new-product__foto-wrapper">
        <add-foto />
        <add-foto />
        <add-foto />
        <add-foto />
      </div>
    </v-row>
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
    // getImage() {
    //   let images = [];
    //   if (this.product) {
    //     for (let [key, value] of Object.entries(this.product)) {
    //       if (key === "poster") {
    //         value.forEach((image) => {
    //           images.push(image);
    //         });
    //       }
    //       //  console.log(key)
    //       //  console.log(value)
    //       // if(value.id == params.id) {
    //       //   product = value
    //       // }
    //     }
    //     return images;
    //   }
    // },

    posterType() {
      return typeof this.product.poster;
    },

    getImageCount() {
      if (this.product.poster) {
        let imageNumber = 8 - this.product.poster.length;
        return imageNumber;
      } else {
        return;
      }
    },
  },
};
</script>