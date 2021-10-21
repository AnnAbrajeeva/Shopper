<template>
  <!-- <div class="main-panel">
    <div class="content"> -->
      <div class="container-fluid mt-10">
        <div class="row">
         <todo />
         <currency :currency="this.currency.rates" />
          <modal />
        </div>
         <table-orders class="mt-10" />
      </div>
    <!-- </div>
  </div> -->
</template>

<script>
import Currency from '~/components/Admin/Dashboard/Currency/Currency'
import Todo from '~/components/Admin/Dashboard/Todo/Todo'
import Modal from '~/components/Admin/Dashboard/Todo/Modal'
import TableOrders from '~/components/Admin/Dashboard/TableOrders/TableOrders'

export default {
  layout: "admin",
  components: {
    Todo,
    Modal,
    Currency,
    TableOrders
  },

  async asyncData({ $axios }) {
  let currencyKey = process.env.CURRENCY_KEY
  const currency = await $axios.$get(`https://openexchangerates.org/api/latest.json?app_id=${currencyKey}&symbols=EUR,RUB,UZS`)
  return { currency }
},

 data()
  {
   return {
     dialog: false,
    
   }
 }
};
</script>