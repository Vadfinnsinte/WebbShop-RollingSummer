import { createHashRouter } from "react-router-dom";
import WebbRoot from "./WebbRoot.jsx";
import RenderChecout from "../components/RenderCheckout.jsx";
import RenderProducts from "../components/RenderProducts.jsx";
import LogIn from "../components/LogIn.jsx";

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
            element: <LogIn/>
        },
        {
            path: "/produktsida-admin",
            element: ""
        }, //TODO, tabort
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