import React, { useEffect, useRef, useState } from "react";
import { FaImage } from "react-icons/fa";
export default function Image({handleData}) {
    const inputDisplay = useRef(null);
    const DataCode = useRef(null);
    const [image, setImage] = useState(null);

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        const elementJson = {
            element:'image',
            dependencies:file
        } 
        handleData(elementJson);
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setImage(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };


    return (
            <div
                className="w-100 text-center  my-1 border border-secondary rounded d-flex"
                onClick={() => {
                    inputDisplay.current.click();
                }}
                style={{
                    alignItems: "center",
                    justifyContent:'center',
                    cursor: "pointer",
                    height: "550px",
                }}
                id="image-element"
            >
                <img
                    src={image}
                    alt="Chose an image"
                    style={{ display: `${image ? "block" : "none"}` }}
                    className="w-100 h-100"
                />
                <FaImage
                    className="fs-1"
                    style={{ display: `${image ? "none" : "block"}` }}
                />
                <input
                    type="file"
                    name="image"
                    id="image"
                    onChange={(e) => {
                        handleFileChange(e);
                    }}
                    
                    style={{ display: "none" }}
                    ref={inputDisplay}
                />
            </div>
    );
}
