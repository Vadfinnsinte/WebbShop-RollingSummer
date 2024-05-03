import close from "../assets/kryss.svg"
import "../css/more-info.css"
import { useProductStore } from "../data/store"

const ShowProductInfo  =( {prod, setShowMoreInfo, handlePopUp}) => {

const addTocheckoutList = useProductStore(state => state.addTocheckoutList)
    return ( 
        <section className="product-info">
           <img className="close-icon" onClick={() => setShowMoreInfo(null)} src={close} />  
        {/* {renderChosenProduct()} */}
        <img className="more-info-picture" src={prod.picture} />
                <h1>{prod.name}</h1>
                <p>{prod.description}</p>
                <p>{prod.price} kr</p>
                <p className="prod-nr">Produkt nr: {prod.key}</p>
                <button onClick={() => { addTocheckoutList(prod); handlePopUp(); }}>Lägg i kundvagn</button>

        </section>
    )
}

export default ShowProductInfo