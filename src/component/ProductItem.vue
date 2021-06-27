<template>
  <div class="media product">
    <div class="media-left">
      <a href="#">
        <img class="media-object" :src="item.image" alt="charmander" />
      </a>
    </div>
    <div class="media-body">
      <h4 class="media-heading">{{ item.name }}</h4>
      <p>
        {{ item.sumary }}
      </p>
      <template v-if="item.canBy">
        <input
          v-model="quantity"
          name="quantity-product-1"
          type="number"
          value="1"
          min="1"
        />
        <a
          @click.prevent="handleBuyProduct"
          href="#"
          class="price"
        >
          {{ price }}</a
        >
      </template>

      <span v-else class="price">{{ price }}</span>
    </div>
  </div>
</template>

<script>

import { NOTI_GREATER_THAN_ONE,NOTI_ACT_ADD  } from "../constants/config";
import { toCurrency, validateQuantity } from "../helpers";

export default {
  name: "product-item",
  data() {
    return {
      quantity: 1
    };
  },
  props: {
    item: Object
  },
  computed: {
    price() {
      return toCurrency(this.item.price);
    }
  },
  methods: {
    handleBuyProduct() {
      // Lấy id sp và quantity
      if (validateQuantity(this.quantity)) {

        let data = {
          product:this.item,
          quantity:parseInt(this.quantity)
        };
        
        this.$store.dispatch('cart/actionBuyProduct',data);
        this.quantity = 1;
        this.$notify(NOTI_ACT_ADD);
      } else {
        this.$notify(NOTI_GREATER_THAN_ONE);
      }
    }
  }
};
</script>

<style>
</style>