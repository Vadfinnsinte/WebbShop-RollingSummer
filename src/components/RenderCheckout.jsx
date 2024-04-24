import { useProductStore } from "../data/store"

const RenderChecout = () => {
 const {checkoutTotal} = useProductStore(checkoutTotal)
    return (
        <>
        <h1>Varukorgen</h1>
        <p>WOW, such empty</p>
        <p>total: {checkoutTotal} </p>
        </>
    )

}

export default RenderChecout