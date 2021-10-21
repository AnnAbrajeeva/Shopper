<template>
  <v-row>
    <v-col cols="12" sm="6" md="3">
      <p>Артикул</p>
      <v-text-field v-model="articul" label="Артикул" solo></v-text-field>
    </v-col>

    <v-col cols="12" sm="6" md="3">
      <p>Наличие</p>
      <v-radio-group v-model="available" row>
        <v-radio label="Есть" value="true"></v-radio>
        <v-radio label="Нет" value="false"></v-radio>
      </v-radio-group>
    </v-col>

    <v-col cols="12" sm="6" md="3">
      <p>Мужчинам/Женщинам</p>
      <v-radio-group v-model="gender" row>
        <v-radio label="М" value="man"></v-radio>
        <v-radio label="Ж" value="woman"></v-radio>
      </v-radio-group>
    </v-col>

    <v-col class="d-flex flex-column" cols="12" sm="6" md="3">
      <p>Категория</p>
      <v-select v-model="category" :items="items" label="Выберите категорию" solo></v-select>
    </v-col>
  </v-row>
</template>

<script>
export default {
    data() {
        return {
            articul: null,
            available: true,
            gender: 'woman',
            category: null,
             
        }
    }
}
</script>