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
import {
    faArrowDownWideShort,
    faBagShopping,
    faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
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
    const user = useSelector((state) => state.reducer.user);
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
                            <div className="row w-100 my-5">
                                <div className="row d-flex justify-content-between align-items-center py-3">
                                    <div className="col-3">
                                        <h4 className="ps-3 text-dark">
                                            All The Products
                                        </h4>
                                    </div>
                                    <div className="col-6 d-flex justify-content-center position-relative">
                                        <input
                                            type="text"
                                            name=""
                                            id=""
                                            placeholder="tap to search for products "
                                            className="w-100 form-control "
                                        />
                                        <FontAwesomeIcon
                                            icon={faMagnifyingGlass}
                                            className="position-absolute "
                                            style={{
                                                top: "10px",
                                                right: "30px",
                                                cursor: "none",
                                            }}
                                        />
                                    </div>
                                    <div className="col-3 d-flex justify-content-end">
                                        <button className="btn btn-transparent text-dark">
                                            filter
                                            <FontAwesomeIcon
                                                icon={faArrowDownWideShort}
                                                className="ms-1"
                                            />
                                        </button>
                                    </div>
                                </div>
                                {products.map((product, index) => (
                                    <div className="col-3 mx-4.5">
                                        <div
                                            key={index}
                                            className=" product position-relative"
                                            onMouseEnter={() =>
                                                handleShow(index)
                                            }
                                            onMouseLeave={() =>
                                                setshow({
                                                    ...show,
                                                    state: false,
                                                    index: null,
                                                })
                                            }
                                        >
                                            <img
                                                src={`/storage/${product.imageUrl}`}
                                                alt="product-image"
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
                                            {show.state &&
                                                show.index == index && (
                                                    <div
                                                        className="show text-white d-flex justify-content-center align-items-center"
                                                        style={{
                                                            zIndex: "10",
                                                            position:
                                                                "absolute",
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
                                        <div >
                                            <h5>{product.title}</h5>
                                            <div className="d-flex align-items-start">
                                                <h6 className="">
                                                    {product.current_price} ${" "}
                                                </h6>
                                                <s className="text-danger ms-1" style={{fontSize:'12px'}}>
                                                    {product.prev_price}
                                                </s>{" "}
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        ) : (
                            <div
                                className="d-flex justify-content-center py-3 "
                                style={{ height: "50vh" }}
                            >
                                <img
                                    src="Assets/spinner.gif"
                                    alt="loading..."
                                    style={{ width: "20px", height: "20px" }}
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
