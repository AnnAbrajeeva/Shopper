<template>
    <input v-model="search" class="search" type="text" name="search" placeholder="Поиск...">
</template>

<script>
export default {
    props: ['value'],
    data() {
        return {
            search: ''
        }
    },

    watch: {
        search(val) {
            console.log(val)
            this.$emit('search', val)
        }
    }
}
</script>