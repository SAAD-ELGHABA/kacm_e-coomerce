import React, { createContext, useEffect, useState } from "react";
import Sidebar from "./Sidebar.jsx";
import Content from "./Content.jsx";
import NavAdmin from "./NavAdmin.jsx";
import "./style.css";
import { usePage } from "@inertiajs/react";
import { useDispatch } from "react-redux";
import { get_users } from "../redux/actions.js";
export const productsShared = createContext();

function index({ name, data, products }) {
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
    const dispatch = useDispatch();
    const { users } = usePage().props;
    useEffect(()=>{
        dispatch(get_users(users.users))
    },[users]);
    

    return (
        <div
            className={`text-light lead px-5 py-5 ${
                mode ? "bg_parent_dark" : "bg_parent_light"
            }  scroll`}
            style={{ height: "100%" }}
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
