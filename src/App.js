import React from "react";
import ReactDOM  from "react-dom";
import { Header } from "./components/Header";
import { Body } from "./components/Body";
import {About} from "./components/About";
import {Contact} from "./components/Contact";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// RouterProvider is a context provider that provides routing context to all descendants.

const AppLayout = () => {
    return (
    <div className="app">
        <Header/>
        <Body/>
    </div>
    )
}

const appRouter = createBrowserRouter(
    [
        { path: "/", element: <AppLayout/> },
        { path: "/about", element: <About/> },
        {path: "/contact", element: <Contact/>},
    //     { path: "/contact", element: <Contact/> },
    //     { path: "*", element: <NotFound/> },
    ]
    )

const root = ReactDOM.createRoot(document.getElementById('root'));


// Initally we were rendering the AppLayout directly
root.render(<AppLayout/>); //we cant render directly

// We will use router provider to provide routing context to all components.
// so change root.render(<AppLayout/>)  --> root.render(<RouterProvider router={appRouter}><AppLayout/></RouterProvider>)