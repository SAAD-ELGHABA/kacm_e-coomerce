import React, { useState } from "react";
import {
    FaPage4,
    FaChartLine,
    FaPuzzlePiece,
    FaCaretRight,
    FaArrowLeft,
    FaProductHunt
} from "react-icons/fa";
import DashboardIcon from "@mui/icons-material/Dashboard";
import { FaArrowRight } from "react-icons/fa6";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUsers } from "@fortawesome/free-solid-svg-icons";
function Sidebar({ style, handlecomponent , handleSidebar , togglesidebar}) {
    const [toggle, setToggle] = useState({ visibility: false, element: "" });
    const handleelement = (element) => {
        setToggle({ visibility: !toggle.visibility, element: element });
    };
    
    return (
        <div className={`${style} `}>
            <aside style={{width:togglesidebar ? '50px':'',transition: 'width 1s ease-in-out',overflow:'hidden'}} id="sidebar">
                <ul className="  list-unstyled  fs-6 scrollNav " >
                    <li className={` d-flex ${togglesidebar ? 'justify-content-start':'justify-content-around'} align-items-center  border-bottom border-secondary py-4`}>
                        <h3 className={`${togglesidebar?'d-none':''}`} style={{transition: 'width 0.3s ease-in-out'}}>Title</h3>
                        <h5 style={{cursor:'pointer'}} className={`${togglesidebar?"ps-3":""}`} onClick={()=>handleSidebar(prev=>!prev)}>
                            {togglesidebar ? <FaArrowRight/>:<FaArrowLeft/>}
                        </h5>
                    </li>
                    {/* <hr /> */}
                    <li
                        className="py-2 hover_element_navBar_darkMode "
                        onClick={() => {
                            handlecomponent("Dashboard1");
                        }}
                    >
                        <DashboardIcon className="w-25" />
                        Home
                    </li>
                    <li
                        className="py-2 hover_element_navBar_darkMode "
                        onClick={() => {
                            handlecomponent("Dashboard1");
                        }}
                    >
                        <FaChartLine className="w-25" />
                        Dashboard 1
                    </li>
                    <li
                        className="py-2 hover_element_navBar_darkMode  "
                        onClick={() => {
                            handlecomponent("Dashboard2");
                        }}
                    >
                        <FaChartLine className="w-25" />
                        Dashboard 2
                    </li>
                    <li
                        className="py-2 hover_element_navBar_darkMode  "
                        onClick={() => {
                            handlecomponent("Dashboard3");
                        }}
                    >
                        <FaChartLine className="w-25" />
                        Dashboard 3
                    </li>
                    <li
                        className="py-2 hover_element_navBar_darkMode  "
                        onClick={() => {
                            handlecomponent("Dashboard4");
                        }}
                    >
                        <FaChartLine className="w-25" />
                        Dashboard 4
                    </li>
                    <li
                        className={`py-2 hover_element_navBar_darkMode  `}
                        onClick={() => {
                            handleelement("pages");
                        }}
                    >
                        <FaPage4 className="w-25" />
                        Pages
                        <FaCaretRight
                            style={{
                                rotate: `${
                                    toggle.visibility &&
                                    toggle.element == "pages"
                                        ? "270deg"
                                        : "90deg"
                                }`,
                            }}
                            className=" pt-1 w-25 fs-6"
                        />
                    </li>
                    {toggle.visibility && toggle.element == "pages" && (
                        <ul className={`list-unstyled placeholder-glow ps-5 ${togglesidebar ? "d-none":''}`} >
                            <li
                                className="hover_element_navBar_darkMode"
                                onClick={() => {
                                    handlecomponent("Home");
                                }}
                            >
                                Home{" "}
                            </li>
                            <li
                                className="hover_element_navBar_darkMode"
                                onClick={() => {
                                    handlecomponent("Store");
                                }}
                            >
                                Store
                            </li>
                            <li>item3 </li>
                        </ul>
                    )}
                    <li
                        className="py-2 hover_element_navBar_darkMode  "
                        onClick={() => {
                            handleelement("components");
                        }}
                    >
                        <FaPuzzlePiece className="w-25" />
                        Components
                        <FaCaretRight
                            style={{
                                rotate: `${
                                    toggle.visibility &&
                                    toggle.element == "components"
                                        ? "270deg"
                                        : "90deg"
                                }`,
                            }}
                            className=" pt-1 w-25 fs-6"
                        />
                    </li>
                    {toggle.visibility && toggle.element == "components" && (
                        <ul className={`list-unstyled placeholder-glow ps-5 ${togglesidebar ?"d-none":""}`}>
                            <li>item1 </li>
                            <li>item2 </li>
                            <li>item3 </li>
                        </ul>
                    )}
                    <li
                        className="py-2 hover_element_navBar_darkMode  "
                        onClick={() => {
                            handlecomponent("products");
                        }}
                    >
                        <FaProductHunt className="w-25" />
                        Products 
                    </li>
                    <li
                        className="py-2 hover_element_navBar_darkMode  "
                        onClick={() => {
                            handlecomponent("users");
                        }}
                    >
                        <FontAwesomeIcon icon={faUsers} className="w-25"/>
                        Users 
                    </li>
                </ul>
            </aside>
        </div>
    );
}

export default Sidebar;
