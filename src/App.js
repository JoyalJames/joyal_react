import React, { lazy,Suspense } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter , Outlet, RouterProvider } from "react-router-dom";
// import About from "./components/About";
import Error from "./components/Error"
import ContactUs from "./components/ContactUs";
import RestroMenu from "./components/RestroMenu";


const Grocery = lazy(()=> import("./components/Grocery"));
const About = lazy(()=>import("./components/About"));
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
        element : <Suspense fallback={<h1 className="about">Loading About Page....</h1>}><About/></Suspense>
      },
      {
        path : '/contactus',
        element : <ContactUs/>
      },
      {
        path : '/restaurant/:resId/',
        element : <RestroMenu/>
      },
      {
        path : '/grocery',
        element : <Suspense fallback={<h1 className="about">Loadingggg.....</h1>}><Grocery/></Suspense>
      }
    ],
    errorElement : <Error/>
  },
])
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>);