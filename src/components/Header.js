import React from 'react';
import {Link} from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar'
import {useDispatch, useSelector} from 'react-redux';

const Header = () => {

    const userId = useSelector(state => state.customer.id);

    return (  
     
        // Se implemente link para que la navegación sea más rápida
        <Navbar bg="dark" variant="dark">
            <Navbar.Brand >
                <h1><Link to={"/"} className='text-light'>
                    Redux, Items on localStorage redux-persist
                </Link></h1>    
                <p className='text-light'>UserId: {userId}</p>                
            </Navbar.Brand>
            
        </Navbar>
    );
}
 
export default Header;