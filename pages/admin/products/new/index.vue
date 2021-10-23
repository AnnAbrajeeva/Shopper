<template>
        <div v-if="!loading" class="container-fluid">
          <div class="row">
            <div class="col-md-12 mt-10">
              <div class="card">
                <div class="card-header card-header-primary">
                  <h4 class="card-title">Добавить новый товар</h4>
                </div>
                <div class="card-body">
                  <div class="container">
                    <v-form
                    ref="form"
                    v-model="valid" 
                    class="new-product">
                      <div class="container">
                        <v-row>
                          <v-text-field 
                          v-model="title" 
                          label="Название" 
                          solo
                           :rules="[v => !!v || 'Введите название товара']"
                          ></v-text-field>
                        </v-row>
                      </div>

                      <div class="new-product__wrapper">
                        <div class="new-product__content">
                          <ul class="new-product__tabs">
                            <li
                              v-on:click="activetab = '1'"
                              v-bind:class="[activetab === '1' ? 'active' : '']"
                            >
                              <a>Основные настройки</a>
                            </li>
                            <li
                              v-on:click="activetab = '2'"
                              v-bind:class="[activetab === '2' ? 'active' : '']"
                            >
                              <a>Цвета/Размеры</a>
                            </li>
                            <li
                              v-on:click="activetab = '3'"
                              v-bind:class="[activetab === '3' ? 'active' : '']"
                            >
                              <a>Рекомендуемые товары</a>
                            </li>
                            <div class="clearfix"></div>
                          </ul>

                          <div
                            class="resp-tabs-container new-product__tab-content"
                          >
                            <!---tab1----->

                            <div v-if="activetab === '1'" class="tabcontent">
                              <div class="course_demo1">
                                <product-params :categories="getCategories" :products="products" />
                                <product-price />
                                <product-images />
                                <product-editor />
                              </div>
                            </div>

                            <!---//tab1----->
                            <!---tab2----->
                            <div v-if="activetab === '2'" class="tabcontent">
                              <div class="course_demo1">
                                <product-color />
                              </div>
                            </div>
                            <!---//tab2----->
                            <!---tab3----->
                            <div v-if="activetab === '3'" class="tabcontent">
                              <div class="course_demo1">
                                <recommended-product :products="products" :categories="getCategories" />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <v-btn
                        class="new-product__add-foto-btn mt-3"
                        :loading="loading"
                        color="secondary"
                        @click="addNewProduct"
                       
                      >
                        Сохранить
                      </v-btn>
                      <v-btn
                        class="new-product__add-foto-btn mt-3 ml-2"
                        :loading="loading"
                        :disabled="loading"
                        color="secondary"
                        @click="this.$router.push('/admin/products')"
                      >
                        Отменить
                      </v-btn>
                    </v-form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
</template>

<script>
import {mapGetters} from 'vuex'
import { required } from 'vuelidate/lib/validators'
import ProductParams from "~/components/Admin/NewProduct/Inset/ProductParams.vue";
import ProductPrice from "~/components/Admin/NewProduct/Inset/ProductPrice.vue";
import ProductImages from "~/components/Admin/NewProduct/Inset/ProductImages.vue";
import ProductEditor from "~/components/Admin/NewProduct/Inset/ProductEditor.vue";
import ProductColor from "~/components/Admin/NewProduct/Inset2/ProductColor.vue";
import RecommendedProduct from "~/components/Admin/NewProduct/Inset3/RecommendedProduct.vue";
export default {
 
  layout: "admin",
  components: {
    ProductParams,
    ProductPrice,
    ProductImages,
    ProductEditor,
    ProductColor,
    RecommendedProduct,
  },
  async asyncData({ $axios }) {
    const products = await $axios.$get(
      "https://shopper-4eb43-default-rtdb.asia-southeast1.firebasedatabase.app/products.json"
    );
    let productsArray = [];
    for (let [key, value] of Object.entries(products)) {
        productsArray.push({...value, id: key});
    }

    return {
      products: productsArray,
    };
  },

   validations: {
      title: { required },
      },

  data() {
    return {
      activetab: "1",
      loading: false,
      title: null,
      valid: true,
      products: []
    };
  },

  watch: {
    title() {
      this.$store.dispatch('adminProducts/setTitle', this.title)
    }
  },

  computed: {
     titleErrors () {
        const errors = []
        if (!this.$v.title.$dirty) return errors
        !this.$v.title.required && errors.push('Введите название товара')
        return errors
      },
     getCategories() {
      let categories = [];
      this.products.forEach((product) => {
        categories.push(product["category-name"]);
      });
      categories = categories.filter(
        (item, index) => categories.indexOf(item) === index
      );
      this.categoriesList = categories;

      return categories;
    },
  },

  methods: {
    addNewProduct() {
       this.$refs.form.validate()
       if(!this.valid) return
      this.$store.dispatch('adminProducts/addProduct')
      this.$router.push('/admin/products') 
    }
  }
};
</script>