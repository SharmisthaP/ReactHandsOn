import React, { Component } from 'react';

class CurrencyConverter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            amount: 0,
            currency:"Euro"
        };
    
        this.handleChange = this.handleChange.bind(this);
        this.handleCurrencyChange = this.handleCurrencyChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }

    handleChange(event) {
    this.setState({amount: event.target.value});
    }
    handleCurrencyChange(event){
        this.setState({currency: event.target.value});
    }
    handleSubmit(event) {
        let rupees= parseInt(this.state.amount);
        alert('Converting to Euro..Amount is : ' + rupees*88.26);
        event.preventDefault();
    }

    render() { 
        return ( 
            <form onSubmit={this.handleSubmit}>
                <h1 style={{color:"green"}}> Currency Converter!!</h1>
                <label>
                    Amount: <input type="text" value={this.state.amount} onChange={this.handleChange} />
                </label><br/>
                <label>
                    Currency: <input type="text" value={this.state.currency} onChange={this.handleCurrencyChange}/>
                </label><br/>
                <input type="submit" value="Submit" />
            </form>
         );
    }
}
 
export default CurrencyConverter;