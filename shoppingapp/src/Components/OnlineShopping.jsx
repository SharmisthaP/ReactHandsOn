import React, { Component } from 'react';
import Cart from './Cart';
import '../Stylesheets/mystyle.css';

class OnlineShopping extends Component {

    render() { 

        const cartInfo=[
            {itemname:"TV",itemprice:12000},
            {itemname:"Washing Machine",itemprice:14000},
            {itemname:"Moblie",itemprice:1300},
            {itemname:"Fridge",itemprice:17000},
            {itemname:"Laptop",itemprice:80000}
        ]
        return (  
            <div>
                <h1>Items Ordered : </h1>
                <div className="card">
                    <Cart items={cartInfo} />
                </div>
            </div>
        );
    }
}
 
export default OnlineShopping;