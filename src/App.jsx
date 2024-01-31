import "./css/App.css";

import { Outlet, RouterProvider, createHashRouter, useRouteError } from "react-router-dom";

import { Navbar } from "./components";
import { Accueil, Boutique, Contact } from "./pages";

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
        </>
    );
}

export default function App() {
    return <RouterProvider router={hashrouter} />;
}
