import { useProductStore } from "../data/store"
import "../css/checkout.css"

const RenderChecout = () => {
    const {checkoutList,chekoutTotal, emtyCheckout} = useProductStore(state => ({
        checkoutList: state.checkoutList,
        chekoutTotal: state.chekoutTotal,
        emtyCheckout: state.emtyCheckout
    }))
    
    
    
    console.log(checkoutList);
    return (
        <div className="checkout-layout">
        <h1>Varukorgen</h1>
        {/* <p>WOW, such empty!</p>
    <p>total: </p> */}
    {checkoutList.map((prod) => (
        <section className="checkout-card" key={prod.key}>
        <img className="checkout-img" src={prod.picture} />
        <h4>{prod.name}</h4>
        <p>{prod.price} Kr</p>
        <p>Antal: {prod.quantity} </p>
        {/* //TODO: tabortknapp */}
        </section>
    ))}
    <section className="checkout-total-section">
    <p>Totalt att betala: {chekoutTotal} Kr</p>
    <button className="checkout-buy-btn" onClick={emtyCheckout}>Slutför köp</button>
    
    </section>
    
    
    
    </div>
)

}

export default RenderChecout