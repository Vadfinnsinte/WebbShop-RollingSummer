import { useState } from "react"

import { addProduct,getProducts } from "../data/crud"


const AddProduct = ( {setIsAdding}) => {
    const [name, setName] = useState("")
    const [picture, setPicture] = useState("")
    const [description, setDescription] = useState("")
    const [price, setPrice] = useState("")
    const [category, setCategory] = useState("")
    const {setListOfProducts} = useProductStore(state => ({
        setListOfProducts: state.setListOfProducts
    }))

    const handleAddProduct = async (event) => {
        const newProduct = {name: name, picture: picture, description: description, price: price, category: category}
        try {
            await addProduct(newProduct)
            setName("")
            setCategory("")
            setDescription("")
            setPicture("")
            setPrice("")
            const uppdatedProducts = await getProducts()
            setListOfProducts(uppdatedProducts)
        }catch {
            console.log("does not work");
        } finally {
            setIsAdding(false)
        }
     }
     return (
        <section className="add-product-section">
            <div className="add-product-form">
                <label>Bildlänk:</label>
                <input type="text" value={picture} onChange={e => setPicture(e.target.value)}></input>
            </div>
            <div className="add-product-form">
                <label>Namn:</label>
                <input type="text" value={name} onChange={e => setName(e.target.value)}></input>
            </div>
            <div className="add-product-form">
                <label>Kategori:</label>
                <input type="text" value={category} onChange={e => setCategory(e.target.value)} ></input>
            </div>
            <div className="add-product-form">
                <label>Pris:</label>
                <input type="number" value={price} onChange={e => setPrice(e.target.value)}></input>
            </div>
            <div className="add-product-form">
                <label>Beskrivning:</label>
                <input type="text" value={description} onChange={e => setDescription(e.target.value)}></input>
            </div>
            <button className="add-btn" onClick={handleAddProduct}>Spara</button>
            <button className="add-btn" onClick={() => setIsAdding(false)}>Avbryt</button>
           </section>
     )
}

export default AddProduct 