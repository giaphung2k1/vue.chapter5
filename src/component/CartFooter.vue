<template>
  <tfoot id="my-cart-footer">
            <!-- CART FOOTER -->
            <tr>
              <td colspan="4">
                There are <b>{{objSum.countItem}}</b> items in your shopping cart.
              </td>
              <td colspan="2" class="total-price text-left">{{fomatPrice}}</td>
            </tr>
          </tfoot>
</template>

<script>
import{toCurrency} from '../helpers';
import { mapState,mapGetters } from 'vuex'
export default {
    name:'cart-footer',
    computed:{
      ...mapState({
        carts:state => state.cart.carts
      }),

      ...mapGetters({
         'objSum': 'cart/objSum'
      }),
      fomatPrice(){
        return toCurrency(this.objSum.totalPrice);
      }
         

    },
    
}
</script>

<style>

</style>