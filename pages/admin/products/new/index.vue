<template>
  <!-- <v-app> -->
    <!-- <div class="main-panel">
      <div class="content"> -->
        <div class="container-fluid">
          <div class="row">
            <div class="col-md-12 mt-10">
              <div class="card">
                <div class="card-header card-header-primary">
                  <h4 class="card-title">Добавить новый товар</h4>
                </div>
                <div class="card-body">
                  <div class="container">
                    <v-form class="new-product">
                      <div class="container">
                        <v-row>
                          <v-text-field label="Название" solo></v-text-field>
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
                                <product-params />
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
                                <recommended-product :products="products" />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <v-btn
                        class="new-product__add-foto-btn mt-3"
                        :loading="loading"
                        :disabled="loading"
                        color="secondary"
                        @click="loader = 'loading'"
                      >
                        Сохранить
                      </v-btn>
                      <v-btn
                        class="new-product__add-foto-btn mt-3 ml-2"
                        :loading="loading"
                        :disabled="loading"
                        color="secondary"
                        @click="loader = 'loading'"
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
      <!-- </div>
    </div> -->
  <!-- </v-app> -->
</template>

<script>
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
  async asyncData({ $axios, store }) {
    const products = await $axios.$get(
      "https://shopper-4eb43-default-rtdb.asia-southeast1.firebasedatabase.app/products.json"
    );
    let productsArray = [];
    for (let [key, value] of Object.entries(products)) {
      productsArray.push(value);
    }

    return {
      products: productsArray,
    };
  },

  data() {
    return {
      activetab: "1",
      loading: false,
    };
  },
};
</script>