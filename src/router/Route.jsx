import { createBrowserRouter } from "react-router-dom";
import Home from "../home/Home";
 
import Main from "../layout/Main";
 

import ErrorPage from "./ErrorPage";
 


export const router = createBrowserRouter([
    {
        path: "/",
        element: <Home></Home>,
        errorElement: <ErrorPage />
    }, 

    {
        path: "dashboard",
        element: <Main></Main>,
       
    }
])