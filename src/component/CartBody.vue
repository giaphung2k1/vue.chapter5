<template>
  <tbody id="my-cart-body">
      <template v-if='carts.length'>
            <cart-body-item 
            v-for="(item, index) in carts" 
            :key="item.product.id"
            :item='item'
            :index='index+1'
             />
    </template>
    <tr v-else>
      <th colspan="6">{{NOTI_EMPTY_PRODUCT}}</th>
    </tr>
  </tbody>
</template>

<script>

import {NOTI_EMPTY_PRODUCT} from '../constants/config';
import { mapState } from "vuex";
import CartBodyItem from "./CartBodyItem";

export default {
  name: "cart-body",
  data(){
      return {
          NOTI_EMPTY_PRODUCT
      }
  },
  components: {
    CartBodyItem
  },
  computed: {
    ...mapState({
      carts: state => state.cart.carts
    })
  }
};
</script>

<style>
</style>