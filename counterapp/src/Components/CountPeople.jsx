import React, { Component } from 'react';
import '../Stylesheets/mystyle.css';

class CountPeople extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            entryCount:0,
            exitCount:0,
            c:0
         };
         this.updateEntry = this.updateEntry.bind(this);
         this.updateExit=this.updateExit.bind(this);
    }
   updateEntry()
   {
       console.log("entry called");
       this.setState((prevState,props)=>{
           return {entryCount:prevState.entryCount+1}
       });
   }
   updateExit()
   {
       this.setState((prevState,props)=>{
           return {exitCount:prevState.exitCount+1}
       });
   }
    render() { 
        return (
            <div className="center">
                <table>
                    <tbody>
                    <tr>
                        <td><button onClick={this.updateEntry}>Login</button><br/><span>{this.state.entryCount} people entered !!</span></td>
                        <td><button onClick={this.updateExit}>Logout</button><br/><span>{this.state.exitCount} people exited !!</span></td>
                    </tr>
                    </tbody>
                </table>

                
                
            </div>
          );
    }
}
 
export default CountPeople;