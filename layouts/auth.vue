<template>
  <div class="main-wrapper">
    <nuxt />
  </div>
</template>

<script>
export default {

   middleware: ["auth-check"],

   
  
  data() {
    return {
      
    }
  },
  methods: {
   
  }
}
</script>
