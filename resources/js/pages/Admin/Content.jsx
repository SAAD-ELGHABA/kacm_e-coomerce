import React, { useState } from "react";
import Dashboard1 from "./componentContent/Dashboard1";
import Dashboard2 from "./componentContent/Dashboard2";
import Dashboard3 from "./componentContent/Dashboard3";
import Dashboard4 from "./componentContent/Dashboard4";
import Home from "../../pages/Home.jsx";
import Modal from "./Modal.jsx";
import Image from "./Element/Image.jsx";
import { useForm } from "@inertiajs/react";
import Table from "./Element/Table";
import Section from "./Element/Section";
import { ToastContainer, toast } from "react-toastify";
import Video from "./Element/Video";
import Store from "../../pages/Store.jsx";
import SlideImages from "./Element/SlideImages";
import AddProduct from "./Element/AddProduct";
function Content({ style, component, dataElements }) {
    // console.log(dataElements);

    const [element, setElement] = useState();
    const handleElement = (Element) => {
        setElement(Element);
    };
    const { data, setData, processing, errors, post } = useForm({
        elementInfo: "",
    });
    function handleSaveElement(e) {
        e.preventDefault();
        post("/element", data);
        toast.success(`The ${element} has been added successfully !`, {
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
        setElement(null);
    }
    function handleData(data) {
        setData("elementInfo", data);
        console.log(data);
    }
    const [toggleSettings,setToggleSettings] = useState(false);
    function handleStoreSettings(toggle){
        setToggleSettings(toggle)
    }
    const [addproductsection,setaddproductsection] = useState(false);
    function handleaddProduct(toggle){
        setaddproductsection(toggle)
    }
    return (
        <div className={` ${style} py-2 `} style={{transition: 'width 0.3s ease-in-out'}}>
            {component == "Dashboard1" && <Dashboard1 />}
            {component == "Dashboard2" && <Dashboard2 />}
            {component == "Dashboard3" && <Dashboard3 />}
            {component == "Dashboard4" && <Dashboard4 />}
            {component == "Home" && (
                <>
                    <Home data={dataElements} />

                    <div>
                        {element && (
                            <div className="w-100 justify-end  py-1   border rounded p-1">
                                <form
                                    onSubmit={handleSaveElement}
                                    className="w-100 "
                                >
                                    {element == "image" && (
                                        <Image handleData={handleData} />
                                    )}
                                    {element == "table" && (
                                        <Table handleDataTable={handleData} />
                                    )}
                                    {element == "section" && (
                                        <Section handleDataTable={handleData} />
                                    )}
                                    {element == "video" && (
                                        <Video handleData={handleData} />
                                    )}
                                    <div
                                        className="flex-row gap-3 d-flex"
                                        style={{ justifyContent: "end" }}
                                    >
                                        <button
                                            className="btn btn-success"
                                            disabled={
                                                data.elementInfo ? false : true
                                            }
                                        >
                                            save
                                        </button>
                                        <button
                                            className="btn btn-warning"
                                            type="reset"
                                        >
                                            reset
                                        </button>
                                    </div>
                                </form>
                            </div>
                        )}
                    </div>
                    <Modal style={style} handleElement={handleElement} />
                </>
            )}
            {component == "Store" && (<>
                <Store isAdmin={true} handleStoreSettings={handleStoreSettings} handleaddProduct={handleaddProduct}>
                    { addproductsection &&
                    <div className="position-fixed  opacity-5 bottom-0 start-0 top-0 right-0   w-100 d-flex justify-content-center align-items-center" style={{zIndex:'9999',backdropFilter:'brightness(50%)'}}>
                        <AddProduct handleaddProduct={handleaddProduct}/>
                    </div> 
                    }
                </Store>
                {toggleSettings && <div className="position-fixed  opacity-5 bottom-0 start-0 top-0 right-0   w-100 d-flex justify-content-center align-items-center" style={{zIndex:'9999',backdropFilter:'brightness(50%)'}}>
                    <div>
                        <div className="bg-light p-5 position-relative " style={{width:'75vw',height:'80vh'}}>
                            <button type="button" class="btn-close position-absolute top-0 mt-3 end-0 me-4" onClick={()=>setToggleSettings(false)} aria-label="Close"></button>
                            
                            <SlideImages handleData={handleData}/>
                        </div>
                    </div>
                </div>}
            </>
            )}
            <ToastContainer />
        </div>
    );
}

export default Content;
