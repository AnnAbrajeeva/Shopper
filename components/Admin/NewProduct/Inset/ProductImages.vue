<template>
  <div class="container">
    <p>Фото</p>
    <v-row>
      <div class="new-product__foto-wrapper">
        <add-foto />
        <add-foto />
        <add-foto />
        <add-foto />
      </div>
    </v-row>
    <v-row class="mt-5">
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
    data() {
        return {

        }
    },
    components: {
        AddFoto
    }
}
</script>