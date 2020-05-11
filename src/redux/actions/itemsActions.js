import {
    SAVE_JSON_FIRST_TIME,
    SAVE_JSON_FIRST_TIME_SUCCESS
} from '../types';  
import { wait } from '@testing-library/react';
import  {jsonItems,itemsArray} from '../../helpers';

export function saveJsonItemListFirstTime(){
    return async (dispatch)=>{
            dispatch(saveJsonFirstTime());
            try{   
                console.log("Cargar json al localstorage, solo la primera vez");
                                           
                //Lee el archivo json del servidor y lo guarda en el state y tambien 
                //En localStorage             
                //Si todo sale bien
                await dispatch(saveJsonFirstTimeSuccess(jsonItems()))
                           
            }catch (error){
                console.log("Ocurrio el error:",error);                
            }
    }
}

const saveJsonFirstTime=()=>({
    type:SAVE_JSON_FIRST_TIME,
    payload:true
});

const saveJsonFirstTimeSuccess = (items)=>({
    type:SAVE_JSON_FIRST_TIME_SUCCESS,
    payload:items
});
   