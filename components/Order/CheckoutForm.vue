<template>
  <v-form class="checkout">
    <v-container>
      <v-row>
        <v-col cols="12" md="4">
          <v-text-field
            v-model="user.name"
            :error-messages="nameErrors"
            solo
            label="Ваше имя"
            prepend-inner-icon="mdi-account"
            @input="$v.user.name.$touch()"
            @blur="$v.user.name.$touch()"
          ></v-text-field>
        </v-col>

        <v-col cols="12" md="4">
          <v-text-field
            v-model.trim="user.email"
            :error-messages="emailErrors"
            solo
            label="Ваш email"
            required
            append-icon=" mdi-email"
            @input="$v.user.email.$touch()"
            @blur="$v.user.email.$touch()"
          >
          </v-text-field>
        </v-col>

        <v-col cols="12" md="4">
          <v-text-field
            v-model="user.phone"
            :error-messages="phoneErrors"
            solo
            label="Ваш номер телефона"
            required
            append-icon="mdi-phone"
            @input="$v.user.phone.$touch()"
            @blur="$v.user.phone.$touch()"
          >
          </v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col data-app cols="12" md="6">
          <v-select
            v-model="user.city"
            :items="states"
            :error-messages="cityErrors"
            menu-props="auto"
            label="Укажите город"
            hide-details
            append-icon="mdi-map"
            @change="$v.user.city.$touch()"
            @blur="$v.user.city.$touch()"
            solo
          ></v-select>
        </v-col>

        <v-col cols="12" md="6">
          <v-text-field
            v-model="user.address"
             :error-messages="addressErrors"
            solo
            label="Введите адрес доставки"
            required
            append-icon="mdi-map-marker"
            @input="$v.user.address.$touch()"
            @blur="$v.user.address.$touch()"
          >
          </v-text-field>
        </v-col>
      </v-row>

      <p>Выберите способ оплаты</p>
      <v-row>
        <v-col cols="12" md="12">
        <div class="form-group" :class="{ 'form-group--error': $v.user.payment.$error }">
           <div class="error" v-if="!$v.user.payment.required && $v.user.payment.$error">Выберите тип оплаты</div>
        <div class="payment-wrapper">
          <label class="radio-inline payment-method cod">
            <input
             :error-messages="paymentErrors"
              type="radio"
              v-model="user.payment"
              name="payment"
              value="cod"
              @input="$v.user.payment.$touch()"
              @blur="$v.user.payment.$touch()"
            />
            <span>Наличные</span>
          </label>
          <label class="radio-inline payment-method click">
            <input
            :error-messages="paymentErrors"
              type="radio"
              v-model="user.payment"
              name="payment"
              value="click"
              @input="$v.user.payment.$touch()"
              @blur="$v.user.payment.$touch()"
            />
            <span><img src="/assets/images/click.png" alt="click" /></span>
          </label>
          <label class="radio-inline payment-method paycom">
            <input
            :error-messages="paymentErrors"
              type="radio"
              v-model="user.payment"
              name="payment"
              value="paycom"
              @input="$v.user.payment.$touch()"
              @blur="$v.user.payment.$touch()"
            />
            <span><img src="/assets/images/paycom.png" alt="paycom" /></span>
          </label>
          <label class="radio-inline payment-method kapitalbank">
            <input
            :error-messages="paymentErrors"
              type="radio"
              v-model="user.payment"
              name="payment"
              value="kapitalbank"
              @input="$v.user.payment.$touch()"
              @blur="$v.user.payment.$touch()"
            />
            <span
              ><img src="/assets/images/apelsin.png" alt="kapitalbank"
            /></span>
          </label>
          <label class="radio-inline payment-method visa">
            <input
            :error-messages="paymentErrors"
              type="radio"
              v-model="user.payment"
              name="payment"
              value="visa"
              @input="$v.user.payment.$touch()"
              @blur="$v.user.payment.$touch()"
            />
            <span><img src="/assets/images/visa.png" alt="visa" /></span>
          </label>
          </div>
        </div>
        </v-col>
      </v-row>
      <button @click.prevent="saveOrder" class="order__button">
        Оформить заказ
      </button>
    </v-container>
  </v-form>
</template>

<script>
import { required, minLength, email } from "vuelidate/lib/validators";
import { helpers } from "vuelidate/lib/validators";
const phone = helpers.regex("alpha", /^\+?[0-9\ \-\/]+$/);
export default {
  data() {
    return {
      name: "",
      states: [
        "Андижан",
        "Бухара",
        "Джизак",
        "Карши",
        "Наманган",
        "Навои",
        "Самарканд",
        "Термез",
        "Гулистан",
        "Коканд",
        "Фергана",
        "Ургенч",
        "Нукус",
        "Маргелан",
        "Чирчик",
        "Ташкент",
      ],

      user: {
        name: "",
        email: "",
        phone: "",
        address: "",
        city: null,
        payment: "",
      },
    };
  },

  validations: {
    user: {
      name: {
        required,
        minLength: minLength(3),
      },
      email: {
        required,
        email,
      },
      phone: {
        required,
        phone,
      },
      city: {
        required,
      },
      payment: {
        required,
      },
       address: {
        required,
      },
    },
  },

  methods: {
    saveOrder() {
      this.$v.$touch()
      if (this.$v.$invalid) {
        this.submitStatus = 'ERROR'
      } else {
        this.$store.dispatch("cart/addNewOrder", this.user);
        setTimeout(() => {
          this.$router.push('order/orderSuccess')
        }, 500)
    }
  },
  },

  computed: {
    nameErrors() {
      const errors = [];
      if (!this.$v.user.name.$dirty) return errors;
      !this.$v.user.name.minLength &&
        errors.push("Имя должно быть не меньше 2-х символов");
      !this.$v.user.name.required && errors.push("Введите ваше имя");
      return errors;
    },
    emailErrors() {
      const errors = [];
      if (!this.$v.user.email.$dirty) return errors;
      !this.$v.user.email.email && errors.push("Введите верную email почту");
      !this.$v.user.email.required && errors.push("Введите Вашу почту");
      return errors;
    },
    phoneErrors() {
      const errors = [];
      if (!this.$v.user.phone.$dirty) return errors;
      !this.$v.user.phone.phone &&
        errors.push("Введите телефон в формате +998 ХХ ХХХ-ХХ-ХХ");
      !this.$v.user.phone.required && errors.push("Введите Ваш номер телефона");
      return errors;
    },
    cityErrors() {
      const errors = [];
      if (!this.$v.user.city.$dirty) return errors;
      !this.$v.user.city.required && errors.push("Выберите Ваш город");
      return errors;
    },
      addressErrors() {
      const errors = [];
      if (!this.$v.user.address.$dirty) return errors;
      !this.$v.user.address.required && errors.push("Введите Ваш адрес");
      return errors;
    },
    paymentErrors() {
      const errors = [];
      if (!this.$v.user.payment.$dirty) return errors;
      !this.$v.user.payment.required && errors.push("Выберите тип оплаты");
      return errors;
    },
  },
};
</script>