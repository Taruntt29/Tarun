import "./App.css";
import { ThemeProvider } from "styled-components";
import { darkTheme } from "./theme/theme";
import HomePage from "./pages/HomePage";
import {
    RouterProvider,
    createBrowserRouter,
    useNavigate,
} from "react-router-dom";
import { useEffect } from "react";

const router = createBrowserRouter([
    {
        path: "/",
        element: <HomePage />,
    },
    { path: "*", element: <PageNotFound /> },
]);

function PageNotFound() {
    const navigate = useNavigate();
    useEffect(() => {
        navigate("/");
    }, [navigate]);
    return null;
}

function App() {
    return (
        <ThemeProvider theme={darkTheme}>
            <RouterProvider router={router} />
        </ThemeProvider>
    );
}

export default App;
