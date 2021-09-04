import { combineReducers } from "redux";
import getAnimalsData from "./animalReducer";

export default combineReducers({
    animals: getAnimalsData
})