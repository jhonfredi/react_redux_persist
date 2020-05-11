import {
    SAVE_RANDOM_CUSTOMER_ID,
    SAVE_RANDOM_CUSTOMER_ID_EXIT
} from '../types';  

export function saveRandomCustomerIdAction(newId){
    return async (dispatch)=>{
            dispatch(saveRandomCustomerId());
            try{
                //Si todo sale bien
                console.log("Se asigna el id al usuario, solo la primera vez",newId);                
                dispatch(saveRandomCustomerIdExit(newId))
               
            }catch (error){
                console.log(error);                
            }
    }
}

const saveRandomCustomerId=()=>({
    type:SAVE_RANDOM_CUSTOMER_ID,
    payload:false
});

const saveRandomCustomerIdExit = (randomId)=>({
    type:SAVE_RANDOM_CUSTOMER_ID_EXIT,
    payload:randomId
});
   