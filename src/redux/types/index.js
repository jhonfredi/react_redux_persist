/*los types solo describen lo que está pasando en la applicación
se usan tanto en el action como en el reducer
se crean todo en mayúscula
se utilizan en el action para ir describiendo y ejecutando ciertas funciones,
en el reducer se evaluan cada una de las condiciones y van a servir para modificar 
el state de acuerdo a lo que está sucediendo
*/
//Cada que ingresa un cliente se debe guardar un id aleatorio si no existe
export const SAVE_RANDOM_CUSTOMER_ID =  'SAVE_RANDOM_CUSTOMER_ID';
export const SAVE_RANDOM_CUSTOMER_ID_EXIT =  'SAVE_RANDOM_CUSTOMER_ID_EXIT';

export const SAVE_JSON_FIRST_TIME =  'SAVE_JSON_FIRST_TIME';
export const SAVE_JSON_FIRST_TIME_SUCCESS =  'SAVE_JSON_FIRST_TIME_SUCCESS';
