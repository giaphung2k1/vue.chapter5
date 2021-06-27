import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

import state from './state';
import actions from './actions';
import getters from './getters';
import mutations from './mutations';
import {localStorage} from './plugin';

import moduleCart from './cart/';
import moduleProduct from './product/';




const store = new Vuex.Store({
    // strict: process.env.NODE_ENV !== 'production',
    state,
    getters,
    mutations,
    actions,
    modules:{
        cart:moduleCart,
        product:moduleProduct
    },
    plugins:[localStorage]
    
})

export default store;