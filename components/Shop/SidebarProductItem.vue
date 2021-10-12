<template>
  <div class="col-md-4 side-bar2">
    <div class="product-wrapper">
      <div class="product-name">
        <h2>{{ this.product.title }}</h2>
        <p>{{ this.viewDescr }}</p>
        <p>Ткань : {{ this.product.cloth }}</p>

        <div class="d-flex align-items-center justify-content-between">
          <div>
            <label for="sb-inline">Кол-во</label>
            <b-form-spinbutton
              id="sb-inline"
              v-model="quantity"
              inline
            ></b-form-spinbutton>
          </div>

          <div class="product-price">
            <p class="text-center d-inline-block mr-1">Цена:</p>
            <span d-block> {{ this.product.cost }} &euro;</span>
          </div>
        </div>

        <div class="clearfix"></div>
      </div>
      <div class="product-id">
        <div class="size select-size">
          <b-form-select
            v-model="color"
            @change="updateProduct"
            :options="this.viewColors"
            :value="this.product.color"
          >
            <template #first>
              <b-form-select-option value="" disabled
                >Выберите цвет</b-form-select-option
              >
            </template>
          </b-form-select>
        </div>

        <h4>Выберите размер</h4>
        <div class="size select-size">
          <select-size v-if="viewSizes" v-model="size" :viewSizes="viewSizes" />
        </div>

        <p>Артикул продукта : {{ this.product.articul }}</p>
        <button @click="addToCart" class="add">Добавить в корзину</button>
      </div>
    </div>
  </div>
</template>

<script>
import SelectSize from "~/components/Shop/SelectSize";
export default {
  props: ["product", "products"],
  components: {
    SelectSize,
  },
  data() {
    return {
      color: this.product.color,
      size: "",
      quantity: 1,
    };
  },

  computed: {
    viewDescr() {
      if (this.products.length > 1) {
        return this.product.descr.__text;
      } else {
        return this.product.descr;
      }
    },

    viewSizes() {
      if (this.product.sizes) {
        let sizesList = this.product.sizes.split(",");
        return sizesList;
      }
    },

    viewColors() {
      if (this.product.color) {
        let colors = this.products.map((product) => product.color);
        return colors;
      }
    },
  },

  methods: {
    updateProduct() {
      let newProduct = this.products.find(
        (product) => this.color === product.color
      );
      this.$emit("updateProduct", newProduct);
    },

    addToCart() {
      if(!this.size) {
        let message = {
            name: "Выберите размер",
            id: Date.now().toLocaleString(),
            icon: "exclamation-circle-fill",
          };
          this.$emit("viewNotification", message);
         return
      }
      let cart = this.$store.getters["cart/getCart"];
      
        let productInCart = cart.some((prod) => prod.id == this.product.id && prod.size === this.size);
        if (productInCart) {
          let message = {
            name: "Товар уже есть в корзине",
            id: Date.now().toLocaleString(),
            icon: "exclamation-circle-fill",
          };
          this.$emit("viewNotification", message);
        } else {
              let productInCart = cart.some((prod) => prod.id == this.product.id);
              if(productInCart) {
                let product = {
                url: this.product.url,
                id: `${this.product.id}-${this.size}`,
                title: this.product.title,
                articul: this.product.articul,
                descr: this.product.descr,
                cost: this.product.cost,
                poster: this.product.poster,
                size: this.size,
                "category-id": this.product["category-id"],
                "category-name": this.product["category-name"],
                color: this.color,
                cloth: this.product.cloth,
                quantity: this.quantity,
            };
            this.$store.dispatch("cart/addProductsInCart", product);
              } else {
                 let product = {
                url: this.product.url,
                id: this.product.id,
                title: this.product.title,
                articul: this.product.articul,
                descr: this.product.descr,
                cost: this.product.cost,
                poster: this.product.poster,
                size: this.size,
                "category-id": this.product["category-id"],
                "category-name": this.product["category-name"],
                color: this.color,
                cloth: this.product.cloth,
                quantity: this.quantity,
                };
                this.$store.dispatch("cart/addProductsInCart", product);
              }
                 
            let message = {
                name: "Товар добавлен в корзину",
                id: Date.now().toLocaleString(),
                icon: "check-circle-fill",
            };    
            this.$emit("viewNotification", message);
            this.quantity = 1;
            this.size = "";
        }
    },
  },
};
</script>

 