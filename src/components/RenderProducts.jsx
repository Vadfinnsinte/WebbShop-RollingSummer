import { useEffect, useState } from "react"
import { deleteProduct, getProducts } from "../data/crud"
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
   
    useEffect(() => {
        const fetchProducts = async () => {
            try {
                let testVariable = await getProducts()
                setListOfProducts(testVariable)
                console.log("fetchproduct, testV: ",testVariable);
            } catch {
                console.log("något gick fel");
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

    return (
        <>
        <main>
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
        <div className="product-card-layout">
           {isLoggedIn && <button className="add-product-btn">Lägg till produkt</button>}
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