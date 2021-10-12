<template>
 <div class="content-wrapper">
    <div class="container">
    <div class="title order-title">Оформление заказа</div> 
        <checkout-form />
    </div>
 </div>
</template>

<script>
import CheckoutForm from '~/components/Order/CheckoutForm'
export default {
    components: {
        CheckoutForm
    }
    
}
</script>