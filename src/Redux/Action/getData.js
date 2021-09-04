import axios from 'axios';
import { GET_ERRORS, GET_LODING, GET_PAGE } from '../types';



export const getPaginated = (page, limit) => dispatch => {
    axios.get(`https://60d075407de0b20017108b89.mockapi.io/api/v1/animals?page=${page}&limit=${limit}`)
    .then(res => dispatch({
        type: GET_PAGE,
        payload: res.data
    }))
    .then(res => dispatch(setLoading()))
    .catch(err => dispatch({
        type: GET_ERRORS,
        payload: err.response.data
    }))
}



export const setLoading = () => {
    return {
        type: GET_LODING
    };
}