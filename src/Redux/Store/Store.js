import thunk from 'redux-thunk';
import { createStore, compose, applyMiddleware } from "redux";
import rootreducer from '../Reducer/index'
const initialState = {}
const middleware = [thunk];

const store = createStore( 
    rootreducer,
    initialState,
    compose(
        applyMiddleware(...middleware),
        window.devToolsExtension ? window.devToolsExtension() : f => f)
    );

export default store;