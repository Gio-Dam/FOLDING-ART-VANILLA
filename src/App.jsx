import "./css/App.css";

import { Outlet, RouterProvider, createHashRouter, useRouteError } from "react-router-dom";

import { Footer, Navbar } from "./components";
import { Accueil, Boutique, Contact, ProductPage } from "./pages";

const hashrouter = createHashRouter([
    {
        path: "",
        element: <Root />,
        errorElement: <PageError />,
        children: [
            {
                path: "",
                element: <Accueil />,
            },
            {
                path: "boutique",
                children: [
                    {
                        path: "",
                        element: <Boutique />,
                    },
                    {
                        path: ":folder",
                        children: [
                            {
                                path: ":file",
                                element: <ProductPage />,
                            },
                        ],
                    },
                ],
            },
            {
                path: "contact",
                children: [
                    {
                        path: "",
                        element: <Contact />,
                    },
                ],
            },
        ],
    },
]);

function PageError() {
    console.error(useRouteError());
    return (
        <main>
            <h1>&#x26A0; Une erreur est survenue &#x26A0;</h1>
        </main>
    );
}

function Root() {
    return (
        <>
            <Navbar />
            <Outlet />
            <Footer />
        </>
    );
}

export default function App() {
    return <RouterProvider router={hashrouter} />;
}
