import { useState } from "react"
import { useProductStore } from "../data/store"
import { addProduct,getProducts } from "../data/crud"
import { handleValidation } from "../data/validate.js"


const AddProduct = ( {setIsAdding} ) => {
    const [name, setName] = useState("")
    const [picture, setPicture] = useState("")
    const [description, setDescription] = useState("")
    const [price, setPrice] = useState("")
    const [category, setCategory] = useState("")
    const {setListOfProducts} = useProductStore(state => ({
        setListOfProducts: state.setListOfProducts
    }))
    const [errors, setErrors] = useState({
        name: '',
        description: '',
        price: '',
        category: '',
        picture: ''
    });
    
    const newProduct = {name: name, picture: picture, description: description, price: price, category: category}
    const handleAddProduct = async (event) => {
        
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
        <h1 className="form-h1">Lägg till</h1>
        <label>Bildlänk:</label>
        <input className={errors.picture ? "input-error" : "input-correct" } name="picture" type="text" value={picture} onChange={e => setPicture(e.target.value)} onBlur={(e) => handleValidation(e, errors, setErrors)}></input>
        <p className={errors.picture ? 'error' : 'placeholder'}>{errors.picture ? errors.picture : 'Placeholder text'}</p>
        </div>
        <div className="add-product-form">
        <label>Namn:</label>
        <input className={errors.name ? "input-error" : "input-correct" } name="name" type="text" value={name} onChange={e => setName(e.target.value)}  onBlur={(e) => handleValidation(e, errors, setErrors)}></input>
        <p className={errors.name ? 'error' : 'placeholder'}>{errors.name ? errors.name : 'Placeholder text'}</p>
        </div>
        <div className="add-product-form">
        <label>Kategori:</label>
        <input className={errors.category ? "input-error" : "input-correct" } name="category" type="text" value={category} onChange={e => setCategory(e.target.value)}  onBlur={(e) => handleValidation(e, errors, setErrors)} ></input>
        <p className={errors.category ? 'error' : 'placeholder'}>{errors.category ? errors.category : 'Placeholder text'}</p>
        </div>
        <div className="add-product-form">
        <label>Pris:</label>
        <input className={errors.price ? "input-error" : "input-correct" } name="price" type="number" value={price} onChange={e => setPrice(e.target.value)}  onBlur={(e) => handleValidation(e, errors, setErrors)}></input>
        <p className={errors.price ? 'error' : 'placeholder'}>{errors.price ? errors.price : 'Placeholder text'}</p>
        </div>
        <div className="add-product-form">
        <label>Beskrivning:</label>
        <input className={errors.description ? "input-error" : "input-correct" } name="description" type="text" value={description} onChange={e => setDescription(e.target.value)}  onBlur={(e) => handleValidation(e, errors, setErrors)}></input>
        <p className={errors.description ? 'error' : 'placeholder'}>{errors.description ? errors.description : 'Placeholder text'}</p>
        </div>
        <button disabled= {!newProduct.name || !newProduct.picture || !newProduct.description || !newProduct.category || !newProduct.price} className="add-btn" onClick={handleAddProduct}>Spara</button>
        <button className="add-btn" onClick={() => setIsAdding(false)}>Avbryt</button>
        </section>
    )
}

export default AddProduct 