import { useEffect, useState } from "react"
import { addProduct, deleteProduct, getProducts } from "../data/crud"
import { useProductStore } from "../data/store"
import "../css/product-layout.css"
import LogInIcon from "../assets/login-icon.png"
import searchLogo from "../assets/Search.svg"
import filterIcon from "../assets/filter.svg"
import { NavLink } from "react-router-dom"

const RenderProducts = () => {
    // const [showSearchInput, setShowSearchInput] = useState(false)
    const {listOfProducts, setListOfProducts, addTocheckoutList,  isLoggedIn} = useProductStore(state => ({
        listOfProducts: state.listOfProducts,
        setListOfProducts: state.setListOfProducts,
        addTocheckoutList: state.addTocheckoutList,
        isLoggedIn: state.isLoggedIn
    }))
    const [isAdding, setIsAdding] = useState(false)
    const [name, setName] = useState("")
    const [picture, setPicture] = useState("")
    const [description, setDescription] = useState("")
    const [price, setPrice] = useState("")
    const [category, setCategory] = useState("")
    
    useEffect(() => {
        const fetchProducts = async () => {
            try {
                let testVariable = await getProducts()
                setListOfProducts(testVariable)
                
            } catch {
              
            }
        }
        fetchProducts()
    }, [])

 // TODO: Lääg till function för filtrering. 

 const handelDeleteProduct = async (prod) => {
    try {
        
        await deleteProduct(prod.key)
        const productsFromDb = await getProducts()

       setListOfProducts(productsFromDb)
    }catch {
        console.log("något gick fel");
    }
 }
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
        <>
        <main>
        <div className="product-card-layout">
           {isLoggedIn && <button className="add-product-btn" disabled={isAdding} onClick={() => setIsAdding(true)}>Lägg till produkt</button>}
           {isAdding && 
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
           }
           {listOfProducts.map (p => (
            <section className="product-card" key={p.key} >
                {isLoggedIn && <
                    div className="edit-icons">
                        <p onClick={() => handelDeleteProduct(p)}> 🗑️</p>
                        <p>🖊️</p>
                     </div>}
             <img className="product-img" key={p.key} src={p.picture} />
                <h2>{p.name}</h2>
                <p>{p.price} kr</p>

                <button className="add-to-cart-btn" onClick={() => addTocheckoutList(p)}>Lägg i kundvagn</button>
            </section>
           ))}
        </div>
        </main>
        <footer className="footer">
         <NavLink to="/login">
            <img className="login-icon" src={LogInIcon}/>
            </NavLink> 
                
        </footer>
        </>
    )
}

export default RenderProducts



        {/* <div className="filter-bar">
            <div className="search-input">
                {showSearchInput ? <input className="search-input" type="text"></input> : <img className="filter-bar-logos" src={searchLogo} onClick={() => setShowSearchInput(true)} />}
            </div>
        <select className="dropdown" onChange={filterProducts(event.target.value)}>
            <option>Alla produkter</option>
            <option>Rollerblades</option>
            <option>Skateboards</option>
            <option>Tillbehör</option>
        </select>
        <img className="filter-bar-logos" src={filterIcon} /> 
    </div>  */}