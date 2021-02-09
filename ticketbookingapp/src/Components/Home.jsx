import React, { Component } from 'react';
import Greetings from './Greetings'
import LoginButton from './LoginButton';
import LogoutButton from './LogoutButton';
class Home extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            login : false
         };
         this.toggleLog=this.toggleLog.bind(this);
    }
    toggleLog()
    {
        this.setState({
            login : !this.state.login
        });
    }
    render() { 
        return ( 
            <div>
            <Greetings isLoggedIn={this.state.login} />
            {
               this.state.login?<LogoutButton onClick={this.toggleLog}/>:<LoginButton onClick={this.toggleLog}/>
            }

            </div>
           

         );
    }
}
 
export default Home;