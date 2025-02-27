
import React, { useState } from "react";
import "./components/styles.css";
import { router } from "@inertiajs/react";
import { Password } from "@mui/icons-material";

function ResetPassword({ token }) {
    const params = new URLSearchParams(window.location.search);
    const email = params.get('email');
    const [errorsRes, setErrorsRes] = useState({
        Password : "",
        Password_confirmation : "",
    });
    const [password, setPassword] = useState({
        password: "",
        email: email,
        password_confirmation: "",
        token : token,
    });
    const submit = (e) => {
        e.preventDefault();
        router.post('/reset-password', password , {
            onError: (errors) => {
                setErrorsRes(errors);
            },
            onSuccess: (response) => {
                console.log(response);
            }
        });
    }
    
    
    return (
        <div className="gradient-background" style={{ height: "100vh" }}>
            <img
                src="/Assets/logo.jpg"
                alt="logo"
                style={{ width: "100px", paddingTop: "10px" }}
                className="rounded-circle d-flex ms-5 "
            />
            <form onSubmit={submit}>
            <div className=" mx-auto border rounded p-5 form-container text-light border-danger" style={{ width: "500px" }}>
                    <h3 className="text-center text-light">Reset Password</h3>
                    <label htmlFor="password" className="form-label my-1">
                        Password
                    </label>
                    <input
                        type="password"
                        name="password"
                        id="password"
                        className="form-control"
                        placeholder="enter your password"
                        style={{
                            border: "1px solid red",
                        }}
                        value={password.password}
                        onChange={(e) => setPassword({...password , password: e.target.value })}
                    />
                    <label htmlFor="password_confirmation" className="form-label my-1">
                        Password Confirmation
                    </label>
                    <input
                        type="password"
                        name="password_confirmation"
                        id="password_confirmation"
                        className="form-control"
                        placeholder="confirm your password"
                        style={{
                            border: "1px solid red",
                        }}
                        value={password.password_confirmation}
                        onChange={(e) => setPassword({ ...password,password_confirmation
                            : e.target.value })}
                    />
                    <p className="text-danger">
                        {/* {errorsRes ? errorsRes.email : ""} */}
                    </p>
                    <button className="btn btn-danger">Submit</button>
                </div>
            </form>
        </div>
    );
}

export default ResetPassword;
