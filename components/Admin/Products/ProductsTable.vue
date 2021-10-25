<template>
  <div class="col-md-12 mt-10">
    <agree-modal v-if="showModal" @close="close" @agreeToDel="agreeToDel" />
    <div class="card products">
      <div class="card-header card-header-primary d-flex justify-space-between align-center">
        <h4 class="card-title">Все товары</h4>
        <nuxt-link tag="v-btn" to="/admin/products/new" class="add-product-btn">Добавить</nuxt-link>
      </div>
      <div class="orders card-body">
        <div class="table-responsive products-table">
          <v-simple-table class="table">
            <template v-slot:default>
              <thead class="text-primary">
                <tr class="orders__table-header">
                  <!-- <th class="text-left">ID</th> -->
                  <th class="text-left">Изображение</th>
                  <th class="text-left">Название</th>
                  <th class="text-left">Артикул</th>
                  <th class="text-left">Категория</th>
                  <th class="text-left">Описание</th>
                  <th class="text-left">Цена</th>
                  <th class="text-left">Цвет</th>
                  <th class="text-left">Размер</th>
                  <th class="text-left">Материал</th>
                  <th class="text-left">Наличие</th>
                  <th class="text-left">Действия</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="product in sortProducts" :key="product.id">
                  <!-- <td>{{ product.id }}</td> -->
                  <td>
                    <img
                      class="products-table__img"
                      :src="
                        typeof product.poster !== 'string'
                          ? product.poster[0]
                          : product.poster
                      "
                      :alt="product.title"
                    />
                  </td>
                  <td>{{ product.title }}</td>
                  <td>{{ product.articul }}</td>
                  <td>{{ product["category-name"] }}</td>
                  <td class="descr">
                    <p class="descr">
                      {{
                        typeof product.descr !== "string"
                          ? product.descr.__text
                          : product.descr
                      }}
                    </p>
                  </td>
                  <td>{{ product.cost }} сум</td>
                  <td>{{ product.color }}</td>
                  <td>{{ product.sizes }}</td>
                  <td>{{ product.cloth }}</td>
                  <td>{{ product.available }}</td>
                  <td>
                    <v-icon
                      @click="editProduct(product)"
                      class="product-table__edit"
                      light
                    >
                      mdi-pencil
                    </v-icon>
                    <v-icon
                      @click="deleteProduct(product)"
                      class="product-table__del"
                      light
                    >
                      mdi-close
                    </v-icon>
                  </td>
                </tr>
              </tbody>
            </template>
          </v-simple-table>
        </div>
         <pagination :pages="pages" @changePage="changePage" />
      </div>    
    </div>
  </div>
</template>

<script>
import axios from "axios";
import AgreeModal from "~/components/Admin/Products/AgreeModal";
import Pagination from "~/components/Pagination";
export default {
  components: {
    Pagination,
    AgreeModal,
  },
  props: {
    products: {
      type: Array,
      default: () => {
        return [];
      },
    },
  },
  data() {
    return {
      page: 1,
      perPage: 6,
      pages: 0,
      search: null,
      showModal: false,
      idToDel: null,
      sortingProducts: [],
    };
  },
  methods: {
    changePage(page) {
      this.page = page;
    },
    paginate(products) {
      let page = this.page;
      let perPage = this.perPage;
      let from = page * perPage - perPage;
      let to = page * perPage;
      return products.slice(from, to);
    },
    setPages() {
      this.pages = Math.ceil(this.sortingProducts.length / this.perPage);
    },
    deleteProduct(product) {
      this.showModal = true;
      this.idToDel = product.id;
    },
    close() {
      this.showModal = false;
    },
    agreeToDel() {
      let index = this.products.findIndex((product) => {
        return product.id === this.idToDel;
      });
      let product = this.products.find((product) => {
        return product.id === this.idToDel;
      });

      axios
        .get(
          `https://shopper-4eb43-default-rtdb.asia-southeast1.firebasedatabase.app/products.json?orderBy="id"&equalTo="${product.id}"`
        )
        .then((res) => {
          let delProduct = res.data;
          let number = Object.keys(delProduct)[0];
          axios
            .delete(
              `https://shopper-4eb43-default-rtdb.asia-southeast1.firebasedatabase.app/products/${number}.json`
            )
            .then((res) => {
              this.products.splice(index, 1);
            });
        })
        .catch((error) => {
          // Error
          if (error.response) {
            console.log(error.response.data);
          } else if (error.request) {
            console.log(error.request);
          } else {
            console.log("Error", error.message);
          }
          console.log(error.config);
        });
      this.showModal = false;
    },
    editProduct(product) {
      this.$router.push(`/admin/products/edit/${product.id}`)
    }
  },
  computed: {
    sortProducts() {
      this.sortingProducts = [...this.products];
      this.setPages();
      return this.paginate(this.products);
    },
  },
};
</script>