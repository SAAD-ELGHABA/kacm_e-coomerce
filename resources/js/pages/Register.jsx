import { Link, useForm } from "@inertiajs/react";
import React, { useState } from "react";
import { router } from "@inertiajs/react";
import "./components/styles.css";
export default function AuthAdmin() {
    const [errorsRes, setErrorsRes] = useState({
        email: "",
        password: "",
        password_confirmation: "",
    });
    const { data, setData, processing, errors, post } = useForm({
        firstname: "",
        lastname: "",
        email: "",
        password: "",
        password_confirmation: "",
    });
    function submit(e) {
        e.preventDefault();
        router.post("/users/register", data, {
            onError: (errors) => {
                setErrorsRes(errors);
            },
            onSuccess: (response) => {
                console.log(response);

                if (response.props.flash.success) {
                    toast.success(response.props.flash.success, {
                        position: "bottom-right",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: false,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "light",
                    });
                    dispatch(LogIn(response.props.auth.user));
                    localStorage.setItem("token", response.props.flash.token);
                } else {
                    toast.error(response.props.flash.error, {
                        position: "bottom-right",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: false,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "light",
                    });
                }
            },
        });
    }
    console.log(errors);
    return (
        <div className="gradient-background" style={{ height: "100vh" }}>
            <img
                src="/Assets/logo.jpg"
                alt="logo"
                style={{ width: "100px" }}
                className="rounded-circle d-flex ms-5 "
            />
            <form
                onSubmit={submit}
                className=" mx-auto border rounded p-5 form-container text-light border-danger"
                style={{ width: "500px" }}
            >
                <h1 className="text-center text-light">Register</h1>
                <label htmlFor="firstname" className="form-label my-1">
                    First name
                </label>
                <input
                    type="text"
                    name="firstname"
                    id="firstname"
                    className="form-control"
                    placeholder="enter your first name"
                    onChange={(e) => setData("firstname", e.target.value)}
                    
                />
                <label htmlFor="lastname" className="form-label my-1">
                    Last name
                </label>
                <input
                    type="text"
                    name="lastname"
                    id="lastname"
                    className="form-control"
                    placeholder="enter your last name"
                    onChange={(e) => setData("lastname", e.target.value)}
                />
                <label htmlFor="email" className="form-label my-1">
                    Email
                </label>
                <input
                    type="email"
                    name="email"
                    id="email"
                    className="form-control"
                    placeholder="enter your email"
                    onChange={(e) => setData("email", e.target.value)}
                    style={{
                        border: `${errorsRes.email ? "1px solid red" : ""}`,
                    }}
                />
                <p className="text-danger">
                    {errorsRes ? errorsRes.email : ""}
                </p>
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
                    onChange={(e) => setData("password", e.target.value)}
                    style={{
                        border: `${errorsRes.password ? "1px solid red" : ""}`,
                    }}
                />
                <p className="text-danger">
                    {errorsRes ? errorsRes.password : ""}
                </p>
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
                    onChange={(e) =>
                        setData("password_confirmation", e.target.value)
                    }
                    style={{
                        border: `${
                            errorsRes.password_confirmation
                                ? "1px solid red"
                                : ""
                        }`,
                    }}
                />
                <p className="text-danger">
                    {errorsRes ? errorsRes.password_confirmation : ""}
                </p>
                <div className="my-2">
                    i have already an account{" "}
                    <Link href="/users/login" className="text-danger">
                        Got it
                    </Link>
                </div>
                <button className="btn btn-outline-light w-100 mt-2">
                    Log In
                </button>
            </form>
        </div>
    );
}
