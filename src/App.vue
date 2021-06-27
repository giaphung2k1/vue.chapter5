<template>
  <div id="app">
    <loading :class="{show:isLoading}"/>
    <div class="container">
      <comp-title />

      <div class="row">
        <product-list />
        <cart-wrapper />
      </div>
    </div>
    <notifications group="foo" position='right bottom' />
  </div>
</template>

<script>
import {mapState} from 'vuex';
import Loading from './component/Loading';
import CartWrapper from "./component/CartWrapper";
import CompTitle from "./component/CompTitle";
import ProductList from "./component/ProductList";
export default {
  name: "app",
  data() {
    return {};
  },
  computed:{
    ...mapState(['isLoading']),

  },
  components: {
    CompTitle,
    ProductList,
    CartWrapper,
    Loading
  },
 
};
</script>

<style>
.vue-notification.warn {
    padding: 20px;
    font-size: 16px;
    background: #ffb648;
    border-left-color: #f48a06;
}
.vue-notification.success {
   padding: 20px;
    font-size: 16px;
    background: #68cd86;
    border-left-color: #42a85f;
}
</style>
