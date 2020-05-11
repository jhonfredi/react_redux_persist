/*Archivo en cargado de combinar todos los reduces
Siempre que creo un store, se requiere un reducer, el reducer
es cada pieza, productos, usuarios, clientes, cada uno de ellos va a 
tener su propio state, pero al final cada uno de ellos debe estar en uno solo
combineReducers: me permite combinar los reduce, ya que puedo agregar  
    cuantos reduces desee, siempre y cuando los combine, y tenga solo uno*/
import {combineReducers} from 'redux';
/* Importamos todos los reduces que tangamos, pero si es más de uno se debe utilizar 
combineReducers */
import customerReducer from './customerReducer';
import itemsReducer from './itemsReducer';

//Tecnica para crear un solo reducer, en caso de tener varios reducer
export default combineReducers({
    /*la parte de los productos se va a llamar productos y su reducer es productosReducer
        de esta forma podemos tener varios reducer y cada uno va a tener su state    
    */
    customer:customerReducer,
    items:itemsReducer
});