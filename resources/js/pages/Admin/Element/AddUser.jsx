import React, { useState } from "react";
import { motion } from "framer-motion";
import { router } from "@inertiajs/react";
import { Slide, toast, ToastContainer } from "react-toastify";
import { faCircleCheck } from "@fortawesome/free-regular-svg-icons";
function AddUser() {
    const [formData, setData] = useState({
        firstname: "",
        lastname: "",
        email: "",
        password: "",
        password_confirmation: "",
    });
    const [errorsRes, setErrorsRes] = useState({
        email: "",
        password: "",
        password_confirmation: "",
    });
    const handleFormData = (event, value) => {
        event.preventDefault();
        const data = new FormData(event.target);
        const userData = {
            firstname: data.get("firstname"),
            lastname: data.get("lastname"),
            email: data.get("email"),
            password: data.get("password"),
            password_confirmation: data.get("password_confirmation"),
        };
        router.post("/addUser", userData, {
            onSuccess: (success) => {
                toast.success(success.props.flash.success, {
                    position: "bottom-right",
                    hideProgressBar: true,
                    closeOnClick: true,
                    pauseOnHover: true,
                    theme: "dark",
                    transition: Slide,
                });
            },
        });
    };
    return (
        <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
        >
            <div className="container">
                <form
                    className="border p-2 m-2 rounded"
                    onSubmit={handleFormData}
                >
                    <div className="row">
                        <div className="col-6">
                            <label
                                htmlFor="firstname"
                                className="form-label my-1"
                            >
                                First name
                            </label>
                            <input
                                type="text"
                                name="firstname"
                                id="firstname"
                                className="form-control"
                                placeholder="enter your first name"
                                onChange={(e) => handleFormData()}
                            />
                        </div>
                        <div className="col-6">
                            <label
                                htmlFor="lastname"
                                className="form-label my-1"
                            >
                                Last name
                            </label>
                            <input
                                type="text"
                                name="lastname"
                                id="lastname"
                                className="form-control"
                                placeholder="enter your last name"
                            />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-6">
                            <label htmlFor="email" className="form-label my-1">
                                Email
                            </label>
                            <input
                                type="email"
                                name="email"
                                id="email"
                                className="form-control"
                                placeholder="enter your email"
                                style={{
                                    border: `${
                                        errorsRes.email ? "1px solid red" : ""
                                    }`,
                                }}
                            />
                            <p className="text-danger">
                                {errorsRes ? errorsRes.email : ""}
                            </p>
                        </div>
                        <div className="col-6">
                            <label
                                htmlFor="password"
                                className="form-label form-label my-1"
                            >
                                Password
                            </label>
                            <input
                                type="password"
                                name="password"
                                placeholder="*********"
                                className="form-control"
                                id="password"
                                style={{
                                    border: `${
                                        errorsRes.password
                                            ? "1px solid red"
                                            : ""
                                    }`,
                                }}
                            />
                            <p className="text-danger">
                                {errorsRes ? errorsRes.password : ""}
                            </p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-6">
                            <label
                                htmlFor="password_confirmation"
                                className="form-label form-label my-1"
                            >
                                confirm Password
                            </label>
                            <input
                                type="password"
                                name="password_confirmation"
                                placeholder="*********"
                                className="form-control"
                                id="password_confirmation"
                                style={{
                                    border: `${
                                        errorsRes.password_confirmation
                                            ? "1px solid red"
                                            : ""
                                    }`,
                                }}
                            />
                            <p className="text-danger">
                                {errorsRes
                                    ? errorsRes.password_confirmation
                                    : ""}
                            </p>
                        </div>
                    </div>
                    <div>
                        <button className="btn btn-outline-danger w-50">
                            Add User
                        </button>
                    </div>
                </form>
            </div>
            <ToastContainer delay={3000}/>
        </motion.div>
    );
}

export default AddUser;
