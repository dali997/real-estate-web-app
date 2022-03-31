import { EDIT_PRODUCT, GET_PRODUCT, GET_PRODUCTS_FAIL, GET_PRODUCTS_LOAD, GET_PRODUCTS_SUCCESS } from "../constant/actionTypes";


const initialState = {
    products:[],
    loadProduct : false,
    product: {},
    editProduct: "",
    errors: [],
    
}

export const productReducer = (state= initialState, {type, payload})=>{
    switch (type){
        case GET_PRODUCTS_LOAD:
            return {...state, loadProduct:true}
       

        case GET_PRODUCTS_SUCCESS:
            return {...state, products:payload, loadProducts:false}

        case GET_PRODUCTS_FAIL:
            return {...state,loadProducts:false, errors : payload}
        case GET_PRODUCT:
            return {...state , product : payload}
        case EDIT_PRODUCT:
            return {...state , editProduct:payload}
        default:
            return state;
    }
}