<template>
  <v-row>
    <v-col cols="12" sm="6" md="3">
      <p>Цена (сум)</p>
      <v-text-field v-model="cost" label="Введите новую цену" solo></v-text-field>
    </v-col>
    <v-col cols="12" sm="6" md="3">
      <p>Старая цена (сум)</p>
      <v-text-field v-model="oldCost" label="Введите старую цену если есть скидки" solo></v-text-field>
    </v-col>
    <v-col cols="12" sm="6" md="4">
      <p>Статус недели</p>
      <v-radio-group v-model="status" row>
        <v-radio label="Новая" value="radio-1"></v-radio>
        <v-radio label="Популярная" value="radio-2"></v-radio>
        <v-radio label="Скидка" value="radio-2"></v-radio>
      </v-radio-group>
    </v-col>
  </v-row>
</template>

<script>
export default {
    data() {
        return {
            cost: null,
            oldCost: null,
            status: null
        }
    }
}
</script>