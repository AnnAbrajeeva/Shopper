<template>
 <div class="content-wrapper">
    <div class="container">
    <div class="title order-title">{{ $t("cart.order") }}</div> 
        <checkout-form />
    </div>
 </div>
</template>

<script>
import CheckoutForm from '~/components/Order/CheckoutForm'
export default {
    components: {
        CheckoutForm
    },

     middleware: ['auth-check'],

    
}
</script>