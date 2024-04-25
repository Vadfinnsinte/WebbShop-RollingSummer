import { useProductStore } from "../data/store"
import "../css/checkout.css"

const RenderChecout = () => {
 const {checkoutList,chekoutTotal} = useProductStore(state => ({
    checkoutList: state.checkoutList,
    chekoutTotal: state.chekoutTotal
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

            </section>
        ))}
        <div>
            <p>Totalt att betala: {chekoutTotal}che</p>
        </div>
        
        
        </div>
    )

}

export default RenderChecout