// import "../css/app.css";
import "./bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { createInertiaApp } from "@inertiajs/react";
import { resolvePageComponent } from "laravel-vite-plugin/inertia-helpers";
import { createRoot } from "react-dom/client";
import store from "./pages/redux/store.js";
import { Provider, useDispatch } from "react-redux";
import { LogIn, Products } from "./pages/redux/actions";
import React from "react";
const appName = import.meta.env.VITE_APP_NAME || "Laravel";

const InitializeUser = ({ children, initialUser ,products}) => {
    const dispatch = useDispatch();

    React.useEffect(() => {
        if (initialUser) {
            dispatch(LogIn(initialUser));
            dispatch(Products(products));
        }
    }, [dispatch, initialUser]);

    return children;
};

createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    resolve: (name) =>
        resolvePageComponent(
            `./Pages/${name}.jsx`,
            import.meta.glob("./Pages/**/*.jsx")
        ),
    setup({ el, App, props }) {
        const root = createRoot(el);
        const user = props.initialPage.props.auth.user;
        const products = props.initialPage.props.products;
        root.render(
            <Provider store={store}>
                <InitializeUser initialUser={user} products={products}>
                    <App {...props} />
                </InitializeUser>
            </Provider>
        );
    },
    progress: {
        color: "#4B5563",
    },
});
