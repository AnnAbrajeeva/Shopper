<template>
  <div>
    <v-list-item dark v-for="item in items" :key="item.title" link>
      <nuxt-link class="admin-nav__link" tag="div" :to="item.link">
      <v-list-item-icon>
        <v-icon left active>{{ item.icon }}</v-icon>
      </v-list-item-icon>

      <v-list-item-content>
        <v-list-item-title>{{ item.title }}</v-list-item-title>
      </v-list-item-content>
        </nuxt-link>
    </v-list-item>
  
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        { title: "Главная", icon: "mdi-view-dashboard", link: "/admin/dashboard" },
        { title: "Товары", icon: "mdi-clipboard-text-outline", link: "/admin/products" },
        { title: "Блог", icon: "mdi-chat", link: "/admin/blog" },
        { title: "Пользователи", icon: "mdi-account-multiple", link: '/admin/users' },
        { title: "Посмотреть магазин", icon: "mdi-account-multiple", link: '/' },
      ],
    };
  },
};
</script>