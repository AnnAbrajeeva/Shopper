<template>
  <div class="auth"> 
    <p><nuxt-link class="auth__link" :to="('/')"><v-icon>mdi-arrow-left</v-icon>Вернуться на главную</nuxt-link></p>
    <section class="auth__wrapper">
      <div class="container">
        <login-form />
      </div>
    </section>
  </div>
</template>

<script>
import LoginForm from "~/components/Auth/LoginForm";
export default {
  components: { LoginForm },
  layout: "auth",
};
</script>