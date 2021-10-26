<template>
  <v-app-bar
  elevate-on-scroll
   app
   color="#f5f5f5"
   light
  >
    <v-app-bar-nav-icon @click="openMenu" class="hidden-lg-and-up"></v-app-bar-nav-icon>

    <v-toolbar-title class="header-admin__date">{{this.getFullDate}}</v-toolbar-title>

   

    <v-btn>
      <v-icon>mdi-logout-variant</v-icon>
      Выйти
    </v-btn>
  </v-app-bar>
</template>

<script>
export default {
  data() {
    return {};
  },

  methods: {
    openMenu() {
      this.$emit('showMenu')
    }
  },

  computed: {
    getFullDate() {
      var days = [
        "Воскресенье",
        "Понедельник",
        "Вторник",
        "Среда",
        "Четверг",
        "Пятница",
        "Суббота",
      ];
      var months = [
        "Январь",
        "Февраль",
        "Март",
        "Апрель",
        "Май",
        "Июнь",
        "Июль",
        "Август",
        "Сентябрь",
        "Октябрь",
        "Ноябрь",
        "Декабрь",
      ];

      var myDate = new Date();
      var fullDate =
        "Сегодня: " +
        myDate.getDate() +
        " " +
        months[myDate.getMonth()] +
        " " +
        myDate.getFullYear() +
        ", " +
        days[myDate.getDay()];
        return fullDate
    },
  },
};
</script>