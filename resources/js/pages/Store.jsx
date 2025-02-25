import React, { useContext, useEffect, useState } from "react";
import NavBar from "./components/NavBar";
import Slider from "./components/Slider.jsx";
import {
    FaStar,
    FaGear,
    FaPlus,
    FaCartPlus,
    FaHeartPulse,
} from "react-icons/fa6";
import { productsShared } from "./Admin/index";
import { userData } from "./data/userData";
import { useDispatch, useSelector } from "react-redux";
import { LogIn, Products } from "./redux/actions";
import { productsData } from "./data/productsData";

import "./components/styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faHeart, faStar } from "@fortawesome/free-regular-svg-icons";
import { faArrowDownWideShort, faBagShopping } from "@fortawesome/free-solid-svg-icons";
import { Brightness1 } from "@mui/icons-material";
import SideStore from "./components/SideStore";
function Store({
    isAdmin = false,
    handleStoreSettings,
    children,
    handleaddProduct,
}) {
    const dispatch = useDispatch();
    const token = localStorage.getItem("token");
    useEffect(() => {
        const promise = async () => {
            const res = await userData();
            if (res) {
                dispatch(LogIn(res));
            } else {
                console.log("error");
            }
        };
        const promiseproducts = async () => {
            const res = await productsData();
            if (res) {
                dispatch(Products(res));
            } else {
                console.log("error");
            }
        };
        promiseproducts();
        promise();
    }, [token]);
    const products = useSelector((state) => state.Products);
    const [show, setshow] = useState({
        state: false,
        index: null,
    });
    const [showaddproduct, setshowaddproduct] = useState(false);
    const handleShow = (index) => {
        setshow({ ...show, state: true, index: index });
    };
    return (
        <div className="w-100 ">
            {isAdmin && (
                <div>
                    <div
                        className="btn bg-dark bg-gradient rounded border-secondary position-fixed bottom-50 end-0 me-3 d-flex justify-content-between align-items-center gap-2"
                        style={{ cursor: "pointer", zIndex: "99" }}
                        onMouseEnter={() => setshowaddproduct(true)}
                        onMouseLeave={() => setshowaddproduct(false)}
                    >
                        <div
                            style={{
                                width: showaddproduct ? "auto" : "0px",
                                height: showaddproduct ? "auto" : "0px",
                                overflow: "hidden",
                                transition: "width height 3s ease-in-out",
                            }}
                            onClick={() => handleaddProduct(true)}
                            className="text-secondary"
                            id="hoverText"
                        >
                            add a new product
                        </div>
                        <FaPlus className="fs-4" />
                    </div>
                    {children}
                </div>
            )}
            <NavBar />
            <div className="row w-100 mx-auto">
                <section className="col-2 border-end  position-relative bg-dark text-light">
                    <div
                        className="left-0 top-5 col-2 "
                        style={{
                            position: "fixed",
                            zIndex: "99",
                            height: "100vh",
                        }}
                    >
                        <SideStore />
                    </div>
                </section>
                <section className="col">
                    <div
                        style={{ height: "300px" }}
                        className="align-items-center d-flex position-relative"
                    >
                        <div className="row border-bottom ">
                            <div className="col ms-5">
                                <h1>Title</h1>
                                <p className="w-75">
                                    Lorem, ipsum dolor sit amet consectetur
                                    adipisicing elit. Quidem similique minus,
                                    repellendus commodi ea beatae inventore?
                                    Eaque blanditiis totam qui?
                                </p>
                                <button className="btn btn-danger">
                                    check out
                                </button>
                            </div>
                            <div className="col d-flex align-items-center">
                                <Slider />
                            </div>
                        </div>
                        {isAdmin && (
                            <div className="position-absolute top-0 end-0 mt-4">
                                <FaGear
                                    style={{ cursor: "pointer" }}
                                    onClick={() =>
                                        handleStoreSettings((prev) => !prev)
                                    }
                                />
                            </div>
                        )}
                    </div>
                    <div>
                        {products && products.length > 0 ? (
                            <div className="row w-100">
                                <div className="d-flex justify-content-between align-items-center">
                                    <h4 className="ps-3 text-dark">All The Products</h4>
                                    <div>
                                        <button className="btn btn-transparent text-dark">
                                            filter 
                                            <FontAwesomeIcon icon={faArrowDownWideShort} className="ms-1"/>
                                        </button>
                                    </div>
                                </div>
                                {products.map((product, index) => (
                                    <div
                                        key={index}
                                        className="col-3 mx-4.5 product position-relative"
                                        onMouseEnter={() => handleShow(index)}
                                        onMouseLeave={() =>
                                            setshow({
                                                ...show,
                                                state: false,
                                                index: null,
                                            })
                                        }
                                    >
                                        <img
                                            src="Assets/logo.png"
                                            alt=""
                                            className="w-100"
                                            style={
                                                show.state &&
                                                show.index == index
                                                    ? {
                                                          filter: "brightness(30%)",
                                                      }
                                                    : {
                                                          filter: "brightness(100%)",
                                                      }
                                            }
                                        />
                                        {show.state && show.index == index && (
                                            <div
                                                className="show text-white d-flex justify-content-center align-items-center"
                                                style={{
                                                    zIndex: "10",
                                                    position: "absolute",
                                                    width: "100%",
                                                    height: "100%",
                                                    top: "0",
                                                    right: "0",
                                                    filter: "Brightness(100%)",
                                                }}
                                            >
                                                <FontAwesomeIcon
                                                    icon={faHeart}
                                                    className="fs-5"
                                                    style={{
                                                        cursor: "pointer",
                                                    }}
                                                />
                                                <FontAwesomeIcon
                                                    icon={faBagShopping}
                                                    className="fs-5 ms-2"
                                                    style={{
                                                        cursor: "pointer",
                                                    }}
                                                />
                                                <FontAwesomeIcon
                                                    icon={faEye}
                                                    className="fs-5 ms-2"
                                                    style={{
                                                        cursor: "pointer",
                                                    }}
                                                />
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>
                        ) : (
                            <div className="d-flex justify-content-center py-3">
                                <img
                                    src="Assets/spinner.gif"
                                    alt="loading..."
                                />
                            </div>
                        )}
                    </div>
                </section>
            </div>
        </div>
    );
}

export default Store;
