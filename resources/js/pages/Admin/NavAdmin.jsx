import { faRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "@inertiajs/react";
import React, { useState } from "react";
import { FaMoon, FaSun } from "react-icons/fa";
import { useSelector } from "react-redux";
function NavAdmin({ handleMode }) {
    const [switchMode, setSwitchMode] = useState(true);
    function handleSitchMode(mode) {
        setSwitchMode(!switchMode);
        handleMode(!switchMode);
    }
    const adminuser = useSelector((state) => state.reducer.user);
    return (
        <div>
            <header
                className={`pb-2 ${!switchMode ? "text-dark" : "text-light"}`}
            >
                <nav className="row">
                    <div className="col-6 text-danger">
                        Admin Dashboard :{" "}
                        {adminuser && (
                            <strong>
                                {adminuser.firstname + " " + adminuser.lastname}
                            </strong>
                        )}
                    </div>
                    <div className="col-6 text-end">
                        <ul className="list-unstyled">
                            <li
                                className="d-inline px-1"
                                onClick={handleSitchMode}
                                style={{ cursor: "pointer" }}
                            >
                                {switchMode ? (
                                    <FaSun />
                                ) : (
                                    <FaMoon className="text-dark" />
                                )}
                            </li>
                            <Link
                                href="/Admin/logout"
                                className="text-danger ms-3 btn btn-transparent"
                            >
                                <FontAwesomeIcon icon={faRightFromBracket} />
                            </Link>
                            <li></li>
                        </ul>
                    </div>
                </nav>
            </header>
        </div>
    );
}

export default NavAdmin;
