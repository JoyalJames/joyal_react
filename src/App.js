import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter , Outlet, RouterProvider } from "react-router-dom";
import About from "./components/About";
import Error from "./components/Error"
import ContactUs from "./components/ContactUs";

const AppLayout = ()=>{
    return(
        <div>
            <Header/>
            <Outlet/>
        </div>
    )
}

const appRouter = createBrowserRouter([
  {
    path : '/',
    element : <AppLayout/>,
    children : [
      {
        path : '/',
        element :<Body/>
      },
      {
        path : '/about',
        element : <About/>
      },
      {
        path : '/contactus',
        element : <ContactUs/>
      }
    ],
    errorElement : <Error/>
  },
])
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>);