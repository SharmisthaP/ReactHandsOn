import React, { Component } from 'react';
import '../Stylesheets/mystyles.css';

const Office = () => {

    const elemwnt = "Office Space"
    const jsxatt = <img src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8b2ZmaWNlJTIwc3BhY2V8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
    width="25%" height ="25%" alt="Office space"/>
    const offices =[
        {name:"DBS",rent :50000,address:"Chennai"},
        {name:"EVC",rent :61000,address:"Kolkata"},
        {name:"FET",rent :65000,address:"Pune"},
    ]
    return ( 
        <div>
        <h1>{elemwnt} , at Affordable Prices</h1>
        <div>
        {offices.map((office,i)=>{
            return(
                <div key={i}>
                    {jsxatt}
                    <h1>Name: {office.name}</h1>
                    <h3>Address : {office.address}</h3>
                    <h3 className={office.rent>60000 ? "red" : "green" }>{office.rent}</h3>
                    
                </div>
        )})}
        </div>
        </div>
     );
}
 
export default Office;
