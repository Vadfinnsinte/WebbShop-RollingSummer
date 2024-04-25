import { useProductStore } from "../data/store"
import "../css/checkout.css"

const RenderChecout = () => {
 const {checkoutList} = useProductStore(state => ({
    checkoutList: state.checkoutList
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
                <p>{prod.price}</p>
                <p>Antal: </p>

            </section>
        ))}
        
        
        </div>
    )

}

export default RenderChecout