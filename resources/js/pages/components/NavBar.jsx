import { Link, router } from "@inertiajs/react";
import React, { use, useEffect } from "react";
import { FaPlus } from "react-icons/fa6";
import { LogIn, LogOut } from "../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import { userData } from "../data/userData";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faArrowDownWideShort,
    faBagShopping,
    faRightFromBracket,
} from "@fortawesome/free-solid-svg-icons";
import { faMoon } from "@fortawesome/free-regular-svg-icons";
export default function NavBar() {
    const token = localStorage.getItem("token");
    const user = useSelector((state) => state.reducer.user);
    const dispatch = useDispatch();
    function logout() {
        router.post("/users/logout", "logout", {
            onSuccess: () => {
                localStorage.removeItem("token");
                dispatch(LogOut());
            },
            onError: (errors) => {
                console.log(errors);
            },
        });
    }
    return (
        <header className="position-sticky top-0 " style={{ zIndex: "999" }}>
            <nav
                className="navbar navbar-dark bg-dark position-sticky top-0"
                style={{ zIndex: "999" }}
            >
                <div className="container">
                    <div className="w-25">
                        <a className="navbar-brand" href="#">
                            <img
                                src="Assets/logo.png"
                                alt="logo"
                                style={{ width: "70px" }}
                                className="rounded-circle"
                            />
                        </a>
                    </div>
                    <div className="w-50 ">
                        <div className="w-75  d-flex justify-content-evenly">
                            <Link
                                className="text-light"
                                style={{ textDecoration: "none" }}
                                href="/"
                            >
                                Home
                            </Link>
                            <Link
                                className="text-light"
                                style={{ textDecoration: "none" }}
                                href="/store"
                            >
                                Store
                            </Link>
                            <Link
                                className="text-light"
                                style={{ textDecoration: "none" }}
                            >
                                Blog
                            </Link>
                            <Link
                                className="text-light"
                                style={{ textDecoration: "none" }}
                            >
                                Contact us
                            </Link>
                        </div>
                    </div>
                    <div className=" text-xs-center">
                        {user && token ? (
                            <div className="d-flex align-items-center">
                                <span
                                    className="text-light "
                                    style={{ fontSize: "0.8rem" }}
                                >
                                    {user.firstname + " " + user.lastname}
                                </span>
                                <button
                                    onClick={logout}
                                    className="text-danger ms-3 btn btn-transparent"
                                >
                                    <FontAwesomeIcon
                                        icon={faRightFromBracket}
                                    />
                                </button>
                            </div>
                        ) : (
                            <div>
                                <Link
                                    href="/users/login"
                                    className="text-danger me-3"
                                >
                                    Log In
                                </Link>
                                <Link
                                    href="/users/register"
                                    className="btn btn-outline-danger"
                                >
                                    Register
                                </Link>
                            </div>
                        )}
                    </div>
                    <div className="text-light">
                        <FontAwesomeIcon icon={faMoon} />
                        <FontAwesomeIcon
                            icon={faBagShopping}
                            className="ms-4"
                        />
                    </div>
                </div>
            </nav>
        </header>
    );
}
