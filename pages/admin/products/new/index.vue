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
                    <v-row>
                      <v-text-field label="Название" solo></v-text-field>
                    </v-row>
                    <div class="new-product__wrapper">
                      <div class="new-product__content">
                        <ul class="new-product__tabs">
                          <li>
                            <a
                              class="active"
                              v-on:click="activetab = '1'"
                              v-bind:class="[activetab === '1' ? 'active' : '']"
                              >РЕКОМЕНДУЕМ</a
                            >
                          </li>
                          <li>
                            <a
                              v-on:click="activetab = '2'"
                              v-bind:class="[activetab === '2' ? 'active' : '']"
                              >НОВИНКИ</a
                            >
                          </li>
                          <li>
                            <a
                              v-on:click="activetab = '3'"
                              v-bind:class="[activetab === '3' ? 'active' : '']"
                              >РАСПРОДАЖА</a
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
                              <v-row>
                                <v-col cols="12" sm="6" md="3">
                                  <p>Артикул</p>
                                  <v-text-field
                                    label="Артикул"
                                    solo
                                  ></v-text-field>
                                </v-col>

                                <v-col cols="12" sm="6" md="3">
                                  <p>Наличие</p>
                                  <v-radio-group v-model="available" row>
                                    <v-radio
                                      label="Есть"
                                      value="radio-1"
                                    ></v-radio>
                                    <v-radio
                                      label="Нет"
                                      value="radio-2"
                                    ></v-radio>
                                  </v-radio-group>
                                </v-col>

                                <v-col cols="12" sm="6" md="3">
                                  <p>Мужчинам/Женщинам</p>
                                  <v-radio-group v-model="available" row>
                                    <v-radio
                                      label="М"
                                      value="radio-1"
                                    ></v-radio>
                                    <v-radio
                                      label="Ж"
                                      value="radio-2"
                                    ></v-radio>
                                  </v-radio-group>
                                </v-col>

                                <v-col
                                  class="d-flex flex-column"
                                  cols="12"
                                  sm="6"
                                  md="3"
                                >
                                  <p>Категория</p>
                                  <v-select
                                    :items="items"
                                    label="Выберите категорию"
                                    solo
                                  ></v-select>
                                </v-col>
                              </v-row>
                              <v-row>
                                <v-col cols="12" sm="6" md="3">
                                  <p>Цена (сум)</p>
                                  <v-text-field
                                    label="Артикул"
                                    solo
                                  ></v-text-field>
                                </v-col>
                                <v-col cols="12" sm="6" md="3">
                                  <p>Старая цена (сум)</p>
                                  <v-text-field
                                    label="Артикул"
                                    solo
                                  ></v-text-field>
                                </v-col>
                                <v-col cols="12" sm="6" md="4">
                                  <p>Статус недели</p>
                                  <v-radio-group v-model="status" row>
                                    <v-radio
                                      label="Новая"
                                      value="radio-1"
                                    ></v-radio>
                                    <v-radio
                                      label="Популярная"
                                      value="radio-2"
                                    ></v-radio>
                                    <v-radio
                                      label="Скидка"
                                      value="radio-2"
                                    ></v-radio>
                                  </v-radio-group>
                                </v-col>
                              </v-row>
                              <p>Фото</p>
                              <v-row>
                                <div class="new-product__foto-wrapper">
                                  <add-foto />
                                  <add-foto />
                                  <add-foto />
                                  <add-foto />  
                                </div>
                              </v-row>
                              <v-row class="mt-5">
                                <div class="new-product__foto-wrapper">
                                  <add-foto />
                                  <add-foto />
                                  <add-foto />
                                  <add-foto />  
                                </div>
                              </v-row>
                            </div>
                          </div>

                          <!---//tab1----->
                          <!---tab2----->
                          <div v-if="activetab === '2'" class="tabcontent">
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
                                  v-for="product in getSales"
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
import AddFoto from '../../../../components/Admin/NewProduct/AddFoto/AddFoto.vue';
import _id from "../../../accessories/_id.vue";
export default {
  layout: "admin",
  components: {},
  data() {
    return {
      activetab: "1",
    };
  },
  components: {
    AddFoto
  }
};
</script>