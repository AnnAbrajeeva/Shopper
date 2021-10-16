<template>
  <div class="col-lg-6 col-md-12">
    <div class="card">
      <div class="card-header card-header-warning">
        <h4 class="card-title">Курсы валют на сегодня</h4>
        <p class="card-category">
          {{ this.date | formatDate('datetime') }}
        </p>
      </div>
      <div class="currency card-body table-responsive">
        <table class="table table-hover">
          <tbody class="text-warning">
            <tr>
              <th class="currency__type">UZS</th>
              <th class="currency__value">{{ this.getUZS }}</th>
            </tr>
              <tr>
              <th class="currency__type">EUR</th>
              <th class="currency__value">{{ this.getEUR }}</th>
            </tr>
              <tr>
              <th class="currency__type">RUB</th>
              <th class="currency__value">{{ this.getRUB }}</th>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["currency"],

  data() {
    return {
      date: new Date(),
      interval: null
    };
  },
  computed: {

    getUZS() {
      let uzs = this.currency["UZS"].toFixed(2);
      return uzs;
    },
    getEUR() {
      let eur = this.currency["EUR"].toFixed(2);
      return eur;
    },
      getRUB() {
      let rub = this.currency["RUB"].toFixed(2);
      return rub;
    },
  },
  mounted() {
    this.interval = setInterval(() => {
      this.date = new Date()
    }, 1000)
  },

  beforeDestroy() {
    clearInterval(this.interval)
  }
};
</script>