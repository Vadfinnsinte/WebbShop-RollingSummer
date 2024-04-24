import { createHashRouter } from "react-router-dom";
import WebbRoot from "./WebbRoot.jsx";


const router = createHashRouter([
    {
        path: "/",
        element: <WebbRoot/>,
        children: [
            {
            path: "/varukorg",
            element: ""
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
        }

    ]
    }
])

export {router}