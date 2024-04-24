import { create } from "zustand";

const useProductStore = create(set => ({
    listOfProducts: [],
    checkoutList: [],
    chekoutTotal: 0,

    setListOfProducts: newList => set(state => ({
        listOfProducts: newList
    })),

    addTocheckoutList: (prod) => set((state => {
        const foundProduct = state.listOfProducts.find((product) => product.name === prod.name)
        console.log(foundProduct);
        console.log(state.checkoutList);
        
        return {checkoutList: [...state.checkoutList, foundProduct]}
    })),



    addToCheckoutTotal: () => {set(state => {
        chekoutTotal: state.checkoutList.reduce(
            (total, prod) => total + parseInt(prod.price), 0
        )
    })}



}))

export {useProductStore}