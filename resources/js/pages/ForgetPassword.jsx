import React, { useState } from "react";
import "./components/styles.css";
import { router } from "@inertiajs/react";
import { toast, ToastContainer } from "react-toastify";
function ForgetPassword() {
    const [errorsRes, setErrorsRes] = useState({
        email: "",
    });
    const [email, setEmail] = useState({
        email: "",
    });
    const submit = (e) => {
        e.preventDefault();
        router.post('/forget-password', email , {
            onError: (errors) => {
                setErrorsRes(errors);
            },
            onSuccess: (response) => {
                console.log(response);
                toast.success(response.props.flash.status, {
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
        });
    }
    console.log(errorsRes);
    
    return (
        <div className="gradient-background" style={{ height: "100vh" }}>
            <img
                src="/Assets/logo.jpg"
                alt="logo"
                style={{ width: "100px",paddingTop:"10px" }}
                className="rounded-circle d-flex ms-5 "
            />
            <form onSubmit={submit}>
                <div className=" mx-auto border rounded p-5 form-container text-light border-danger" style={{ width: "500px" }}>
                    <h3 className="text-center text-light">Forget Password</h3>
                    <label htmlFor="email" className="form-label my-1">
                        Email
                    </label>
                    <input
                        type="text"
                        name="email"
                        id="email"
                        className="form-control"
                        placeholder="enter your email"
                        style={{
                            border: "1px solid red",
                        }}
                        value={email.email}
                        onChange={(e) => setEmail({email:e.target.value})}
                    />
                    <p className="text-danger">
                        {/* {errorsRes ? errorsRes.email : ""} */}
                    </p>
                    <button className="btn btn-danger">Submit</button>
                </div>
            </form>
            <ToastContainer />
        </div>
    );
}

export default ForgetPassword;
