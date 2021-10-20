<template>
  <div class="main-panel">
    <div class="content">
      <div class="container-fluid">
        <div class="title">
          <!-- <h3>Все товары</h3> -->
        </div>
        <div class="row">
          <div class="col-md-12">
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
                          <li  v-on:click="activetab = '1'"
                              v-bind:class="[activetab === '1' ? 'active' : '']">
                            <a
                              
                              v-on:click="activetab = '1'"
                              v-bind:class="[activetab === '1' ? 'active' : '']"
                              >Основные настройки</a
                            >
                          </li>
                          <li  v-on:click="activetab = '2'"
                              v-bind:class="[activetab === '2' ? 'active' : '']">
                            <a
                              v-on:click="activetab = '2'"
                              v-bind:class="[activetab === '2' ? 'active' : '']"
                              >Цвета/Размеры</a
                            >
                          </li>
                          <li>
                            <a
                              v-on:click="activetab = '3'"
                              v-bind:class="[activetab === '3' ? 'active' : '']"
                              >Рекомендуемые товары</a
                            >
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
                              <VueSlickCarousel
                                multiple
                                class="home-tabs"
                                id="flexiselDemo1"
                                v-if="this.products.length"
                                v-bind="settings"
                              >
                                <li
                                  class="g1"
                                  v-for="product in getArrived"
                                  :key="product.id"
                                >
                                  <img
                                    class="home-tabs_img"
                                    :src="product.poster[0]"
                                    :alt="product.title"
                                  />
                                  <a href="single.html"
                                    ><div class="caption">
                                      <h3>{{ product.title }}</h3>
                                      <h5>{{ product.cost }} &euro;</h5>
                                    </div></a
                                  >
                                </li>
                              </VueSlickCarousel>
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
    </div>
  </div>
</template>

<script>

import ProductParams from "~/components/Admin/NewProduct/Inset/ProductParams.vue";
import ProductPrice from "~/components/Admin/NewProduct/Inset/ProductPrice.vue";
import ProductImages from '~/components/Admin/NewProduct/Inset/ProductImages.vue';
import ProductEditor from '~/components/Admin/NewProduct/Inset/ProductEditor.vue';
import ProductColor from '~/components/Admin/NewProduct/Inset2/ProductColor.vue';
export default {
  layout: "admin",
  components: {
   
   
    ProductParams,
    ProductPrice,
    ProductImages,
    ProductEditor,
    ProductColor,
  },
  data() {
    return {
      activetab: "1",
    };
  },
};
</script>