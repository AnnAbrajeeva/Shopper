<template>
  <div class="main-wrapper">
    <nuxt />
  </div>
</template>

<script>
export default {
   head() {
    return {
      link: [
      { rel: 'canonical', href: `http://localhost:http://localhost:3000${this.$route.path}` },
    ]
    }
  },
  
  data() {
    return {
      
    }
  },
  methods: {
   
  }
}
</script>
