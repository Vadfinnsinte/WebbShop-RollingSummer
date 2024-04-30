import { useState } from "react"
import { editProduct, getProducts } from "../data/crud"
import { useProductStore  } from "../data/store"
import { handleValidation } from "../data/validate.js"

const EditProduct = ({product, setIsEdeting}) => {
    const [name, setName] = useState(product.name)
    const [picture, setPicture] = useState(product.picture)
    const [description, setDescription] = useState(product.description)
    const [price, setPrice] = useState(product.price)
    const [category, setCategory] = useState(product.category)
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
    
    
    const updatedProduct = { name, picture, description, price, category}
    const handleEditSave = async () => {
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
        <h1 className="form-h1">Ändra</h1>
        <label>Bildlänk:</label>
        <input className={errors.picture ? "input-error" : "input-correct" } name="picture" type="text" value={picture} onChange={e => setPicture(e.target.value)} onBlur={(e) => handleValidation(e, errors, setErrors)} ></input>
        <p className={errors.picture ? 'error' : 'placeholder'}>{errors.picture ? errors.picture : 'Placeholder text'}</p>
        </div>
        <div className="add-product-form">
        <label>Namn:</label>
        <input className={errors.name ? "input-error" : "input-correct" } name="name" type="text" value={name} onChange={e => setName(e.target.value)} onBlur={(e) => handleValidation(e, errors, setErrors)}></input>
        <p className={errors.name ? 'error' : 'placeholder'}>{errors.name ? errors.name : 'Placeholder text'}</p>
        </div>
        <div className="add-product-form">
        <label>Kategori:</label>
        <input className={errors.category ? "input-error" : "input-correct" } name="category" type="text" value={category} onChange={e => setCategory(e.target.value)} onBlur={(e) => handleValidation(e, errors, setErrors)}></input>
        <p className={errors.category ? 'error' : 'placeholder'}>{errors.category ? errors.category : 'Placeholder text'}</p>
        </div>
        <div className="add-product-form">
        <label>Pris:</label>
        <input className={errors.price ? "input-error" : "input-correct" } name="price" type="number" value={price} onChange={e => setPrice(e.target.value)} onBlur={(e) => handleValidation(e, errors, setErrors)}></input>
        <p className={errors.price ? 'error' : 'placeholder'}>{errors.price ? errors.price : 'Placeholder text'}</p>
        </div>
        <div className="add-product-form">
        <label>Beskrivning:</label>
        <input className={errors.description ? "input-error" : "input-correct" } name="description" type="text" value={description} onChange={e => setDescription(e.target.value)} onBlur={(e) => handleValidation(e, errors, setErrors)}></input>
        <p className={errors.description ? 'error' : 'placeholder'}>{errors.description ? errors.description : 'Placeholder text'}</p>
        </div>
        <button disabled= {!updatedProduct.name || !updatedProduct.picture || !updatedProduct.description || !updatedProduct.category || !updatedProduct.price} className="add-btn" onClick={handleEditSave} >Spara</button>
        <button className="add-btn" onClick={() => setIsEdeting(false)}>Avbryt</button>
        </section>
    )
}

export default EditProduct