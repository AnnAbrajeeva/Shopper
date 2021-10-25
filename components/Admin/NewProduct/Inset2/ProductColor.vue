    <template>
  <v-row>
    <v-col cols="12" sm="12" md="12">
      <p>Цвет</p>
      <v-text-field
        v-model="color"
        label="Цвет"
        solo
        :rules="[(v) => !!v || 'Укажите цвет товара']"
      ></v-text-field>

      <!-- <v-text-field v-model="color2" label="Цвет 2" solo></v-text-field>
      <p>Цвет 3</p>
      <v-text-field v-model="color3" label="Цвет 3" solo></v-text-field> -->
    </v-col>

    <v-col cols="12" sm="12" md="12">
      <p>Материал</p>
      <v-text-field
        v-model="material"
        label="Укажите ткань"
        solo
        :rules="[(v) => !!v || 'Укажите используемый материал товара']"
      ></v-text-field>
    </v-col>

    <v-col cols="12" sm="12" md="12">
      <p>Размеры</p>
      <div class="new-product__sizes">
        <template v-for="size in sizesList">
          <v-checkbox
            :key="size"
            v-model="sizes"
            class="mr-3"
            :label="size.label"
            color="red"
            :value="size.value"
            hide-details
          ></v-checkbox>
        </template>
      </div>
    </v-col>
  </v-row>
</template>

<script>
export default {
  props: {
    product: {
      type: Object,
    },
  },
  data() {
    return {
      sizesList: [
        {
          value: "42",
          label: "42",
        },
        {
          value: "44",
          label: "44",
        },
        {
          value: "46",
          label: "46",
        },
        {
          value: "48",
          label: "48",
        },
        {
          value: "50",
          label: "50",
        },
        {
          value: "52",
          label: "52",
        },
        {
          value: "54",
          label: "54",
        },
      ],

      sizes: [],
      color: "",
      material: "",
    };
  },

  watch: {
    sizes() {
      this.$store.dispatch("adminProducts/setSizes", this.sizes.join(", "));
    },
    color() {
      this.$store.dispatch("adminProducts/setColor", this.color);
    },
    material() {
      this.$store.dispatch("adminProducts/setMaterial", this.material);
    },
  },

  mounted() {
    if (this.product) {
      this.sizes = this.product.sizes ? this.product.sizes.split(",") : [];
      this.color = this.product.color ? this.product.color : "";
      this.material = this.product.cloth ? this.product.cloth : "";
    }
  },
};
</script>
