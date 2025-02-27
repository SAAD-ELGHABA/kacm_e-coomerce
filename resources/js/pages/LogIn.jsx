import { Link, useForm } from "@inertiajs/react";
import React, { useState } from "react";
import { router } from "@inertiajs/react";
import "./components/styles.css";
import { ToastContainer, toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { LogIn } from "./redux/actions";
export default function AuthAdmin() {
    const token = localStorage.getItem("token");
    const dispatch = useDispatch();
    const [errorsRes, setErrorsRes] = useState({
        email: "",
        password: "",
    });
    const { data, setData, processing, errors, post } = useForm({
        email: "",
        password: "",
        remember: false,
    });
    function submit(e) {
        e.preventDefault();
        router.post("/users/login", data, {
            onError: (errors) => {
                setErrorsRes(errors);
            },
            onSuccess: (response) => {
                if (response.props.flash.success) {
                    dispatch(LogIn(response.props.auth.user))
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
                <h3 className="text-center text-light">Log In</h3>
                <label htmlFor="email" className="form-label my-1">
                    Email
                </label>
                <input
                    type="text"
                    name="email"
                    id="email"
                    className="form-control"
                    placeholder="enter your email"
                    value={data.email}
                    onChange={(e) => setData("email", e.target.value)}
                    style={{
                        border: `${errorsRes.email ? "1px solid red" : ""}`,
                    }}
                />
                <p className="text-danger">
                    {errorsRes ? errorsRes.email : ""}
                </p>
                <label htmlFor="password" className="form-label form-label ">
                    Password
                </label>
                <input
                    type="password"
                    name="password"
                    placeholder="*********"
                    className="form-control"
                    id="password"
                    value={data.password}
                    onChange={(e) => setData("password", e.target.value)}
                    style={{
                        border: `${errorsRes.password ? "1px solid red" : ""}`,
                    }}
                />
                <p className="text-danger">
                    {errorsRes ? errorsRes.password : ""}
                </p>
                <div className="row mt-2">
                    <div className=" col-6">
                        <label
                            htmlFor="remember"
                            className="form-label form-label "
                        >
                            remember me
                        </label>
                        <input
                            type="checkbox"
                            name="remember"
                            className="ms-2"
                            id="remember"
                            onChange={(e) =>
                                setData("remember", !data.remember)
                            }
                        />
                    </div>
                    <div className="col-6 d-flex justify-content-end">
                        <Link
                            href="/forgot-password"
                            style={{background: "linear-gradient(90deg,white, red)",
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',
                            }}
                        >
                            forgot password
                        </Link>
                    </div>
                </div>
                <div className="my-1">
                    i don't have an account
                    <Link href="/users/register" className="text-danger ms-2">
                        create one
                    </Link>
                </div>
                <button className="btn btn-outline-light w-100 mt-2">
                    Log In
                </button>
            </form>
            <ToastContainer />
        </div>
    );
}
