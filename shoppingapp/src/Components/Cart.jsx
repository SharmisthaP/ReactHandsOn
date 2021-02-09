import React, { Component } from 'react';
import '../Stylesheets/mystyle.css';

class Cart extends Component {
    render() { 
        return ( 

            
            <table>
                <thead>
                    <th>Name</th><th>Price</th>
                </thead>
                <tbody>
                    {this.props.items.map((item,i)=>(
                        <tr key={i} >
                            <td>{item.itemname}</td>
                            <td>{item.itemprice}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
           
         );
    }
}
 
export default Cart;