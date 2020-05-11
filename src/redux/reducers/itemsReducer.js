//Se importan los types
import {
    SAVE_JSON_FIRST_TIME,
    SAVE_JSON_FIRST_TIME_SUCCESS
} from '../types';

const initialState={
    itemList:[], 
    processing: null
}

export default function (state=initialState, action){
   
    switch(action.type){
   
        case SAVE_JSON_FIRST_TIME:
            return {
                ...state,
                processing:action.payload
            }
        case SAVE_JSON_FIRST_TIME_SUCCESS:
            return {
                ...state,
                itemList:action.payload,
                processing: false
            }     
    
        default:
            return state;
    }
}