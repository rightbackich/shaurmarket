import React from 'react';
import { useReducer } from 'react';
import { JSON_API } from './../helpers/consts';


export const clientContext = React.createContext()

const INIT_STATE = {
    product: null,
    productDetail: null
}

const reducer = (state = INIT_STATE, action) => {
    switch (action.type) {
        case "GET_PRODUCTS":
            return { ...state, products: action.payload }
        case "GET_PRODUCT_DETAIL":
            return { ...state, productDetail: action.payload }
        default:
            return state
    }
}

const ClientContext = ({ children }) => {

    const [state, dispatch] = useReducer(reducer, INIT_STATE)

    const getProducts = async (searchWord = "",) => {
        const { data } = await axion(`${JSON_API}?q=${searchWord}`)
        dispatch({
            type: "GET_PRODUCTS",
            payload: data
        })
    }
    return (
        <div>

        </div>
    );
};

export default ClientContext;