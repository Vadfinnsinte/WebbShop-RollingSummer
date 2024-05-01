import { useProductStore } from "../data/store"
import "../css/checkout.css"
import { useEffect } from "react"

const RenderChecout = () => {
    const {checkoutList,chekoutTotal, emptyCheckout, removeFromCheckout, addToCheckoutTotal, addToCheckoutUnits} = useProductStore(state => ({
        checkoutList: state.checkoutList,
        chekoutTotal: state.chekoutTotal,
        emptyCheckout: state.emptyCheckout,
        removeFromCheckout: state.removeFromCheckout,
        addToCheckoutTotal: state.addToCheckoutTotal,
        addToCheckoutUnits: state.addToCheckoutUnits

    }))
    
    useEffect(() => {
        addToCheckoutTotal()
    }, [checkoutList])

    return (
        <div className="checkout-layout">
        <h1>Varukorgen</h1>
        {/* <p>WOW, such empty!</p>
     */}
    {checkoutList.map((prod) => (
        <section className="checkout-card" key={prod.key}>
             <img className="checkout-img" src={prod.picture} />
             <h4>{prod.name}</h4>
             <p>{prod.price} Kr</p>
         <div className="change-units">
            <p className="units">Antal: {prod.quantity} </p>
             <div className="units-icons">
                  <p onClick={ () => removeFromCheckout(prod.key)}  >➖</p>
                  <p onClick={() =>  addToCheckoutUnits(prod.key)} >➕</p>
        
             </div>
        </div>
        {/* //TODO: tabortknapp */}
        </section>
    ))}
    <section className="checkout-total-section">
    <p>Totalt att betala: {chekoutTotal} Kr</p>
    <button className="checkout-buy-btn" onClick={emptyCheckout}>Slutför köp</button>
    
    </section>
    
    
    
    </div>
)

}

export default RenderChecout