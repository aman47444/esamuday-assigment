import { GET_ERRORS, GET_LODING, GET_PAGE } from "../types"

const initialState = {
    animals: [],
    loading: false,
    err: "",
}

const getAnimalsData = (state=initialState, action) => {
    switch(action.type) {
        case GET_LODING:
            return {
                ...state,
                loading: true
            }
        case GET_ERRORS:
            return {
                err: action.payload
            }
        case GET_PAGE:
            return {
                ...state,
                animals: action.payload,
                loading: true
            }
        default:
            return state    
    }
}

export default getAnimalsData;