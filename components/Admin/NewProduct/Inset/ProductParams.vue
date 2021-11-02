<template>
  <v-row>
    <v-col cols="12" sm="6" md="3">
      <p>Артикул</p>
      <v-text-field
        v-model="articul"
        label="Артикул"
        solo
        :rules="[v => !!v || 'Введите артикул товара']"
        required
      ></v-text-field>
    </v-col>

    <v-col cols="12" sm="6" md="3">
      <p>Наличие</p>
      <v-radio-group
        v-model="available"
        row
         :rules="[v => !!v || 'Укажите наличие товара']"
      >
        <v-radio label="Есть" value="Есть"></v-radio>
        <v-radio label="Нет" value="Нет"></v-radio>
      </v-radio-group>
    </v-col>

    <v-col cols="12" sm="6" md="3">
      <p>Мужчинам/Женщинам</p>
      <v-radio-group 
      v-model="gender" 
      row
       :rules="[v => !!v || 'Укажите для кого данный товар']"  
      >
        <v-radio label="М" value="man"></v-radio>
        <v-radio label="Ж" value="woman"></v-radio>
      </v-radio-group>
    </v-col>

    <v-col class="d-flex flex-column" cols="12" sm="6" md="3">
      <p>Категория</p>
      <v-select
        v-model="category"
        :items="this.categories"
        label="Выберите категорию"
        solo
         :rules="[v => !!v || 'Выберите категорию товара']"  
        required
      ></v-select>
    </v-col>
  </v-row>
</template>

<script>
export default {
  props: {
    products: {
      type: Array
    },
    categories: {
      type: Array
    },
    product: {
      type: Object
    }
  },
  data() {
    return {
      articul: '',
      available: '',
      gender: '',
      category: '',
      categoryId: ''
    };
  },

 
  watch: {
    articul() {
      this.$store.dispatch("adminProducts/setArticul", this.articul);
    },
    available() {
      this.$store.dispatch("adminProducts/setAvailable", this.available);
    },
    gender() {
      this.$store.dispatch("adminProducts/setGender", this.gender);
    },
    category() {
      this.setCategoryId()
      this.$store.dispatch("adminProducts/setCategory", this.category);
      this.$store.dispatch("adminProducts/setCategoryId", this.categoryId);
    },
  },

  methods: {
    setCategoryId() {
      if(this.category) {
        switch (this.category) {
          case 'FashionUp':
          this.categoryId = '14'   
          break;
            
          case 'Сарафаны':
          this.categoryId = '10'   
          break;

          case 'Юбки и Шорты':
          this.categoryId = '11'   
          break;

          case 'Платья':
          this.categoryId = '2'   
          break;

          case 'Кофты,свитшот':
          this.categoryId = '13'   
          break;

          case 'Костюмы и Комбинезоны':
          this.categoryId = '5'   
          break;

          case 'Рубашки':
          this.categoryId = '9'   
          break;
        
          default:
            break;
        }
      }
    }
  },
  mounted() {
    if(this.product) {
      this.articul = this.product.articul ? this.product.articul : '',
      this.available = this.product.available ? this.product.available : '',
      this.gender = this.product.gender ? this.product.gender : '',
      this.category = this.product['category-name'] ? this.product['category-name'] : ''
    }
  }
};
</script>