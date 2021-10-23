<template>
  <div class="new-product__foto">
    <img :src="imageUrl ? imageUrl : '/assets/images/no-image-large.jpg'" alt="" />
    <input
      style="display: none"
      ref="imageFile"
      @change.prevent="uploadImageFile($event.target.files)"
      type="file"
      accept="image/png, image/jpeg"
    />
    <v-btn
      v-if="!imageUrl"
      class="ma-2 mt-2 mx-auto new-product__add-foto-btn"
      @click="launchImageFile"
      :disabled="isUploadingImage"
      color="secondary"
    >
      {{ isUploadingImage ? 'Загружается...' : 'Выберите фото' }}
    </v-btn>
    <v-btn
      v-if="imageUrl"
      class="ma-2 mt-2 mx-auto new-product__add-foto-btn"
       @click="deleteImage"
      :disabled="isDeletingImage"
      color="secondary"
    >
     {{ isDeletingImage ? 'Удаляется...' : 'Удалить' }}
    </v-btn>
  </div>
</template>

<script>
import firebase from "firebase"
export default {
  props: {
    product: {
      type: Object
    },
    image: {
      type: String
    }
  },
  data() {
    return {
      imageUrl: '',
      isUploadingImage: false,
      isDeletingImage: false
    };
  },

  methods: {
    launchImageFile () {
      // Trigger the file input click event.
      this.$refs.imageFile.click()
    },

     uploadImageFile (files) {
      if (!files.length) {
        return
      }
      const file = files[0]

      if (!file.type.match('image.*')) {
        alert('Please upload an image.')
        return
      }

      const metadata = {
        contentType: file.type
      }

      this.isUploadingImage = true

      // Create a reference to the destination where we're uploading
      // the file.
      const storage = firebase.storage()
      const imageRef = storage.ref(`products/${file.name}`)

      const uploadTask = imageRef.put(file, metadata).then((snapshot) => {
        // Once the image is uploaded, obtain the download URL, which
        // is the publicly accessible URL of the image.
        return snapshot.ref.getDownloadURL().then((url) => {
          return url
        })
      }).catch((error) => {
        console.error('Error uploading image', error)
      })

      // When the upload ends, set the value of the blog image URL
      // and signal that uploading is done.
      uploadTask.then((url) => {
        this.imageUrl = url
        this.isUploadingImage = false
        this.$store.dispatch('adminProducts/setImage', this.imageUrl)
      })
    },

      deleteImage () {
      firebase.storage().refFromURL(this.imageUrl).delete()
        .then(() => {
          this.imageUrl = ''
        })
        .catch((error) => {
          console.error('Error deleting image', error)
        })
    }
  },
  mounted() {
    if(this.image) {
      this.imageUrl = this.image
    }
  }
};
</script>

