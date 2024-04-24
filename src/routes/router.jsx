import { createHashRouter } from "react-router-dom";
import WebbRoot from "./WebbRoot.jsx";
import RenderChecout from "../components/RenderCheckout.jsx";
import RenderProducts from "../components/RenderProducts.jsx";

const router = createHashRouter([
    {
        path: "/",
        element: <WebbRoot/>,
        children: [
            {
            path: "/varukorg",
            element: <RenderChecout/>
        },
        {
            path: "/login",
            element: ""
        },
        {
            path: "/produktsida-admin",
            element: ""
        },
        {
            path: "/produkt",
            element: ""
        },
        {
            path: "/",
            element: <RenderProducts/>
        }


    ]
    }
])

export {router}