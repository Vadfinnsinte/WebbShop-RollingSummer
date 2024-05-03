import { Outlet, NavLink } from "react-router-dom"
import logo from "../assets/rolerblade.svg"
import cart from "../assets/yellowCart.svg"

import RenderProducts from "../components/RenderProducts"
import { useProductStore } from "../data/store"

const WebbRoot = () => {
    const { addToCheckoutTotal} = useProductStore(state => ({
        addToCheckoutTotal: state.addToCheckoutTotal
    }))
    
    return (
        <>
        <header className="header"> 
            <NavLink className="navlink" to="/">
        <section className="logo-name">
            <img className="logo" src={logo} />
            <h2 className="RollingSummer-placement">RollingSummer</h2>
        </section>
            </NavLink>
         {/* <img className="cart-icon" src={cart} /> */}
         <NavLink to="/varukorg" className="cart-icon-navlink" >
            <img className="cart-icon" src={cart} onClick={addToCheckoutTotal}/>
        </NavLink> 
        </header>
    
         <Outlet/>
        
        

        </>
    )
}

export default WebbRoot