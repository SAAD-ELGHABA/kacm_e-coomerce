import { Link, useForm } from "@inertiajs/react";
import React from "react";
import { router } from "@inertiajs/react";
import "./components/styles.css";
export default function AuthAdmin() {
    const { data, setData, processing, errors, post } = useForm({
        email: "",
        password: "",
        remember: false,
    });
    function submit(e) {
        e.preventDefault();
        console.log(data);
        router.post("/users/login", data);
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
                />
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
                    value={data.password}
                    onChange={(e) => setData("password", e.target.value)}
                />
                <div className="mt-2">
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
                        onChange={(e) =>setData("remember", !data.remember)}
                    />
                </div>
                <div className="my-1">
                    i don't have an account
                    <Link href="/users/register" className="text-danger ms-2">
                        get one
                    </Link>
                </div>
                <button className="btn btn-outline-light w-100 mt-2">
                    Log In
                </button>
            </form>
        </div>
    );
}
