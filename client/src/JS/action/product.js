import axios from 'axios';

import { EDIT_PRODUCT, GET_PRODUCT, GET_PRODUCTS_FAIL, GET_PRODUCTS_LOAD, GET_PRODUCTS_SUCCESS } from "../constant/actionTypes";

export const getProducts=()=> async(dispatch)=>{
    dispatch({type: GET_PRODUCTS_LOAD})
    try {
        let result =  await axios.get(`/api/product/`)
        dispatch ({type: GET_PRODUCTS_SUCCESS, payload : result.data.response})
        console.log(result);
    } catch (error) {
        dispatch ({type: GET_PRODUCTS_FAIL , payload: error})
        console.log(error)
    }
}

export const deleteProduct = (id)=>(dispatch)=>{
    axios.delete(`api/product/${id}`)
    .then((res)=>dispatch(getProducts()))
    .catch((err)=>console.log(err))
}

export const getProduct= (id)=>(dispatch)=>{
    axios.get(`/api/product/${id}`)
    .then ((res)=>dispatch({type:GET_PRODUCT, payload:res.data.response}))
    .catch((err)=>console.log(err))
}

export const  editProduct= (id, product)=>(dispatch)=>{
    axios.put(`/api/product/${id}`, product)
    .then((res)=>{
        dispatch ({type: EDIT_PRODUCT, payload: res.data.response})
    })
    .then (dispatch(getProducts()))
    .catch((err)=>console.log(err))
}

export const addProduct= (product)=> async(dispatch)=>{
    try {
        await axios.post(`/api/product/products`, product)
        dispatch (getProducts())
    } catch (error) {
        console.log(error)
    }
}