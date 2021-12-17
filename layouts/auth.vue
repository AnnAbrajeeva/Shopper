<template>
  <div class="main-wrapper">
    <nuxt />
  </div>
</template>

<script>
export default {

   middleware: ["auth-check", "auth-admin"],

   
  
  data() {
    return {
      
    }
  },
  methods: {
   
  }
}
</script>
