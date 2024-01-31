import "./css/App.css";

import { Outlet, RouterProvider, createHashRouter, useRouteError } from "react-router-dom";

import { Accueil } from "./pages";

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
        ],
    },
]);

function PageError() {
    const error = useRouteError();
    console.log(error);
    return (
        <>
            <main>
                <h1>&#x26A0; Une erreur est survenue &#x26A0;</h1>
            </main>
        </>
    );
}

function Root() {
    return (
        <>
            <Outlet />
        </>
    );
}

export default function App() {
    return <RouterProvider router={hashrouter} />;
}
