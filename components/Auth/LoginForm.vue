<template>
  <div class="login-wrap">
    <div
      class="login-wrap__img d-flex align-items-center justify-content-center"
    ></div>
    <h3 class="login-wrap__text">Авторизоваться</h3>
    <v-form class="login-form">
      <v-text-field
        v-model="user.email"
        label="Логин"
        prepend-inner-icon="mdi-account"
        :error-messages="loginErrors"
        @input="$v.user.email.$touch()"
        @blur="$v.user.email.$touch()"
      ></v-text-field>

      <v-text-field
        type="password"
        v-model="user.password"
        label="Пароль"
        prepend-inner-icon="mdi-lock"
        :error-messages="passwordErrors"
        @input="$v.user.password.$touch()"
        @blur="$v.user.password.$touch()"
      ></v-text-field>

      <button @click.prevent="logIn" type="button" class="login-form__button">
        ВОЙТИ
      </button>
    </v-form>
    <div class="w-100 text-center mt-4 text login-wrap__account">
      <p class="mb-0">Нет аккаунта?</p>
      <nuxt-link to="/auth/registration">Зарегистрироваться</nuxt-link>
    </div>
  </div>
</template>

<script>
import { required, email } from "vuelidate/lib/validators";

export default {
  data() {
    return {
      user: {
        email: "",
        password: "",
      },
    };
  },
  validations: {
    user: {
      email: { required, email },
      password: { required },
    },
  },

  computed: {
    loginErrors() {
      const errors = [];
      if (!this.$v.user.email.$dirty) return errors;
      !this.$v.user.email.required && errors.push("Введите Ваш логин");
      return errors;
    },
    passwordErrors() {
      const errors = [];
      if (!this.$v.user.password.$dirty) return errors;
      !this.$v.user.password.required && errors.push("Введите Ваш пароль");
      return errors;
    },
  },
  methods: {
    async logIn() {
      this.$v.$touch();
      if (this.$v.$invalid) {
        this.$v.$touch();
        return;
      }
      const user = {
        email: this.user.email,
        password: this.user.password,
      };
      try {
        console.log('123')
        await this.$store.dispatch("user/authUser", user);
        this.$router.push("/");
      } catch (e) {}
    },
  },
};
</script>