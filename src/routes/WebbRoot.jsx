import logo from "../assets/rolerblade.svg"
import cart from "../assets/yellowCart.svg"
import searchLogo from "../assets/Search.svg"
import filterIcon from "../assets/filter.svg"
import RenderProducts from "../components/RenderProducts"

const WebbRoot = () => {
    
    
    return (
        <>
        <header className="header"> 
        <section className="logo-name">
            <img className="logo" src={logo} />
            <h2 className="RollingSummer-placement">RollingSummer</h2>
        </section>
        <img className="cart-icon" src={cart} />
        </header>
        <main>
            <div className="filter-bar">
                <img className="filter-bar-logos" src={searchLogo} />
                <select className="dropdown">
                    <option>Alla produkter</option>
                    <option>Rollerblades</option>
                    <option>Skateboards</option>
                    <option>Tillbehör</option>
                </select>
                <img className="filter-bar-logos" src={filterIcon} /> 
            </div> 
            <RenderProducts/>
        </main>
        
        <footer>
        
        
        </footer>
        </>
    )
}

export default WebbRoot