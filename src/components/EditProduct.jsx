import { useState } from "react"
import { editProduct, getProducts } from "../data/crud"
import { useProductStore  } from "../data/store"

const EditProduct = ({product, setIsEdeting}) => {
    const [name, setName] = useState(product.name)
    const [picture, setPicture] = useState(product.picture)
    const [description, setDescription] = useState(product.description)
    const [price, setPrice] = useState(product.price)
    const [category, setCategory] = useState(product.category)
    const {setListOfProducts} = useProductStore(state => ({
        setListOfProducts: state.setListOfProducts
    }))

    const handleEditSave = async () => {
        const updatedProduct = { name, picture, description, price, category}
        try {
            await editProduct(product.key, updatedProduct)
            const updatedProductList = await getProducts()
            setListOfProducts(updatedProductList)
        } catch {
            console.log("Något gick fel i edit");
        } finally {
            setIsEdeting(false)
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
        <button className="add-btn" onClick={handleEditSave} >Spara</button>
        <button className="add-btn" onClick={() => setIsEdeting(false)}>Avbryt</button>
       </section>
    )
}

export default EditProduct