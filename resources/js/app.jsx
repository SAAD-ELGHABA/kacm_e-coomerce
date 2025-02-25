// import "../css/app.css";
import "./bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { createInertiaApp } from "@inertiajs/react";
import { resolvePageComponent } from "laravel-vite-plugin/inertia-helpers";
import { createRoot } from "react-dom/client";
import store from "./pages/redux/store.js";
import { Provider } from "react-redux";
import { useEffect } from "react";
import axios from "axios";
import { userData } from "./pages/data/userData";
const appName = import.meta.env.VITE_APP_NAME || "Laravel";

createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    resolve: (name) =>
        resolvePageComponent(
            `./Pages/${name}.jsx`,
            import.meta.glob("./Pages/**/*.jsx")
        ),
    setup({ el, App, props }) {
        const root = createRoot(el);
        root.render(
            <Provider store={store}>
                <App {...props} />
            </Provider>
    );
    },
    progress: {
        color: "#4B5563",
    },
});
