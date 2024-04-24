import { useEffect } from "react"
import { getProducts } from "../data/crud"
import { useProductStore } from "../data/store"
import "../css/product-layout.css"

const RenderProducts = () => {
    const {listOfProducts, setListOfProducts} = useProductStore(state => ({
        listOfProducts: state.listOfProducts,
        setListOfProducts: state.setListOfProducts
    }))

    // useEffect(() => {
        const fetchProducts = async () => {
            setListOfProducts(await getProducts())
        }
        // fetchProducts()
    // }, [])


    return (
        <div className="product-card-layout">
            <button onClick={fetchProducts}>TempButton</button>
           {listOfProducts.map (p => (
            <section className="product-card" key={p.key} >
             <img className="product-img" key={p.key} src={p.picture} />
                <h2>{p.name}</h2>
            </section>
           ))}
        </div>
    )
}

export default RenderProducts