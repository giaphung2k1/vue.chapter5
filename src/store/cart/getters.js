export default  {
    objSum(state){

        let initObjSum = {
            countItem:0,
            totalPrice:0
        };
        return state.carts.reduce(function(objSum,objCart) {
            let countItem = objSum.countItem + objCart.quantity;
            let totalPrice = objSum.totalPrice + objCart.product.price* objCart.quantity;
            return {
                countItem,
                totalPrice
            }
            
        },initObjSum);
    }
}