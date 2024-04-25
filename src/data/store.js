import { create } from "zustand";

const useProductStore = create(set => ({
    listOfProducts: [],
    checkoutList: [],
    chekoutTotal: 0,
    
    setListOfProducts: newList => set(state => ({
        listOfProducts: newList
    })),
    
    addTocheckoutList: (prod) => set((state => {
        
        let foundProduct = state.listOfProducts.find((product) => product.name === prod.name)
        let findExistingProduct = state.checkoutList.find((ExistingProdut => ExistingProdut.name === prod.name))
        
        console.log(foundProduct.name, foundProduct.quantity);
        
        
        console.log(state.checkoutList);
        if (foundProduct && findExistingProduct && foundProduct.name === findExistingProduct.name){
            console.log("quantity i foundProduckt: ",foundProduct.quantity);
            
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
        
        addToCheckoutTotal()
    })),
    
    
    
    addToCheckoutTotal: () => set(state => ({
        chekoutTotal: state.checkoutList.reduce(
            (total, prod) => total + parseInt(prod.price) * quantity, 0
        )
    }))}
    
    
    
))

export {useProductStore}