import React, { useState } from "react";
import {
    FaPenToSquare,
    FaTrash,
    FaEye,
    FaEllipsisVertical,
} from "react-icons/fa6";
import AddProduct from "../Element/AddProduct";
function Products({ products }) {
    const [toggleEllipsis, settoggleEllipsis] = useState({
        toggle:false,
        key:null
    });
    return (
        <div className="position-relative">
            <div>
                <div></div>
            </div>
            <table className="table table-striped table-hover text-center">
                <tr className="position-sticky top-0">
                    <th>Product ID</th>
                    <th>Product Name</th>
                    <th>Current Price</th>
                    <th>Stock</th>
                    <th>Category</th>
                    <th>Section</th>
                    <th>Actions</th>
                </tr>
                {products.map((product,index) => (
                    <tr key={product.id} className="table-hover">
                        <td>{product.id}</td>
                        <td>{product.title}</td>
                        <td>{product.current_price}</td>
                        <td>{product.quantity}</td>
                        <td>{product.category}</td>
                        <td>{product.section}</td>
                        <td className="d-flex justify-content-center">
                            <div className="bg-transparent text-light position-relative">
                                <FaEllipsisVertical
                                    style={{ cursor: "pointer" }}
                                    
                                    onClick={()=>settoggleEllipsis({...toggleEllipsis,toggle:!toggleEllipsis.toggle,key:index})}
                                />
                            </div>
                            {toggleEllipsis.toggle && toggleEllipsis.key == index &&
                            
                            <ul className="list-group position-absolute mt-5 me-5" style={{fontSize:'12px',width:'120px',zIndex:'9'}} key={product.id}>
                                <li className="d-flex justify-content-start ps-2 align-items-center list-group-item">
                                <FaPenToSquare />
                                Edit
                                </li>
                                <li className="d-flex justify-content-start ps-2 align-content-center list-group-item">
                                    <FaTrash />
                                    Delete
                                </li>
                                <li className="d-flex justify-content-start ps-2 align-content-center list-group-item">
                                    <FaEye />
                                    See details
                                </li>
                            </ul>
                            }
                        </td>
                    </tr>
                ))}
            </table>

            {/* <div
                className="position-fixed  opacity-5 bottom-0 start-0 top-0 right-0   w-100 d-flex justify-content-center align-items-center"
                style={{ zIndex: "9999", backdropFilter: "brightness(50%)" }}
            >
                <AddProduct  />
            </div> */}
        </div>
    );
}

export default Products;
