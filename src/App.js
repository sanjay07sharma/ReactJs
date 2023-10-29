import React from "react";
import { Header } from "./components/Header";
import { Body } from "./components/Body";
import { About } from "./components/About"; // Named import
import Contact from "./components/Contact"; // Default import
import Cart from "./components/Cart";
import ErrorPage from "./components/Error";
import RestaurantMenu from "./components/RestrauntMenu";
import { createBrowserRouter, RouterProvider,Outlet } from "react-router-dom";
import { createRoot } from 'react-dom/client';

// RouterProvider is a context provider that provides routing context to all descendants.

/** react router dom provides something called as Outlet 
 * Outlet is a placeholder for the content of the current route.
 * Outlet is a component that renders the content of the current route.
*/

import { Outlet } from "react-router-dom";
const AppLayout = () => {
    return (
        <div>
            <Header/>
            <Outlet/>
        </div>
    )
}

/** We will use createBrowserRouter to create a router object. 
 * createBrowserRouter takes an array of routes as an argument.
 * Each route is an object with the following properties:
 * path: the path of the route
 * element: the element to render when the route matches
 * errorElement: the element to render when the route fails to match
 * This also has something called children property which is an array of routes.
 * This is used to nest routes.
 * and outlet is used to render the content of the current route.
 * outlet component will not be shown in DOM, it will be replaced by the content of the current route.
 */
const appRouter = createBrowserRouter(
        [
            { 
                path: "/",
                element: <AppLayout/>,
                children: [
                    {
                        path: "/",
                        element: <Body/>
                    },
                    {
                        path: "/about",
                        element: <About/>
                    },
                    {
                        path: "/contact",
                        element: <Contact/>
                    },
                    {
                        path: "/cart",
                        element: <Cart/>
                    },
                    {
                        path: "/resInfo/:resId", // this "/:resId" denotes a dynamic route
                        element: <RestaurantMenu/>
                    },
                ],
                errorElement: <ErrorPage/>,
            },
        ]
    )

const root = createRoot(document.getElementById('root'));

// Initally we were rendering the AppLayout directly
// root.render(<AppLayout/>); //we cant render directly

// We will use router provider to provide routing context to all components.
// so change root.render(<AppLayout/>)  --> root.render(<RouterProvider router={appRouter}><AppLayout/></RouterProvider>)
root.render(<RouterProvider router={appRouter}/>);