import { useProductStore } from "../data/store"
import "../css/checkout.css"
import { useEffect } from "react"
import arrow from "../assets/arrow.svg"
import { NavLink } from "react-router-dom"

const RenderChecout = () => {
    const {checkoutList,chekoutTotal, emptyCheckout, removeFromCheckout, addToCheckoutTotal, addToCheckoutUnits, deleteFromCheckout} = useProductStore(state => ({
        checkoutList: state.checkoutList,
        chekoutTotal: state.chekoutTotal,
        emptyCheckout: state.emptyCheckout,
        removeFromCheckout: state.removeFromCheckout,
        addToCheckoutTotal: state.addToCheckoutTotal,
        addToCheckoutUnits: state.addToCheckoutUnits,
        deleteFromCheckout: state.deleteFromCheckout
    }))
    const checkoutLength = checkoutList.length

    
    useEffect(() => {
        addToCheckoutTotal()
    }, [checkoutList])

    return (
        <main className="main-layout">
        <NavLink to={"/"}>
            <img className="arrow-icon" src={arrow}/>
            
            </NavLink>
        <div className="checkout-layout">
        <h1 className="checkout-h1">Varukorgen</h1>
        { checkoutLength < 1 ? <p className="emnty-cart">WOW, such empty!</p> :
    checkoutList.map((prod) => (
        <section className="checkout-card" key={prod.key}>
        <img className="checkout-img" src={prod.picture} />
        <h4>{prod.name}</h4>
        <p>{prod.price} Kr</p>
        <div className="change-units">
        <p className="units">Antal: {prod.quantity} </p>
        <div className="units-icons">
        <p onClick={ () => removeFromCheckout(prod.key)} >➖</p>
        <p onClick={() =>  addToCheckoutUnits(prod.key)} >➕</p>
        </div>
        </div>
        <button className="remove-btn" onClick={() => deleteFromCheckout(prod.key)} >Ta bort</button>
        
        </section>
    ))
}
    <section className="checkout-total-section">
    <p>Totalt att betala: {chekoutTotal} Kr</p>
    <button disabled={checkoutLength < 1} className="checkout-buy-btn" onClick={emptyCheckout}>Slutför köp</button>
    
    </section>
    
    
    
    </div>
        </main>
)

}

export default RenderChecout