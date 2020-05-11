import React,{Fragment,useEffect,useState} from 'react';
import { Table, TableProps } from 'react-bootstrap';
import {useDispatch, useSelector} from 'react-redux';
//Actions de redux
import {saveRandomCustomerIdAction} from '../redux/actions/customerActions';
import {saveJsonItemListFirstTime} from '../redux/actions/itemsActions';
import {generateFirstId} from '../helpers';

import Item from './Item';

// import Table from 'react-bootstrap/Table'
const Items = () => {

    let saveId = true;
    //redux
    //Utilizar dispatcch y devuelve una función
    const dispatch = useDispatch();
    
    //obtener el state
    const itemList = useSelector(state => state.items.itemList.items);

    const userId = useSelector(state => state.customer.id);

    let  newId= -1;

    if(saveId){
        newId = generateFirstId();
    }   
    useEffect(()=>{
       
        //Cargar json al state y al localStorage la primera vez
        const loadJsonToState=()=>{
            dispatch(saveJsonItemListFirstTime());
        }
        //:TODO validar dónde debería ir esta valdiación
        if(itemList=== undefined || itemList.length=== 0){
            loadJsonToState();    
        }
    
        //Para poder llamar el action se debe utilizar una función de redux 
        const saveRandomId = (newId) => {
            //dispatch es una función que toma otra función
            dispatch(saveRandomCustomerIdAction(newId));
        }

        if(userId===null|| userId === undefined &&saveId){    
            saveRandomId(newId);
            saveId = false;
        }                                         
   
    },[])

    return (
        <Fragment>
            <h2 className='text-center my-5'>Items List </h2>

            {/* <table className='table table.striped'> */}
            <Table striped bordered hover responsive variant="dark">
                <thead>
                    <tr>
                        <th scope='col'>Title</th>
                        <th scope='col'>Content</th>
                        <th scope='col'>User</th>
                        <th scope='col'>City</th>
                    </tr>
                </thead>
                <tbody>
                 {itemList=== undefined || itemList.length=== 0 ? null :
                 (                      itemList.map((item)=>(
                    
                        <Item key={item.id}
                        item={item}/>   
                 )
                ))
                 }
 
  </tbody>
            </Table>
        </Fragment>

     );
} 
export default Items;