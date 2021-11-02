<template>
    <v-navigation-drawer
    app
    class="sidebar"
      v-model="drawer"
      :src="bg"
      absolute
      hide-overlay
    >
      <v-list dense nav class="py-0">
        <v-list-item two-line>
          
            <img src="~/static/assets/images/logo.png" alt=""
          />
          

          <v-list-item-content>
            <v-list-item-title>Application</v-list-item-title>
            <v-list-item-subtitle>Subtext</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>

        <v-divider></v-divider>
        <sidebar-links />
      
      </v-list>
    </v-navigation-drawer>
</template>


<script>
import SidebarLinks from "./SidebarLinks.vue";

export default {
  props: {
    drawer: {
      type: Boolean
    }
  },
  components: {
    SidebarLinks,
  },
  data() {
    return {
      items: [
        { title: "Главная", icon: "mdi-view-dashboard" },
        { title: "Товары", icon: "mdi-clipboard-text-outline" },
        { title: "Блог", icon: "mdi-chat" },
        { title: "Пользователи", icon: "mdi-account-multiple" },
      ],

      bg: "/assets/img/sidebar-1.jpg",
      color: "rgba(27,27,27,.87)",
      
    };
  },

  // provide() {
  //   return {
  //     autoClose: this.autoClose,
  //   };
  // },
  computed: {
    sidebarStyle() {
      return {
        backgroundImage: `url(${this.sidebarBackgroundImage})`,
      };
    },
  },
};
</script>
<style>
@media screen and (min-width: 991px) {
  .nav-mobile-menu {
    display: none;
  }
}
</style>