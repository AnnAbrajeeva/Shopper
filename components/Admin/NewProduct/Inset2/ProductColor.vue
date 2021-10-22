    <template>
  <v-row>
    <v-col cols="12" sm="12" md="12">
      <p>Цвет 1</p>
      <v-text-field 
      v-model="color" 
      label="Цвет 1" 
      solo
      :rules="[v => !!v || 'Укажите цвет товара']"  
      ></v-text-field>
      <p>Цвет 2</p>
      <!-- <v-text-field v-model="color2" label="Цвет 2" solo></v-text-field>
      <p>Цвет 3</p>
      <v-text-field v-model="color3" label="Цвет 3" solo></v-text-field> -->
    </v-col>

    <v-col cols="12" sm="12" md="12">
      <p>Размеры</p>
      <div class="new-product__sizes">
        <v-checkbox
          v-model="sizes"
          class="mr-3"
          label="42"
          color="red"
          value="42"
          hide-details
        ></v-checkbox>
        <v-checkbox
          v-model="sizes"
          class="mr-3"
          label="44"
          color="red"
          value="44"
          hide-details
        ></v-checkbox>
        <v-checkbox
          v-model="sizes"
          class="mr-3"
          label="46"
          color="red"
          value="46"
          hide-details
        ></v-checkbox>
        <v-checkbox
          v-model="sizes"
          class="mr-3"
          label="48"
          color="red"
          value="48"
          hide-details
        ></v-checkbox>
        <v-checkbox
          v-model="sizes"
          class="mr-3"
          label="50"
          color="red"
          value="50"
          hide-details
        ></v-checkbox>
        <v-checkbox
          v-model="sizes"
          class="mr-3"
          label="52"
          color="red"
          value="52"
          hide-details
        ></v-checkbox>
      </div>
    </v-col>
  </v-row>
</template>

<script>
export default {
  data() {
    return {
      sizes: [],
      color: '',
      color2: null,
      color3: null,
    };
  },

    watch: {
      sizes() {
        this.$store.dispatch('adminProducts/setSizes', this.sizes)
      },
      color() {
        this.$store.dispatch('adminProducts/setColor', this.color)
      }
    }
};
</script>
</template>