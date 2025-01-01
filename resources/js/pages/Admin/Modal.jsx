import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { FaTable, FaPlus } from "react-icons/fa";
import { HandymanOutlined } from "@mui/icons-material";
export default function Modal({ style, handleElement }) {
    return (
        <div>
            <div
                className={`accordion border-dark justify-center`}
                id="accordionExample"
            >
                <div className={`accordion-item  `}>
                    <h2 className="accordion-header" id="headingOne">
                        <div
                            className={`btn w-100 border-none `}
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseOne"
                            aria-expanded="false"
                            aria-controls="collapseOne"
                        >
                            <FaPlus />
                        </div>
                    </h2>
                    <div
                        id="collapseOne"
                        className="accordion-collapse collapse show"
                        aria-labelledby="headingOne"
                        data-bs-parent="#accordionExample"
                    >
                        <div className="accordion-body">
                            <div className="row">
                                <div
                                    className="text-center p-3 hover_element_navBar_darkMode col"
                                    onClick={() => {
                                        handleElement("image");
                                    }}
                                >
                                    Image
                                </div>
                                <div
                                    className="text-center p-3 hover_element_navBar_darkMode col"
                                    onClick={() => {
                                        handleElement("section");
                                    }}
                                >
                                    Section
                                </div>
                                <div className="text-center p-3 hover_element_navBar_darkMode col"
                                onClick={() => {
                                    handleElement("video");
                                }}
                                >
                                    Video
                                </div>
                                <div
                                    className="text-center p-3 hover_element_navBar_darkMode col"
                                    onClick={() => {
                                        handleElement("table");
                                    }}
                                >
                                    Table
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
