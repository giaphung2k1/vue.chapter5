const localStorage = store => {
    store.subscribe((mutation, state) => {
        window.localStorage.setItem('carts',JSON.stringify(state.cart.carts));
    })
}

export { localStorage};