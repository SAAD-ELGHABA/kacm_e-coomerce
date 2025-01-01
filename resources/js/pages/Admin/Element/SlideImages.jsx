import React, { useRef, useState } from "react";
import { FaHandSparkles, FaImage } from "react-icons/fa";
import "../style.css";
function SlideImages({ handleData }) {
    const imagesInput = useRef();
    const [currentIndex, setCurrentIndex] = useState(null);
    const [numberImages, setnumberImages] = useState(0);
    const [imagesContainers, setimagesContainers] = useState([]);
    const [sectionChoosed, setSectionChoosed] = useState("slider");
    function GenerateImagesContainers(e) {
        e.preventDefault();
        setimagesContainers(new Array(parseInt(numberImages)).fill(""));
    }
    function hanldeImage(e) {
        const image = e.target.files[0];
        const container = [...imagesContainers];
        if (image) {
            const reader = new FileReader();
            reader.onloadend = () => {
                container[currentIndex] = reader.result;
                setimagesContainers(container);
            };
            reader.readAsDataURL(image);
        }
    }
    function handleSaveChanges(e) {
        e.preventDefault();
        handleData();
    }
    const inputDisplay = useRef(null);
    const [image, setImage] = useState(null);

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        const elementJson = {
            element: "image",
            dependencies: file,
        };
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setImage(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };
    return (
        <div>
            <ul className="list-unstyled text-dark d-flex">
                <li
                    className={`${
                        sectionChoosed == "slider" ? "bg-light border-top " : "bg-white"
                    } py-1 px-2`}
                    style={{ cursor: "pointer" }}
                    onClick={() => setSectionChoosed("slider")}
                >
                    slider
                </li>
                <li
                    className={`${
                        sectionChoosed == "background" ? "bg-light border-top " : "bg-white"
                    } py-1 px-2`}
                    style={{ cursor: "pointer" }}
                    onClick={() => setSectionChoosed("background")}
                >
                    background
                </li>
                <li
                    className={`${
                        sectionChoosed == "text" ? "bg-light border-top " : "bg-white"
                    } py-1 px-2`}
                    style={{ cursor: "pointer" }}
                    onClick={() => setSectionChoosed("text")}
                >
                    text
                </li>
            </ul>
            <div className="border pb-1 px-1 rounded">
                {sectionChoosed == "slider" && (
                    <div>
                        <div className="d-flex justify-content-center">
                            <div className="border rounded w-50 border-dark">
                                <input
                                    type="number"
                                    name=""
                                    id=""
                                    placeholder="number of images"
                                    style={{ border: "none", outline: "none" }}
                                    className="w-50 ps-2"
                                    onChange={(e) =>
                                        setnumberImages(e.target.value)
                                    }
                                />
                                <button
                                    className="btn btn-dark w-50"
                                    onClick={GenerateImagesContainers}
                                >
                                    Generate <FaHandSparkles />
                                </button>
                            </div>
                        </div>
                        <div
                            className="w-100 d-flex gap-1 mt-5 py-1 "
                            style={{ overflow: "hidden", overflowX: "scroll" }}
                        >
                            {imagesContainers.length == 0 ? (
                                <div className=" my-2 pt-1 w-100 d-flex justify-content-center ">
                                    <img
                                        src={`/storage/images/slider.gif`}
                                        alt="Carousel Animation"
                                        className="w-25"
                                    />
                                </div>
                            ) : (
                                ""
                            )}
                            <div className="d-flex gap-1">
                                {imagesContainers.map((image, index) => (
                                    <div
                                        className={`${
                                            imagesContainers[index]
                                                ? "bg-transparent"
                                                : "bg-dark"
                                        } text-center d-flex align-items-center justify-content-center elementHoverd`}
                                        key={index}
                                        style={{
                                            width: "200px",
                                            height: "250px",
                                            cursor: "pointer",
                                        }}
                                        onClick={() => {
                                            imagesInput.current.click();
                                            setCurrentIndex(index);
                                        }}
                                    >
                                        <div
                                            className={`${
                                                imagesContainers[index]
                                                    ? "d-none"
                                                    : "d-block"
                                            }`}
                                        >
                                            <FaImage className="me-3" /> image{" "}
                                            {index + 1}
                                        </div>
                                        <input
                                            type="file"
                                            name="images"
                                            id=""
                                            ref={imagesInput}
                                            className="d-none"
                                            onChange={(e) => hanldeImage(e)}
                                        />
                                        <img
                                            src={imagesContainers[index]}
                                            className={`${
                                                imagesContainers[index]
                                                    ? "d-block"
                                                    : "d-none"
                                            } w-100`}
                                            alt={`image ${index}`}
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                )}
                {sectionChoosed == "background" && (
                    <div className="w-100 d-flex justify-content-center h-100">
                        <div
                            className="w-75 text-center  my-1 border border-secondary rounded d-flex"
                            onClick={() => {
                                inputDisplay.current.click();
                            }}
                            style={{
                                alignItems: "center",
                                justifyContent: "center",
                                cursor: "pointer",
                                height: "350px",
                            }}
                            id="image-element"
                        >
                            <img
                                src={image}
                                alt="Chose an image"
                                style={{
                                    display: `${image ? "block" : "none"}`,
                                }}
                                className="w-100 h-100"
                            />
                            <FaImage
                                className="fs-1 text-dark"
                                style={{
                                    display: `${image ? "none" : "block"}`,
                                }}
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
                    </div>
                )}
                {sectionChoosed == 'text' && 
                    <div className="d-flex justify-content-center" style={{height:'350px'}}>
                        <div className="w-50">
                            <input type="text" name="" id="" className="inputs w-100 py-2 form-control fs-2" placeholder="title"/><br />
                            <textarea name="" id="" className="inputs w-100 form-control" style={{height:'200px'}} placeholder="some text"></textarea><br />
                            <div className="w-100 text-center">
                            <button className="w-50 btn btn-light border">Button</button>
                            </div>
                        </div>
                        <div className="w-50 text-center">
                            <input type="text" name="" id="" placeholder="font familly " className="w-75 inputs" /><br />
                            <label htmlFor="" className="text-dark me-4">color of text
                            </label>
                            <input type="color" name="" id="" className="mt-1"/>
                        </div>
                    </div>
                }
            </div>
            <div className="w-100 py-1 border-dark d-flex justify-content-end gap-2 border-top">
                <button
                    className="btn btn-dark"
                    disabled={imagesContainers.length > 0 ? false : true}
                    onClick={handleSaveChanges}
                >
                    save
                </button>
                <button className="btn btn-secondary">reset</button>
            </div>
        </div>
    );
}

export default SlideImages;
