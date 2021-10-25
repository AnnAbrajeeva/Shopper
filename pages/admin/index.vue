<template>
  <!-- <div class="main-panel">
    <div class="content"> -->
  <div class="container-fluid mt-10">
    <div class="row">
      <todo />
      <currency :currency="this.currency.rates" />
      <modal />
    </div>
    <table-orders :orders="orders" class="mt-10" />
  </div>
  <!-- </div>
  </div> -->
</template>

<script>
import Currency from "~/components/Admin/Dashboard/Currency/Currency";
import Todo from "~/components/Admin/Dashboard/Todo/Todo";
import Modal from "~/components/Admin/Dashboard/Todo/Modal";
import TableOrders from "~/components/Admin/Dashboard/TableOrders/TableOrders";

export default {
  layout: "admin",
  components: {
    Todo,
    Modal,
    Currency,
    TableOrders,
  },


  async asyncData({ $axios }) {
    let currencyKey = process.env.CURRENCY_KEY;
    const currency = await $axios.$get(
      `https://openexchangerates.org/api/latest.json?app_id=${currencyKey}&symbols=EUR,RUB,UZS`,
    );
    const orders = await $axios.$get(
      "https://shopper-4eb43-default-rtdb.asia-southeast1.firebasedatabase.app/orders.json"
    );
    let ordersArray = [];

    for (let [key, value] of Object.entries(orders)) {
      ordersArray.push({ ...value, id: key });
    }
    console.log(currency)
    console.log(orders)

    return { currency, orders: ordersArray };
  },

  data() {
    return {
      dialog: false,
    };
  },
};
</script>