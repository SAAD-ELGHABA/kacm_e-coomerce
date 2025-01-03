import { ToastContainer, toast } from "react-toastify";
import React from 'react'

function Toast({msg}) {
            toast.success(msg, {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                // transition: Bounce,
            });
  return (
    <div>
        <ToastContainer />
    </div>
  )
}

export default Toast