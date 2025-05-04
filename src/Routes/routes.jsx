import { createBrowserRouter } from "react-router";
import Home_layouts from "../Layouts/Home_layouts";
import Home from "../Pages/Home";
import CatagoryNews from "../Pages/CatagoryNews";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import AuthLayout from "../Layouts/AuthLayout";
import NewsDetails from "../Pages/NewsDetails";

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
        element:<AuthLayout></AuthLayout>,
        children:[
            {
                path:"/auth/login",
                element:<Login></Login>
            },
            {
                path:"/auth/register",
                element:<Register></Register>
            }
        ]
    },
    {
        path:"/news-details/:id",
        element: <NewsDetails></NewsDetails>,
        loader:()=> fetch("/news.json")
    },
    {
        path:"/*",
        element: <h2>error404</h2>
    },
])

export default router;