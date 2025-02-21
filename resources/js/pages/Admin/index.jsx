import React, { createContext, useState } from "react";
import Sidebar from "./Sidebar.jsx";
import Content from "./Content.jsx";
import NavAdmin from "./NavAdmin.jsx";
import "./style.css";
export const productsShared = createContext();

function index({ name, data, products }) {
    console.log(products);
    const [mode, setMode] = useState(true);
    const [component, setComponent] = useState("Dashboard1");
    const handleMode = (mode) => {
        setMode(mode);
    };
    function handlecomponent(component) {
        setComponent(component);
    }
    const [togglesidebar, settogglesidebar] = useState(false);
    function handleSidebar(toggle) {
        settogglesidebar(toggle);
    }
    return (
        <div
            className={`text-light lead px-5 py-5 ${
                mode ? "bg_parent_dark" : "bg_parent_light"
            }  scroll`}
            style={{ height: "100vh" }}
        >
            <NavAdmin handleMode={handleMode} />
            <div
                className="row  d-flex justify-content-between"
                style={{ transition: "width 0.3s ease-in-out" }}
            >
                <div
                    className={`${togglesidebar ? "col-1" : "col-2"}`}
                    style={{
                        zIndex: "99",
                        transition: "width 0.3s ease-in-out",
                    }}
                >
                    <Sidebar
                        style={`position-fixed ${
                            mode
                                ? "bg_element_dark"
                                : "bg-light text-dark border-white "
                        } border rounded border-secondary`}
                        handlecomponent={handlecomponent}
                        handleSidebar={handleSidebar}
                        togglesidebar={togglesidebar}
                    />
                </div>
                <productsShared.Provider value={{products}}>
                    <Content
                        style={`${
                            togglesidebar ? "col-11" : "col-10"
                        } bg_element_dark ${
                            mode
                                ? "bg_element_dark"
                                : "bg-light text-dark border border-white"
                        } border border-secondary fs-6`}
                        component={component}
                        dataElements={data}
                        products={products}
                    />
                </productsShared.Provider>
            </div>
        </div>
    );
}
// index.layout = page => <Sidebar children={page}/>
export default index;
