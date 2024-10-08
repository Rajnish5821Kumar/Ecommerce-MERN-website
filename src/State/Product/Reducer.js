import { FIND_PRODUCTS_FAILURE, FIND_PRODUCTS_REQUEST, FIND_PRODUCTS_SUCCESS, FIND_PRODUCT_BY_ID_FAILURE, FIND_PRODUCT_BY_ID_REQUEST, FIND_PRODUCT_BY_ID_SUCCESS } from "./ActionTypes"

const initialState={
    products:[],
    product:[],
    loading:false,
    error:null
}

 export const customerProductReducer=(state=initialState,action)=>{
    switch(action.type){
        case FIND_PRODUCTS_REQUEST:
        case FIND_PRODUCT_BY_ID_REQUEST:
                return{...state, loading:true, error:null}

        case FIND_PRODUCTS_SUCCESS:
            return{...state, loading:false, products:action.payload, error:null}
        case FIND_PRODUCT_BY_ID_SUCCESS:
            return{...state, loading:false, product:action.payload, error:null}

        case FIND_PRODUCTS_FAILURE:
            return{...state, loading:false, error:action.payload}
        case FIND_PRODUCT_BY_ID_FAILURE:
            return{...state, loading:false, error:action.payload}

                default:
                    return state;
    }
}