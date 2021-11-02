<template>
    <v-container class="max-width">
            <v-pagination
              v-model="page"
              class="my-4"
              :length="pages"
               :total-visible="7"
            ></v-pagination>
          </v-container>
</template>

<script>
export default {
    props: ['pages'],
    data() {
        return {
           page: 1
        }
    },
    watch: {
        page() {
            this.$emit('changePage', this.page)
        }
    }
}
</script>

<style lang="scss">
.button-list {
    text-align: center;
    width: 100%;
    display: flex;
    justify-content: center;

    li {
        display: flex;
    }
}
.disabledBtn {
    opacity: 0.5;
}

.v-application .primary {
    background: black !important;
}

.v-pagination__item--active {
    background: black !important;
}
</style>