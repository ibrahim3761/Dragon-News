import { createBrowserRouter } from "react-router";
import Home_layouts from "../Layouts/Home_layouts";
import Home from "../Pages/Home";
import CatagoryNews from "../Pages/CatagoryNews";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home_layouts></Home_layouts>,
        children:[
            {
                path:"",
                element:<Home></Home>
            },
            {
                path:"/category/:id",
                element:<CatagoryNews></CatagoryNews>,
                loader: ()=> fetch("/news.json")
            },
        ]
    },
    {
        path:"/auth",
        element: <h2>This is auth</h2>
    },
    {
        path:"/news",
        element: <h2>This is News</h2>
    },
    {
        path:"/*",
        element: <h2>error404</h2>
    },
])

export default router;