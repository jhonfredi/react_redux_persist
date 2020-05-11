import React from 'react';

const Item = ({item}) => {
    return (  
        <tr>
            <td>{item.title}</td>
            <td >{item.content}</td>
            <td>{item.user}</td>
            <td>{item.city}</td>
        </tr>
    );
}
 
export default Item;