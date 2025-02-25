import axios from "axios";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

const token = localStorage.getItem("token");

export const productsData = async () => {
    try {
            const response = await axios.get(
                "http://127.0.0.1:8000/api/products"
            );
            if(response.status >= 200){
                return response.data;
            }
        } catch (error) {
            return error;
        }
    };
