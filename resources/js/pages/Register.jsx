import { Link, useForm } from "@inertiajs/react";
import React from "react";
import { router } from "@inertiajs/react";
import "./components/styles.css";
export default function AuthAdmin() {
    const { data, setData, processing, errors, post } = useForm({
        firstname: "",
        lastname: "",
        email: "",
        password: "",
        password_confirmation: "",
    });
    function submit(e) {
        e.preventDefault();
        console.log(data);
        router.post("/users/register", data);
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
                    onChange={(e) => setData("password", e.target.value)}
                />
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
                />
                <div className="my-2">
                    i have already an account <Link href="/users/login" className="text-danger">Got it</Link>
                </div>
                <button className="btn btn-outline-light w-100 mt-2">
                    Log In
                </button>
            </form>
        </div>
    );
}
