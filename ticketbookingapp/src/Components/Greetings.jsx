import React, { Component } from 'react';
import GuestGreetings from './GuestGreetings';
import UserGreetings from './UserGreetings';

const Greetings = (props) => {

    const isLoggedIn=props.isLoggedIn;
    console.log(isLoggedIn+"hrr");
    if(isLoggedIn)
    {
        
        return <UserGreetings />;
    }
    else
        return <GuestGreetings/>;
}
 
export default Greetings;