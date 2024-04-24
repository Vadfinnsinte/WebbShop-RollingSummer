import { Outlet, NavLink } from "react-router-dom"
import logo from "../assets/rolerblade.svg"
import cart from "../assets/yellowCart.svg"
import RenderProducts from "../components/RenderProducts"

const WebbRoot = () => {
    
    
    return (
        <>
        <header className="header"> 
        <section className="logo-name">
            <img className="logo" src={logo} />
            <h2 className="RollingSummer-placement">RollingSummer</h2>
        </section>
         {/* <img className="cart-icon" src={cart} /> */}
         <NavLink to="/varukorg" className="cart-icon-navlink" >
            <img className="cart-icon"  src={cart} />
        </NavLink> 
        </header>
    
         <Outlet/>
        
        
        <footer>
        
        
        </footer>
        </>
    )
}

export default WebbRoot