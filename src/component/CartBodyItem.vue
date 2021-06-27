<template>
  <!-- CART BODY -->
            <tr>
              <th scope="row">{{index}}</th>
              <td>{{product.name}}</td>
              <td>{{price}}</td>
              <td>
                <input
                  name="cart-item-quantity-1"
                  type="number"
                  @change="updateQuantity"
                  :value="item.quantity"
                  min="1"
                />
              </td>
              <td><strong>{{total}}</strong></td>
              <td>
                <a
                  @click.prevent='handleUpdate'
                  class="label label-info update-cart-item"
                  href="#"
                  >Update</a
                >
                <a
                  @click.prevent='handleDelete'
                  class="label label-danger delete-cart-item"
                  href="#"
                  >Delete</a
                >
              </td>
            </tr>
</template>

<script>
import {validateQuantity} from '../helpers/index';
import {NOTI_ACT_DELETE,NOTI_ACT_UPDATE,NOTI_GREATER_THAN_ONE} from '../constants/config';
import {toCurrency} from '../helpers/';
import { mapActions } from 'vuex';
export default {
    name:'cart-body-item',
    data(){
      return {

      }
    },
    computed:{
      product(){
        return this.item.product;
      },
      price(){
        return toCurrency(this.product.price);
      },
      total(){
        return this.product.price*this.item.quantity;
      }
      
    },
    props:{
      index:Number,
      item:Object
    },
    methods:{
        ...mapActions([
            'setLoading'
        ]),
      handleDelete(){
        if(confirm("Bạn có muốn xóa đơn hàng")){
          this.$store.dispatch('cart/actDeleteCart',this.item.product.id);
          this.$notify(NOTI_ACT_DELETE);
        }
        
      },
      updateQuantity(e){
          if(validateQuantity(e.target.value)){

             this.setLoading(true);
            setTimeout( ()=>{
                this.setLoading(false);
            },1000);
            this.handleUpdate(e);
           
            
          }
        else{
            
          this.$notify(NOTI_GREATER_THAN_ONE);

        }

      },
      handleUpdate(e){
          let dataUpdate = {
              id:this.item.product.id,
              quantity:parseInt(e.target.value)||this.item.quantity

          }
        this.$store.dispatch('cart/actUpdateCart',dataUpdate);  
        this.$notify(NOTI_ACT_UPDATE);  
        }
    }
}
</script>

<style>

</style>