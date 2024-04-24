import { createHashRouter } from "react-router-dom";
import WebbRoot from "./WebbRoot.jsx";


const router = createHashRouter([
    {
        path: "/",
        element: <WebbRoot/>
    }
])

export {router}