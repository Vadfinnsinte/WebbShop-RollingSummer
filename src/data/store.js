import { create } from "zustand";

const useProductStore = create(set => ({
    listOfProducts: [],
    checkoutList: [],
    chekoutTotal: 0,
    isLoggedIn: false,
    
    
    setListOfProducts: newList => set(state => ({
        listOfProducts: newList
    })),
    
    addTocheckoutList: (prod) => set((state => {
        
        let foundProduct = state.listOfProducts.find((product) => product.name === prod.name)
        let findExistingProduct = state.checkoutList.find((ExistingProdut => ExistingProdut.name === prod.name))
       
        if (foundProduct && findExistingProduct && foundProduct.name === findExistingProduct.name){
            
            foundProduct ={ ...foundProduct, quantity: foundProduct.quantity + 1}
            return {checkoutList: state.checkoutList.map(produckt => {
                if (findExistingProduct.name === produckt.name ){
                    return {...produckt, quantity: produckt.quantity +1}
                }
                else {
                    return produckt
                }
            })}
        }
        
        else {
            foundProduct = { ...foundProduct, quantity: 1 }
            return {checkoutList: [...state.checkoutList, foundProduct]}
            
        }
        
    })),
    removeFromCheckout: (key) => set(state => {
        const prodToRemove = state.checkoutList.map((prod) => {
            if (prod.key === key && prod.quantity > 1 ){
                return {...prod, quantity: prod.quantity -1}
            } else if (prod.key === key && prod.quantity === 1) {
                return null
            } else {
                return prod
            }
        })
        const filterProdToRemove = prodToRemove.filter(prod => prod !== null)
        return{checkoutList: filterProdToRemove}
        
    }) ,
    addToCheckoutUnits: (key) => set((state => {
        const addUnit = state.checkoutList.map((prod => {
            if (prod.key === key) {
                return {...prod, quantity: prod.quantity +1}
            }
            else return prod
        }))
        return {checkoutList: addUnit}
    })),

    emptyCheckout: () => set(state => ({
        chekoutTotal: 0,
        checkoutList: []
        // lägg till ett p 
    })),
    
    
    addToCheckoutTotal: () => set(state => ({
        chekoutTotal: state.checkoutList.reduce(
            (total, prod) => total + parseInt(prod.price) * prod.quantity, 0
        )
    })),
    
    login:(user, password) => {
        if(user === "admin" && password === "password") {
            set({isLoggedIn: true})
            return true 
        }
        return false
    }
}))

export {useProductStore}