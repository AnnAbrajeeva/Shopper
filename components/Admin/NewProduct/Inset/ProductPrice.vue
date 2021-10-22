<template>
  <v-row>
    <v-col cols="12" sm="6" md="3">
      <p>Цена (сум)</p>
      <v-text-field
      v-model="cost"
      type="Number"
      label="Введите новую цену"
      solo
      :rules="[v => !!v || 'Укажите цену товара']"  
      ></v-text-field>
    </v-col>
    <v-col cols="12" sm="6" md="3">
      <p>Старая цена (сум)</p>
      <v-text-field 
      v-model="oldCost" 
      type="Number"
      label="Введите старую цену если есть скидки" 
      solo
      ></v-text-field>
    </v-col>
    <v-col cols="12" sm="6" md="5">
      <p>Статус недели</p>
      <v-radio-group 
      v-model="status"
      row
      >
        <v-radio label="Новая" value="radio-1"></v-radio>
        <v-radio label="Популярная" value="radio-2"></v-radio>
        <v-radio label="Скидка" value="radio-2"></v-radio>
      </v-radio-group>
    </v-col>
  </v-row>
</template>

<script>
 import { required, numeric } from 'vuelidate/lib/validators'
export default {
    data() {
        return {
            cost: null,
            oldCost: null,
            status: null
        }
    },

     validations: {
      cost: { required, numeric },
      },

      computed: {
         costErrors () {
        const errors = []
        if (!this.$v.cost.$dirty) return errors
        !this.$v.cost.numeric && errors.push('Цена должна содержать только цифры')
        !this.$v.cost.required && errors.push('Введите пожалуйста цену')
        return errors
      },
      },

      watch: {
        cost() {
          this.$store.dispatch('adminProducts/setCost', this.cost)
        }, 
           oldCost() {
          this.$store.dispatch('adminProducts/setOldCost', this.oldCost)
        },
            status() {
          this.$store.dispatch('adminProducts/setStatus', this.status)
        }
      }
}
</script>