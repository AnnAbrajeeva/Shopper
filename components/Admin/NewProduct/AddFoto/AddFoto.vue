<template>
  <div class="new-product__foto">
    <img :src="imgUrl ? imgUrl : '/assets/images/no-image-large.jpg'" alt="" />
    <input
      style="display: none"
      type="file"
      ref="fileInput"
      accept="image/*"
      @change="onFilePicked"
    />
    <v-btn
      v-if="!imgUrl"
      class="ma-2 mt-2 mx-auto new-product__add-foto-btn"
      :loading="loading"
      :disabled="loading"
      color="secondary"
      @click="onPickFile"
    >
      Выберите фото
    </v-btn>
    <v-btn
      v-if="imgUrl"
      class="ma-2 mt-2 mx-auto new-product__add-foto-btn"
      :loading="loading"
      :disabled="loading"
      color="secondary"
      @click="delImg"
    >
     Удалить
    </v-btn>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  data() {
    return {
      loading: false,
      imgUrl: null,
      image: null,
      buttonText: "Выберите фото",
      selectedFile: null
    };
  },

 

  methods: {
    onPickFile() {
      this.$refs.fileInput.click();
    },

    onFilePicked(event) {
    
      const files = event.target.files;
      let filename = files[0].name;
      if (filename.lastIndexOf(".") <= 0) {
        this.$toast.show("Пожалуйста выберите верный формат файла");
      }
      const fileRider = new FileReader();
      fileRider.addEventListener("load", () => {
        this.imgUrl = fileRider.result;
      });
      fileRider.readAsDataURL(files[0]);
      this.image = files[0];

      this.selectedFile = event.target.files[0]
      
      const fd = new FormData();
      fd.append('image', this.selectedFile, this.selectedFile.name)
      console.log(files[0])
      console.log(fd)
      axios.post('https://shopper-4eb43-default-rtdb.asia-southeast1.firebasedatabase.app/shopper-4eb43.appspot.com/products/\.\json', this.image)
      .then(res => {
          console.log(res)
      })
       .catch((error) => {
          // Error
          if (error.response) {
            console.log(error.response.data);
          } else if (error.request) {
            console.log(error.request);
          } else {
            console.log("Error", error.message);
          }
          console.log(error.config);
        });
    },

    delImg() {
        this.imgUrl = null
    }
  },
};
</script>

