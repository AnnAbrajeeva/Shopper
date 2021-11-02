<template>
  <div class="auth">
    <p><nuxt-link class="auth__link" :to="localePath('/')"><v-icon>mdi-arrow-left</v-icon>Вернуться на главную</nuxt-link></p>
    <section class="auth__wrapper">
      <div class="container">
          <registration-form />
      </div>
    </section>
  </div>
</template>

<script>
import RegistrationForm from '~/components/Auth/RegistrationForm.vue';
export default {
  components: { RegistrationForm },
  layout: "auth",
};
</script>
