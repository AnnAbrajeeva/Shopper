<template>
  <div class="content-wrapper">
    <div class="container">
         <div class="title order-title">{{$t('orderSuccess.orderDone')}}</div>
      <div class="finish-order">
        <div class='finish-order__image'>
          <img src="~/static/assets/images/3440912-bag-basket-cart-checkmark-ecommerce-shopping-store_107537.png" alt="cart" />
        </div>

        <div class="finish-order__wrap"> 
            <p class='finish-order__text'>{{$t('orderSuccess.orderDoneText')}}</p> 
            <router-link class='finish-order__button' :to="localePath('/')">Ok</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
   middleware: ['auth-check'],
}
</script>