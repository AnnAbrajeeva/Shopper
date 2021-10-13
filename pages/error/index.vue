<template>
<v-main>
  <div class="content-wrapper">
    <div class="productNotFound vh100">
      <h1>Ошибка</h1>
      <p>Что-то пошло не так. Повторите попытку позже</p>
       <v-btn
      depressed
      @click="backToMain"
      class="error-btn"
    >
      Вернуться на главную
    </v-btn>
    </div>
  </div>
  </v-main>
</template>

<script>
export default {
    data() {
        return {

        }
    },
    methods: {
        backToMain() {
            this.$router.push('/')
        }
    }
}
</script>

<style lang="scss">
.error-btn {
    background-color: #a70101 !important;
    color: white !important
}
</style>
