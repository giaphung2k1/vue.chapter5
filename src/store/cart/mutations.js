export default  {
    ACTION_BUY_PRODUCT(state,data){
        state.carts.push(data);
    },
    CHANGE_QUANTITY(state,dataChange){
        state.carts[dataChange.index].quantity += dataChange.quantity;
    },
    CHANGE_LIST_CARTS(state,newListCarts){
        state.carts = newListCarts;
    },
    
}