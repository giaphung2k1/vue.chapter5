export default  {
    actionBuyProduct({commit,state},data){
        const index = state.carts.findIndex(function(item){
            return item.product.id === data.product.id;
        });
        if(index === -1){
            commit('ACTION_BUY_PRODUCT',data);''
        }
        else{
            let dataChange = {
                quantity:data.quantity,
                index:index

            }
            commit('CHANGE_QUANTITY',dataChange);
        }
       
    },
    actDeleteCart({commit,state},id){
        let newListCarts = state.carts.filter(function(item){
            return item.product.id !== id;
        });
        commit('CHANGE_LIST_CARTS',newListCarts);
    },
    actUpdateCart({commit,state},dataUpdate){
        let newListCarts = [...state.carts];
        const index = state.carts.findIndex(function(item){
            return item.product.id === dataUpdate.id;
        });
        if(index !== -1){
            newListCarts[index].quantity = dataUpdate.quantity;
            commit('CHANGE_LIST_CARTS',newListCarts);
            
        }
       
       

    }
}