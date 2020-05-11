//Se importan los types
import {
    SAVE_RANDOM_CUSTOMER_ID,
    SAVE_RANDOM_CUSTOMER_ID_EXIT
} from '../types';

/**cada reducer tiene su propio state */
/*el state siempre es un objeto, pensar que propiedades
debe tener el state de customer
*/
const initialState={
    id:null, 
    error: null
}

/*El reducer siempre es una función, el state si no se pasa va a ser el stata inicial
el store pasa el store y la acción a ejecutar (action), en el action siempre se pasa un type
    el reducer debe ser una función pura, no debe realizar side effects
    No debe mutar los argumentos
    No debe llamar a funciones no puras (Date.now(), Math.random(), etc)
*/
export default function (state=initialState, action){
    switch(action.type){
        /*Aquí van todos los case que van a describir lo que va a pasar en la app
        y van a ir cambiando el state, de acuerdo a algo llamado el payload
        siempre hay que retornar uno por default;
        */
        case SAVE_RANDOM_CUSTOMER_ID:
            return {
                ...state,
                error:action.payload
            }
        case SAVE_RANDOM_CUSTOMER_ID_EXIT:
            return {
                ...state,               
                id:action.payload, 
                error: false
            }

        default:
            return state;
    }
}