import React, { useState } from "react";
import NavBar from "./components/NavBar";
import Slider from "./components/Slider.jsx";
import { FaStar,FaGear, FaPlus } from "react-icons/fa6";

// import CoverflowSlider from './components/CoverflowSlider.jsx'
function Store({ isAdmin = false ,handleStoreSettings,children,handleaddProduct}) {
    const stars = new Array(parseInt(5)).fill("");
    const [isHovered, setIsHovered] = useState(false);
    const [showaddproduct,setshowaddproduct] = useState(false);
    return (
        <div className="w-100 position-relative">
            {isAdmin && (
                <div>
                <div className="btn bg-dark bg-gradient rounded border-secondary position-fixed bottom-50 end-0 me-3 d-flex justify-content-between align-items-center gap-2" style={{cursor:'pointer',zIndex:'99'}} onMouseEnter={()=>setshowaddproduct(true)} onMouseLeave={()=>setshowaddproduct(false)}>
                    <div style={{width:showaddproduct ? "auto":"0px",height:showaddproduct ? "auto":"0px",overflow:'hidden',transition: 'width height 3s ease-in-out'}} onClick={()=>handleaddProduct(true)} className="text-secondary" id="hoverText">
                        add a new product                        
                    </div>
                    <FaPlus className="fs-4"/>
                </div>
                    {children}
                </div>
            )}
            <NavBar />
            <div className="row w-100">
                <section className="col-2  border-end  position-relative">
                    <div
                        className="left-0 top-5  w-50"
                        style={{ position: "fixed" }}
                    >
                        test
                    </div>
                </section>
                <section className="col">
                    <div
                        style={{ height: "300px" }}
                        className="align-items-center d-flex position-relative"
                    >
                        <div className="row border-bottom ">
                            <div className="col ms-5">
                                <h1>
                                    Title 
                                    
                                </h1>
                                <p className="w-75">
                                    Lorem, ipsum dolor sit amet consectetur
                                    adipisicing elit. Quidem similique minus,
                                    repellendus commodi ea beatae inventore?
                                    Eaque blanditiis totam qui?
                                </p>
                                <button className="btn btn-success">
                                    check out
                                </button>
                                {/* {isAdmin && <FaGear className=" mx-5 fs-6" style={{cursor:'pointer'}} />} */}
                            </div>
                            <div className="col d-flex align-items-center">
                                <Slider />
                            </div>
                        </div>
                        {isAdmin && 
                        <div className="position-absolute top-0 end-0 mt-4">
                            <FaGear style={{cursor:'pointer'}} onClick={()=>handleStoreSettings((prev)=>!prev)}/>
                        </div>
                        }
                    </div>
                    <div className="w-100">{/* <CoverflowSlider/> */}</div>
                    <div className=" w-100 py-1 border-bottom">
                        test
                    </div>
                    <div
                        className="w-100 py-5 d-flex justify-content-evenly gap-2"
                        style={{ flexWrap: "wrap" }}
                    >
                        {stars.map(() => (
                            <div
                                className="card text-center position-relative"
                                style={{ width: "12rem" }}
                                onMouseEnter={() => setIsHovered(true)}
                                onMouseLeave={() => setIsHovered(false)}
                            >
                                <div
                                    style={{ height: "230px" }}
                                    className="bg-secondary text-center"
                                >
                                    image
                                </div>
                                <div>
                                    {stars.map((star, index) => (
                                        <FaStar
                                            style={{
                                                fontSize: "12px",
                                                color: "yellow",
                                            }}
                                        />
                                    ))}
                                </div>
                                <div className="card-body">
                                    <h5 className="card-title">Card title</h5>
                                    <h6 className="text-secondary">99.00$</h6>
                                </div>
                                {isHovered && (
                                    <div className="position-absolute top-1 bg-success">
                                        test
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </section>
            </div>
        </div>
    );
}

export default Store;
