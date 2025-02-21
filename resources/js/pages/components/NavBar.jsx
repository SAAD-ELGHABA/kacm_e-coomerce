import { Link } from "@inertiajs/react";
import React from "react";
import { FaPlus } from "react-icons/fa6";
// import logo from '/Assets/logo.png';
export default function NavBar() {
    return (
        <header>
            <nav
                className="navbar navbar-dark bg-dark position-sticky top-0"
                style={{ zIndex: "999" }}
            >
                <div className="container">
                    <div className="w-25">
                        <a className="navbar-brand" href="#">
                            {/* <h1 className="text-danger">Title</h1> */}
                            <img
                                src="Assets/logo.jpg"
                                alt="logo"
                                style={{ width: "70px" }}
                                className="rounded-circle"
                            />
                        </a>
                    </div>
                    <div className=" text-xs-center">
                        <Link href="/users/login" className="text-danger me-3">
                            Log In
                        </Link>
                        <Link
                            href="/users/register"
                            className="btn btn-outline-danger"
                        >
                            Register
                        </Link>
                    </div>
                </div>
            </nav>
        </header>
    );
}
