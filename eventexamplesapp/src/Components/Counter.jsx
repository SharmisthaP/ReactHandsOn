import React, { Component } from 'react';

const CustomButton = ({ onPress }) => {
    return (
      <button type="button" onClick={onPress}>
        Click on me
      </button>
    );
  }



class Counter extends Component {
    constructor(props) {
        super(props);
        this.state = { 
           count:0
         };
         this.increment = this.increment.bind(this);
         this.decrement=this.decrement.bind(this);
         this.sayWelcome=this.sayWelcome.bind(this);
    }
   increment()
   {
     
       this.setState((prevState,props)=>{
           return {count:prevState.count+1}
       });
       alert("Hello Member");
   }
   decrement()
   {
       this.setState((prevState,props)=>{
           return {count:prevState.count-1}
       });
   }
   sayWelcome(msg) {
    alert(msg);
   }
   handleEvent = () => {
    alert("I was clicked");
  };
    
    render() { 
        return ( 
            <div>
                <h1>{this.state.count}</h1>
                <button onClick={this.increment}>Increment</button><br/>
                <button onClick={this.decrement}>Decrement</button><br/>
                <button onClick={() => this.sayWelcome("welcome")}> Say welcome </button><br/>
                <CustomButton onPress={this.handleEvent} /><br/>
                
            </div>
         );
    }
}
 
export default Counter;