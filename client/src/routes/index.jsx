import { createBrowserRouter } from "react-router-dom"
import { Home } from "../pages/Home"
import { Register } from "../pages/Register"
import { Students } from "../pages/Students"
import { About } from "../pages/About"
import { App } from "../App"
import { PageError } from "../pages/PageError"

export const routes = createBrowserRouter([
    {
        path: "/", 
        element: <App/>,
        errorElement: <PageError/>,
        children: [
            {path: "/", element: <Home/>},
            {path: "/register", element: <Register/>},
            {path: "/students", element: <Students/>},
            {path: "/about", element: <About/>},
        ]
    }
]);