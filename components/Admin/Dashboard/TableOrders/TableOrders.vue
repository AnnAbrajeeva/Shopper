<template>
  <div class="content">
    <div class="row">
      <div class="col-md-12">
        <div class="card last-orders">
          <div class="card-header card-header-primary">
            <h4 class="card-title">Последние заказы</h4>
           
          </div>
          <div class="orders card-body">
            <div class="table-responsive">
              <v-simple-table class="table">
                <template v-slot:default>
                  <thead class="text-primary">
                    <tr class="orders__table-header">
                      <th class="text-left">Дата</th>
                      <th class="text-left">Товары</th>
                      <th class="text-left">Сумма</th>
                      <th class="text-left">Кол-во</th>
                      <th class="text-left">Размер</th>
                      <th class="text-left">Цвет</th>
                      <th class="text-left">Заказчик</th>
                      <th class="text-left">Адрес</th>
                      <th class="text-left">Телефон</th>
                      <th class="text-left">E-mail</th>
                    </tr>
                  </thead>
                
                  <tbody>
                    <tr v-for="order in sortOrders" :key="order.id">
                      <td>{{ order.date | formatDate("date") }}</td>
                      <td>{{ getProductsName }}</td>
                      <td>{{ getTotalPrice }} сум</td>
                      <td>{{ getTotalQuantity }} шт.</td>
                      <td>{{ getTotalSizes }} шт.</td>
                      <td>{{ getTotalColor }}</td>
                      <td>{{ order.user["name"] }}</td>
                      <td>
                        {{ order.user["city"] + " " + order.user["address"] }}
                      </td>
                      <td>{{ order.user["phone"] }}</td>
                      <td>{{ order.user["email"] }}</td>
                    </tr>
                  </tbody>
                </template>
              </v-simple-table>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  props: {
    orders: {
      type: Array,
    },
  },
  data() {
    return {
      productName: "",
    };
  },

  computed: {
    // ...mapGetters("cart", ["getOrders"]),
    getProductsName() {
       for (let i = 0; i < this.orders.length; i++) { 
        let productName = this.orders[i].products.map((product) => {
          return product.title;
        });
        return productName.join(', ')
       }
      return productName.toString();
    },
    getTotalPrice() {
     for (let i = 0; i < this.orders.length; i++) { 
        let price = this.orders[i].products.map((product) => {
          return product.quantity * product.cost;
        });
        let total = price.reduce(
          (previousValue, currentValue) => previousValue + currentValue
        );
        return total
     }
      return total.toString();
    },
    getTotalQuantity() {
       for (let i = 0; i < this.orders.length; i++) {
        let quantity = this.orders[i].products.map((product) => {
          return Number(product.quantity);
            });
        let total = quantity.reduce(
          (previousValue, currentValue) => previousValue + currentValue
        );
        return total
       }
      
      return total.toString();
    },
    getTotalSizes() {
     for (let i = 0; i < this.orders.length; i++) {
        let sizes = this.orders[i].products.map((product) => {
          let sizes = [];
          sizes.push(product.sizes);
          return product.sizes;
        });
        return sizes.join(", ");
      }
    },
    getTotalColor() {
      for (let i = 0; i < this.orders.length; i++) {
        let color = this.orders[i].products.map((product) => {
          let colors = [];
          colors.push(product.color);
          return product.color;
        });
        return color.join(", ");
      }
    },
    sortOrders() {
      let sort = this.orders.sort(function(a,b) {
         return new Date(b.date) - new Date(a.date);
      })
      return sort
    }
  },
};
</script>