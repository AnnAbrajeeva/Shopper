<template>
  <div class="col-md-3 side-bar">
    <div class="categories">
      <h3>Категории</h3>
      <ul>
        <li v-for="product in getCategories" :key="product.id">
          <nuxt-link :to="`/category/${product['category-id']}`">{{
            product["category-name"]
          }}</nuxt-link>
        </li>
      </ul>
    </div>
    <div class="sales">
      <h3>Фильтры</h3>
      <div class="pricing">
        <div class="sidebar-title">
          <h4>По цене</h4>
          <p class="sidebar-filtersDel" @click="priceReset">Сбросить</p>
        </div>

        <no-ssr>
          <vue-slider-range ref="priceSlider" />
        </no-ssr>
      </div>

      <div class="size" :key="Date.now().toLocaleString()">
        <div class="sidebar-title">
          <h4>По размеру</h4>
          <p class="sidebar-filtersDel" @click="sizeReset">Сбросить</p>
        </div>
        <div class="form_radio_btn form_radio_btn_sidebar size__list">
          <label
            :class="size == value ? 'checked' : ''"
            class="mr-2"
            :for="size"
            v-for="size in this.sizes"
            :key="size"
          >
            <input
              v-model="value"
              type="radio"
              name="radio-input"
              :value="selectSize"
              :id="size"
              @change="chooseSize(size)"
              :key="size"
            />
            {{ size }}
          </label>
        </div>
      </div>

        <div class="color">
          <div class="sidebar-title">
            <h4>По цвету</h4>
            <p class="sidebar-filtersDel" @click="colorsReset">Сбросить</p>
          </div>
          <div data-app>
            <v-select
              v-model="colors"
              :items="colorsList"
              :value="selectColor"
              label="Цвет"
              multiple
              chips
              persistent-hint
            ></v-select>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
import { mapGetters } from "vuex";
import NoSSR from "vue-no-ssr";
import VueSliderRange from "~/components/VueSliderRange";
export default {
  components: {
    "no-ssr": NoSSR,
    VueSliderRange,
  },

  props: ["getCategories", "products"],
  data() {
    return {
      sizes: [42, 44, 46, 48, 50, 52],
      value: "",
      colors: [],
      colorsList: [
        "черный",
        "красный",
        "кофейный",
        "кремовый",
        "бирюзовый",
        "бежевый",
        "белый",
        "серый",
        "бордо",
        "шоколадный",
        "золото",
        "синий",
        "розовый",
        "молочный",
      ],
    };
  },

  methods: {
    chooseSize(size) {
      this.$store.dispatch("products/setSize", size);
    },
    colorsReset() {
      this.colors = []
      this.$store.dispatch("products/resetColorsFilter");
    },
    sizeReset() {
      this.size = ''
      this.$store.dispatch("products/resetSizeFilters")
    },
    priceReset() {
      this.$refs.priceSlider.setValue([0, 2000]);
      this.$store.dispatch("products/resetPriceFilters")
    }
  },

  computed: {
    ...mapGetters("products", ["getColors", "getSize"]),
    selectColor() {
      if (this.getColors.length) {
        this.colors = this.getColors;
      } else {
        return this.colors
      }
    },
    selectSize() {
      if (this.getSize.length == "") {
        this.value = "";
      } else {
        this.value = this.getSize;
      }
    },
  },

  watch: {
    colors() {
      this.$store.dispatch("products/setColors", this.colors);
    },
  },
};
</script>

<style lang="scss" scoped>
.size {
  margin-top: 8.2em;
  &__list {
    margin-top: 20px;
  }
}
.v-input--selection-controls {
  margin-top: 0 !important;
  padding-top: 0 !important;
}
</style>


