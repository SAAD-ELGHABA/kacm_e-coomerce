import React, { useRef, useState } from "react";
import { FaFootballBall ,FaImage} from "react-icons/fa";
import { FaCircleNotch, FaCircleCheck, FaCheck } from "react-icons/fa6";
function AddProduct({ handleaddProduct }) {
    const [info, setInfo] = useState({
        title: " ",
        previous_price: 0,
        current_price: 0,
        description: " ",
        category: " ",
        section: " ",
        company: " ",
        sizeAvailable: [],
        colors: [],
        quantity : 1,
        imageUrl: null,
    });
    const [image, setImage] = useState(null);
    const size = ["S", "M", "L", "XL", "XXL"];
    const colors = [
        "red",
        "blue",
        "green",
        "yellow",
        "black",
        "white",
        "gray",
        "orange",
        "purple",
        "pink",
    ];
    const imageProduct = useRef();
    function displayImage(){
        const file = imageProduct.current.files[0];
        setInfo({...info,imageUrl:file});
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setImage(reader.result);
            };
            reader.readAsDataURL(file);
        }
    }
    function handleProductInfo(e){
        e.preventDefault();
        
    }
    return (
        <div
            style={{ width: "90vw", height: "90vh" }}
            className="bg-light position-relative"
        >
            <button
                type="button"
                className="btn-close position-absolute top-0 mt-3 end-0 me-4"
                onClick={() => handleaddProduct(false)}
                aria-label="Close"
            ></button>
            <div className="w-100 h-100 d-flex justify-content-center align-items-center">
                <div className="row d-flex h-75 border rounded w-100 gap-1">
                    <h3 className="text-dark w-100 text-center py-2">
                        Product's Informations
                    </h3>
                    <div className="col bg-white py-2">
                        <div class="form-floating my-1 ">
                            <input
                                type="text"
                                class="form-control"
                                id="floatingInput1"
                                placeholder="title of product"
                                value={info.title}
                                onChange={(e) =>
                                    setInfo({ ...info, title: e.target.value })
                                }
                            />
                            <label for="floatingInput1">title of product</label>
                        </div>
                        <div class="form-floating my-1 ">
                            <input
                                type="number"
                                class="form-control"
                                id="floatingInput2"
                                placeholder="insert the previous price of the product"
                                value={info.previous_price}
                                onChange={(e) =>
                                    setInfo({
                                        ...info,
                                        previous_price: e.target.value,
                                    })
                                }
                            />
                            <label for="floatingInput2">
                                insert the previous price of the product
                            </label>
                        </div>
                        <div class="form-floating my-1 ">
                            <input
                                type="number"
                                class="form-control"
                                id="floatingInput3"
                                placeholder="insert the current price of the product"
                                value={info.current_price}
                                onChange={(e) =>
                                    setInfo({
                                        ...info,
                                        current_price: e.target.value,
                                    })
                                }
                            />
                            <label for="floatingInput3">
                                insert the current price of the product
                            </label>
                        </div>

                        <div class="form-floating my-1">
                            <textarea
                                class="form-control"
                                placeholder="insert the description of the product"
                                id="floatingTextarea"
                                value={info.description}
                                onChange={(e) =>
                                    setInfo({
                                        ...info,
                                        description: e.target.value,
                                    })
                                }
                            ></textarea>
                            <label for="floatingTextarea">description</label>
                        </div>
                        <div class="form-floating my-1">
                            <select
                                class="form-select"
                                id="floatingSelect"
                                aria-label="select the category of the product"
                            >
                                <option selected>Open this select menu</option>
                                <option value="men">Men</option>
                                <option value="women">Women</option>
                                <option value="kids">kids</option>
                            </select>
                            <label for="floatingSelect">
                                select the category of the product
                            </label>
                        </div>
                    </div>
                    <div className="col bg-white py-2">
                        <div class="form-floating">
                            <select
                                className="form-select"
                                id="floatingSelect"
                                aria-label="select the section of the product"
                            >
                                <option selected>Open this select menu</option>
                                <option value="football">Football</option>
                                <option value="basketball">Basketball</option>
                                <option value="handball">Handball</option>
                            </select>
                            <label for="floatingSelect">
                                select the section of the product
                            </label>
                        </div>
                        <div className="my-3  border rounded py-1 px-1">
                            <h6 className="text-dark d-block w-100 ms-2">
                                sizes available
                            </h6>
                            <div className="d-flex justify-content-around  ">
                                {size.map((s, index) => (
                                    <div
                                        key={index}
                                        className="position-relative text-dark size_hover px-3 py-2"
                                        style={{ cursor: "pointer" }}
                                        value={s}
                                        onClick={() =>
                                            setInfo({
                                                ...info,
                                                sizeAvailable: [
                                                    ...(info.sizeAvailable.includes(
                                                        s
                                                    )
                                                        ? info.sizeAvailable.filter(
                                                              (sz) =>
                                                                  sz != s &&
                                                                  sz != false
                                                          )
                                                        : info.sizeAvailable.filter(
                                                              (sz) =>
                                                                  sz != false
                                                          )),
                                                    !info.sizeAvailable.includes(
                                                        s
                                                    ) && s,
                                                ],
                                            })
                                        }
                                    >
                                        {s}
                                        {info.sizeAvailable.includes(s) && (
                                            <span className="text-success position-absolute top-0 right-0">
                                                <FaCircleCheck />
                                            </span>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="my-3  border rounded py-1 px-1">
                            <h6 className="text-dark d-block w-100 ms-2">
                                colors available
                            </h6>
                            <div className="d-flex justify-content-around my-3">
                                {colors.map((c, index) => (
                                    <div
                                        key={index}
                                        title={c}
                                        style={{
                                            height: "20px",
                                            width: "20px",
                                            backgroundColor: c,
                                            cursor: "pointer",
                                            borderWidth: "5px",
                                            borderStyle: "double",
                                        }}
                                        className={`position-relative rounded-circle mx-2 border ${
                                            info.colors.includes(c)
                                                ? "border-success"
                                                : "border-secondary"
                                        } `}
                                        onClick={() =>
                                            setInfo({
                                                ...info,
                                                colors: [
                                                    ...(info.colors.includes(
                                                        c
                                                    )
                                                        ? info.colors.filter(
                                                              (cs) =>
                                                                  cs != c &&
                                                                  cs != false
                                                          )
                                                        : info.colors.filter(
                                                              (cs) =>
                                                                  cs != false
                                                          )),
                                                    !info.colors.includes(
                                                        c
                                                    ) && c,
                                                ],
                                            })
                                        }
                                    >
                                        {info.colors.includes(c) && (
                                            <FaCheck
                                                className="text-success font-bold position-absolute top-0 end-0 "
                                                style={{ fontWeight: "900" }}
                                            />
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="d-flex justify-content-around">
                        <div className="form-floating my-1 ">
                            <input
                                type="text"
                                className="form-control"
                                id="floatingInput4"
                                placeholder=" the supported company"
                                value={info.company}
                                onChange={(e) =>
                                    setInfo({
                                        ...info,
                                        company: e.target.value,
                                    })
                                }
                            />
                            <label for="floatingInput4">
                                 the supported company
                            </label>
                        </div>
                        <div className="form-floating my-1 ">
                            <input
                                type="number"
                                class="form-control"
                                id="floatingInput4"
                                placeholder=" the quantity"
                                value={info.quantity}
                                onChange={(e) =>
                                    setInfo({
                                        ...info,
                                        quantity: e.target.value,
                                    })
                                }
                            />
                            <label for="floatingInput4">
                                 the quantity
                            </label>
                        </div>
                        </div>
                    </div>
                    <div className="col bg-white py-2 d-flex justify-content-center align-items-center ">
                        <div className={`${image ? "":"bg-dark bg-gradient"} w-75 h-100 d-flex justify-content-center align-items-center elementHoverd`} style={{cursor:'pointer',overflow:'hidden'}} onClick={()=>imageProduct.current.click()}>
                                <img src={image} alt="image product" className={`${image ? "":"d-none"} w-100 `}/>
                                <FaImage className={image ? "d-none":""}/>
                                <input type="file" name="" id="" ref={imageProduct} onChange={displayImage} className="d-none" />
                        </div>
                    </div>
                </div>
            </div>
            <div className=" w-100 d-flex justify-content-end gap-3 position-absolute bottom-0 align-items-center mb-2 pe-2">
                <button className="btn btn-success" onClick={handleProductInfo}>save</button>
                <button className="btn btn-warning">reset</button>
            </div>
        </div>
    );
}

export default AddProduct;
