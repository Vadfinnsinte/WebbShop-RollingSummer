import { create } from "zustand";

const useProductStore = create(set => ({
    listOfProducts: [],

    setListOfProducts: newList => set(state => ({
        listOfProducts: newList
    }))


}))

export {useProductStore}