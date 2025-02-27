import React, { useState } from "react";
import {
    FaPenToSquare,
    FaTrash,
    FaEye,
    FaEllipsisVertical,
} from "react-icons/fa6";
import AddProduct from "../Element/AddProduct";
import { useSelector } from "react-redux";
import {
    faArrowDownWideShort,
    faMagnifyingGlass,
    faUserMinus,
    faUserPlus,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import AddUser from "../Element/AddUser";
function Users() {
    const [toggleAddUser, setToggleAddUser] = useState(false);
    const users = useSelector((state) => state.Users);

    return (
        <div className="position-relative">
            <div className="row d-flex justify-content-between align-items-center py-3">
                <div className="col-3">
                    <h4 className="ps-3 text-dark">All The Users</h4>
                </div>
                <div className="col-6 d-flex justify-content-center position-relative">
                    <input
                        type="text"
                        name=""
                        id=""
                        placeholder="tap to search for users "
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
                        <FontAwesomeIcon
                            icon={faArrowDownWideShort}
                            className="ms-1"
                        />
                    </button>
                    <button
                        className="btn btn-transparent text-dark"
                        onClick={() => setToggleAddUser((toggle) => !toggle)}
                    >
                        {toggleAddUser ? (
                            <FontAwesomeIcon icon={faUserMinus} />
                        ) : (
                            <FontAwesomeIcon icon={faUserPlus} />
                        )}
                    </button>
                </div>
            </div>
            {toggleAddUser && <AddUser></AddUser>}
            <table
                className="table table-striped table-hover text-center"
                style={{ fontSize: "15px" }}
            >
                <thead>
                    <tr className="position-sticky top-0">
                        <th>ID</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>E-mail</th>
                        <th>Created at</th>
                        <th>Updated at</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {users &&
                        users.map((user) => (
                            <tr key={user.id}>
                                <td>{user.id}</td>
                                <td>{user.firstname}</td>
                                <td>{user.lastname}</td>
                                <td>{user.email}</td>
                                <td>
                                    {new Date(user.created_at).toLocaleString()}
                                </td>
                                <td>
                                    {new Date(user.updated_at).toLocaleString()}
                                </td>
                            </tr>
                        ))}
                </tbody>
            </table>
        </div>
    );
}

export default Users;
