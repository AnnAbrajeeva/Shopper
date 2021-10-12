<template>
      <div class="loader" v-if="loading">
      <ring-loader color="#D73636" :size="150" sizeUnit="px" />
    </div>
</template>

<script>
export default {
     data: () => ({
      loading: false
    }),
    methods: {
      start() {
        this.loading = true
      },
      finish() {
        this.loading = false
      }
    }
}
</script>