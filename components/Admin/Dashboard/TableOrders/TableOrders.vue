<template>
  <div class="content">
    <div class="row">
      <div class="col-md-12">
        <div class="card last-orders">
          <div class="card-header card-header-primary">
            <h4 class="card-title">Последние заказы</h4>
            <!-- {{this.getProducts}} -->
          </div>
          <div class="orders card-body">
            <div class="table-responsive">
              <v-simple-table class="table">
                <template v-slot:default>
                  <thead class="text-primary">
                    <tr class="orders__table-header">
                      <th class="text-left">ID</th>
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
                    <tr v-for="order in getOrders" :key="order.id">
                      <td>{{ order.id }}</td>
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
  data() {
    return {
      productName: "",
    };
  },

  computed: {
    ...mapGetters("cart", ["getOrders"]),
    getProductsName() {
      let order = this.getOrders.map((order) => {
        let productName = order.products.map((product) => {
          console.log(product.title);
          return product.title;
        });
        return productName;
      });
      return order.join(", ");
    },
    getTotalPrice() {
      let total = this.getOrders.map((order) => {
        let price = order.products.map((product) => {
          return product.quantity * product.cost;
        });
        console.log(price);
        return price.reduce(
          (previousValue, currentValue) => previousValue + currentValue
        );
      });
      return total.toString();
    },
    getTotalQuantity() {
      let total = this.getOrders.map((order) => {
        let quantity = order.products.map((product) => {
          return Number(product.quantity);
        });
        console.log(quantity);
        return quantity.reduce(
          (previousValue, currentValue) => previousValue + currentValue
        );
      });
      return total.toString();
    },
    getTotalSizes() {
      let total = this.getOrders.map((order) => {
        let size = order.products.map((product) => {
          return product.sizes;
        });
        console.log(size);
        return size.join(", ");
      });
      return total.toString();
    },
    getTotalColor() {
      let total = this.getOrders.map((order) => {
        let color = order.products.map((product) => {
          return product.color;
        });
        console.log(color);
        return color.join(", ");
      });
      return total.toString();
    },
  },
};
</script>