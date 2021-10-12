<template>
  <div class="login-wrap">
    <div
      class="login-wrap__img d-flex align-items-center justify-content-center"
    ></div>
    <h3 class="login-wrap__text">Регистрация</h3>
    <v-form class="login-form">
        <v-text-field
        v-model="user.login"
        label="Введите Ваш логин"
        prepend-inner-icon="mdi-account"
        :error-messages="loginErrors"
        @input="$v.user.login.$touch()"
        @blur="$v.user.email.$touch()"
      ></v-text-field>
      <v-text-field
        v-model="user.email"
        label="Email"
        prepend-inner-icon="mdi-account"
        :error-messages="emailErrors"
        @input="$v.user.email.$touch()"
        @blur="$v.user.email.$touch()"
      ></v-text-field>

      <v-text-field
        v-model="user.password"
        label="Пароль"
        prepend-inner-icon="mdi-lock"
        :error-messages="passwordErrors"
        @input="$v.user.password.$touch()"
        @blur="$v.user.password.$touch()"
      ></v-text-field>

       <v-text-field
        v-model="user.samePassword"
        label="Повторите пароль"
        prepend-inner-icon="mdi-lock"
        :error-messages="samePasswordErrors"
        @input="$v.user.samePassword.$touch()"
        @blur="$v.user.samePassword.$touch()"
      ></v-text-field>

      <button @click.prevent="logIn" type="submit" class="login-form__button">ВОЙТИ</button>
    </v-form>
    <div class="w-100 text-center mt-4 text login-wrap__account">
      <p class="mb-0">Есть аккаунт?</p>
      <nuxt-link to="/auth/login">Авторизоваться</nuxt-link>
    </div>
  </div>
</template>

<script>
import { required, sameAs, email } from "vuelidate/lib/validators";


export default {
  data() {
    return {
      user: {
        login: "",
        email: "",
        password: "",
        samePassword: ""
      },
    };
  },
  validations: {
    user: {
      login: {required},
      email: { required, email },
      password: { required },
      samePassword: {
         required, sameAsPassword: sameAs('password')
      }
    },
  },

  computed: {
    loginErrors() {
      const errors = [];
      if (!this.$v.user.login.$dirty) return errors;
      !this.$v.user.login.required && errors.push("Введите Ваш логин");
      return errors;
    },
     emailErrors() {
      const errors = [];
      if (!this.$v.user.email.$dirty) return errors;
      !this.$v.user.email.email && errors.push('Введите верный email адрес')
      !this.$v.user.email.required && errors.push("Введите Вашу почту");
      return errors;
    },
    passwordErrors() {
      const errors = [];
      if (!this.$v.user.password.$dirty) return errors;
      !this.$v.user.password.required && errors.push("Введите Ваш пароль");
      return errors;
    },
      samePasswordErrors() {
      const errors = [];
      if (!this.$v.user.samePassword.$dirty) return errors;
      !this.$v.user.samePassword.required && errors.push("Повторите пароль");
      !this.$v.user.samePassword.sameAsPassword && errors.push("Пароль не совпадает");
      return errors;
    },
  },

  methods: {
     logIn() {
      this.$v.$touch();
      this.$store.dispatch('user/addNewUser', this.user)
      .then(res => {
        if(this.$route.path === '/auth/registration') {
          this.$router.push('/')
        } else {
          this.$router.push('/admin')
        }
      })
      .catch(error => {
          this.user.login = ''
          this.user.email = ''
         this.user.password = ''
            if (error.response) {
              console.log(error.response.data);
            } else if (error.request) {
              console.log(error.request);
            } else {
              console.log("Error", error.message);
            }})
    },
  },
     }
</script>