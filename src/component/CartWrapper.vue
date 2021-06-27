<template>
  <!-- CART : START -->
  <div class="col-xs-12 col-sm-12 col-md-7 col-lg-7">
    <div class="panel panel-info">
      <div class="panel-heading">
        <h1 class="panel-title">Your Cart</h1>
      </div>
      <div class="panel-body">
        <table class="table">
          <cart-header/>
          <cart-body/>
          <cart-footer/>
        </table>
      </div>
    </div>
  </div>
  <!-- CART : END -->
</template>

<script>
import CartFooter from './CartFooter';
import CartBody from './CartBody';
import CartHeader from './CartHeader';
export default {
  name: "cart-wrapper",
  components:{
	  CartHeader,
	  CartBody,
	  CartFooter
  }
};
</script>

<style>
</style>