<template>
  <div class="content-wrapper">
    <div class="container">
         <div class="title order-title">Заказ успешно оформлен</div>
      <div class="finish-order">
        <div class='finish-order__image'>
          <img src="~/static/assets/images/3440912-bag-basket-cart-checkmark-ecommerce-shopping-store_107537.png" alt="cart" />
        </div>

        <div class="finish-order__wrap"> 
            <p class='finish-order__text'>Ваш заказ успешно оформлен. В ближайшее время мы свяжемся с вами для уточнения деталей</p> 
            <router-link class='finish-order__button' to="/">Ok</router-link>
        </div>
      </div>
    </div>
  </div>
</template>