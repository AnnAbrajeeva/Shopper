<template>
  <v-row>
    <div class="new-product__editor-wrapper">
      <div class="container">
        <p>Описание товара</p>
        <editor
          v-model="descr"
          api-key="lg2lb6gtgfbz9p82e9cqbzd4zwq6s08nbkzsvk6t6eca1br1"
          :init="{
            forced_root_block: false,
            height: 500,
            menubar: false,
            plugins: [
              'advlist autolink lists link image charmap print preview anchor media',
              'searchreplace visualblocks fullscreen',
              'insertdatetime media table paste code help wordcount',
            ],
            toolbar:
              'undo redo | formatselect | bold italic backcolor | \
           alignleft aligncenter alignright alignjustify | \
           bullist numlist outdent indent | removeformat | help',
          }"
          :rules="[(v) => !!v || 'Введите описание товара']"
        />
      </div>
    </div>
  </v-row>
</template>

<script>
import Editor from "@tinymce/tinymce-vue";
export default {
  props: {
    product: {
      type: Object
    }
  },

  data() {
    return {
      descr: this.product ? this.getDescr : '',
    };
  },
  components: {
    editor: Editor,
  },

  computed: {
    getDescr() {
      if(this.product) {
        if(typeof this.product.descr === 'object') {
          return this.product.descr.__text
        } else {
          return this.product.descr
        }
     }
    }  
  },

  mounted() {
    if(this.product) {
      this.descr = this.product ? this.getDescr : ''
    }
  },


 
  watch: {
    descr() {
      this.$store.dispatch('adminProducts/setDescr', this.descr)
    }
  }
};
</script>