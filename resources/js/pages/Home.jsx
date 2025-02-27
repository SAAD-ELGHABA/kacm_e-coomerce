import { Link } from "@inertiajs/react";
import React, { use, useEffect, useState } from "react";
import NavBar from "./components/NavBar.jsx";
import { useDispatch, useSelector } from "react-redux";
import { LogIn } from "./redux/actions.js";
import {userData} from "./data/userData.js";
function Home({ data }) {
    const user = useSelector((state) => state.reducer.user);
    const token = useSelector((state) => state.reducer.token);
    const [elements, setElements] = useState([]);
    useEffect(() => {
        setElements(data);
    }, data);
    const dispatch = useDispatch();
    
    
    return (
        <div>
            <NavBar />
            {elements &&
                elements.map((element, index) => (
                    <div key={index} className="my-1">
                        {element.element === "image" ? (
                            <div className="w-100">
                                <img
                                    src={`/storage/${element.dependencies[0]}`}
                                    alt="image"
                                    className="w-100"
                                    style={{ height: "550px" }}
                                />
                            </div>
                        ) : null}
                        {element.element === "table" ? (
                            <div className="w-100">
                                <table className="table w-100 text-center table-bordered">
                                    {element.dependencies.map((row, index) => (
                                        <tr key={index} className="border">
                                            {row.map((cell, index) => (
                                                <td
                                                    key={index}
                                                    className="border"
                                                    style={{
                                                        fontFamily:
                                                            cell.style
                                                                .fontFamily,
                                                        fontWeight:
                                                            cell.style
                                                                .fontWeight,
                                                        color: cell.style.color,
                                                        fontSize: `${cell.style.fontSize}px`,
                                                    }}
                                                >
                                                    {cell.data}
                                                </td>
                                            ))}
                                        </tr>
                                    ))}
                                </table>
                            </div>
                        ) : null}
                        {element.element === "section" ? (
                            <div
                                className="w-100"
                                style={{
                                    backgroundImage: `url(/storage/${element.dependencies.firstImage})`,
                                    backgroundSize: "cover",
                                    backgroundPosition: "center",
                                    height: "500px",
                                }}
                            >
                                <div className="row container mx-auto d-flex justify-content-between align-items-end h-100 w-100">
                                    <div
                                        className="col-4 "
                                        style={{ height: "250px" }}
                                    >
                                        <h1
                                            style={{
                                                fontFamily:
                                                    element.dependencies
                                                        .titleStyle.fontFamily,
                                                fontSize: `${element.dependencies.titleStyle.fontSize}px`,
                                                fontWeight:
                                                    element.dependencies
                                                        .titleStyle.fontWeight,
                                                color: element.dependencies
                                                    .titleStyle.color,
                                            }}
                                        >
                                            {
                                                element.dependencies.titleStyle
                                                    .titleData
                                            }
                                        </h1>
                                        <p
                                            style={{
                                                fontFamily:
                                                    element.dependencies
                                                        .TextStyle.fontFamily,
                                                fontSize: `${element.dependencies.TextStyle.fontSize}px`,
                                                fontWeight:
                                                    element.dependencies
                                                        .TextStyle.fontWeight,
                                                color: element.dependencies
                                                    .TextStyle.color,
                                            }}
                                        >
                                            {
                                                element.dependencies.TextStyle
                                                    .textData
                                            }
                                        </p>
                                        <Link
                                            href={`${element.dependencies.ButtonStyle.target}`}
                                            className={`btn w-${element.dependencies.ButtonStyle.width}`}
                                            as="button"
                                            style={{
                                                fontFamily:
                                                    element.dependencies
                                                        .ButtonStyle.fontFamily,
                                                fontSize: `${element.dependencies.ButtonStyle.fontSize}px`,
                                                fontWeight:
                                                    element.dependencies
                                                        .ButtonStyle.fontWeight,
                                                color: element.dependencies
                                                    .ButtonStyle.Textcolor,
                                                border: `1px solid ${element.dependencies.ButtonStyle.BorderColor}`,
                                                backgroundColor:
                                                    element.dependencies
                                                        .ButtonStyle
                                                        .BackgroudColor,
                                            }}
                                        >
                                            {
                                                element.dependencies.ButtonStyle
                                                    .textButton
                                            }
                                        </Link>
                                    </div>
                                    <div
                                        className="col-4 d-flex justify-content-center align-items-end "
                                        style={{
                                            height: "500px",
                                            overflow: "hidden",
                                        }}
                                    >
                                        <img
                                            src={`/storage/${element.dependencies.secondImage}`}
                                            alt=""
                                            className="w-75 h-auto"
                                        />
                                    </div>
                                </div>
                            </div>
                        ) : null}
                        {element.element === "video" ? (
                            <div
                                style={{ height: "450px" }}
                                className="border rounded "
                            >
                                <video
                                    src={`/storage/${element.dependencies}`}
                                    className="w-100 h-100"
                                    controls
                                    autoplay
                                    loop
                                    muted
                                    type="video/mp4"
                                    width={100}
                                ></video>
                            </div>
                        ) : null}
                    </div>
                ))}
        </div>
    );
}

export default Home;
