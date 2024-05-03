import { useEffect, useState } from "react"
import { deleteProduct, getProducts } from "../data/crud"
import { useProductStore } from "../data/store"
import "../css/product-layout.css"

import LogInIcon from "../assets/login-icon.png"
import searchLogo from "../assets/Search.svg"
import cross from "../assets/kryss.svg"
import { NavLink } from "react-router-dom"
import AddProduct from "./AddProduct"
import EditProduct from "./EditProduct"
import OrderPopUp from "./OrderPopUp"
import ShowProductInfo from "./ShowProductInfo"


const RenderProducts = () => {
    const [inputValue, setInputValue] = useState("")
    const [showMoreInfo, setShowMoreInfo] = useState(null)
    const [showPopUp, setShowPopUp] = useState(false)
    const [isAdding, setIsAdding] = useState(false)
    const [isEdeting, setIsEdeting] = useState(null)
    const [showSearchInput, setShowSearchInput] = useState(false)
    const {listOfProducts, setListOfProducts, addTocheckoutList,  isLoggedIn, sortProducts} = useProductStore(state => ({
        listOfProducts: state.listOfProducts,
        setListOfProducts: state.setListOfProducts,
        addTocheckoutList: state.addTocheckoutList,
        isLoggedIn: state.isLoggedIn,
        sortProducts: state.sortProducts,
    }))
    
    
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

    
    
    const matchingProductList = listOfProducts.filter(prod => prod.name.toLowerCase().includes(inputValue.toLowerCase()) || prod.category.toLowerCase().includes(inputValue.toLowerCase()))
    
    // console.log("matcingList: ", matchingProductList, " listOfProd:", listOfProducts);
    
    const handelDeleteProduct = async (prod) => {
        try {
            
            await deleteProduct(prod.key)
            const productsFromDb = await getProducts()
            
            setListOfProducts(productsFromDb)
        }catch {
            console.log("något gick fel");
        }
    }
    const handleSearch = () => {
        if(!showSearchInput) {
            setShowSearchInput(true)
        } else {
            setShowSearchInput(false)
        }
    }
    const handleSort = (event) => {
        let sortValue = event.target.value
        sortProducts(sortValue)
    }
    const handlePopUp = () => {
        setShowPopUp(!showPopUp)
        setTimeout(() => {
            setShowPopUp(false)
        }, 1200)
    }
    const handleMoreInfo = (prod) => {
        setShowMoreInfo(prod)
    }
    
    return (
        <>
        <main className="main-product-employee">
        <div className="filter-bar">
        <div className="search-input">
        <img className="filter-bar-logos" src={!showSearchInput ? searchLogo : cross} onClick={() => handleSearch()} />
        {showSearchInput && <input className="search-input" type="text" placeholder="Sök" onChange={(e) => setInputValue(e.target.value)}></input> }
        </div>
        
        {isLoggedIn ? (
        <button className="log-out-btn" onClick={() => useProductStore.setState({ isLoggedIn: false })}>Logga ut</button>
        ) : (
         !showSearchInput && 
        <select onChange={handleSort} className="dropdown">
            <option value="all" >Sort By:</option>
            <option value="descending">Pris fallande</option>
            <option value="ascending">Pris stigande</option>
            <option value="name-a-ö">Namn A-Ö</option>
            <option value="name-ö-a">Namn Ö-A</option>
        </select>
        )} 
        {showPopUp && <OrderPopUp/> }
        </div> 
        {isLoggedIn && <button className="add-product-btn" disabled={isAdding} onClick={() => setIsAdding(true)}>Lägg till produkt</button>}
        <div className="product-card-layout">
        {isAdding && 
            
            <AddProduct setIsAdding={setIsAdding} />
        }
        {matchingProductList.map (p => (
            <section className="product-card" key={p.key} >
                  {showMoreInfo === p && <ShowProductInfo prod={showMoreInfo} setShowMoreInfo={setShowMoreInfo} handlePopUp={handlePopUp} />}
            {isLoggedIn && <
                div className="edit-icons">
                <p onClick={() => handelDeleteProduct(p)}> 🗑️</p>
                <p onClick={() => setIsEdeting(p.key)}>🖊️</p>
                </div>}
                <img className="product-img" key={p.key} src={p.picture} />
                <h2>{p.name}</h2>
                <p className="more-info" onClick={() => handleMoreInfo(p)} >Mer information:</p>
                <p className="p-price">{p.price} Kr</p>
                {!isLoggedIn && <button className="add-to-cart-btn" onClick={() => { addTocheckoutList(p); handlePopUp(); }}>Lägg i kundvagn</button>}
                {isEdeting === p.key && 
                    <EditProduct product = {p} setIsEdeting={setIsEdeting}/> 
                }
               
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
    
    
    
    