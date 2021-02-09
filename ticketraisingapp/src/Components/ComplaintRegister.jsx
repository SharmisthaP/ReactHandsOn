import React, { Component } from 'react';

class ComplaintRegister extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            name: "",
            complaint : "",
            complaintId: 1
         }

         this.handleNameChange= this.handleNameChange.bind(this);
         this.handleComplaintChange=this.handleComplaintChange.bind(this);
         this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleNameChange(event) {
        this.setState({name: event.target.value});
      }
    handleComplaintChange(event) {
    this.setState({complaint: event.target.value});
    }
    
    handleSubmit(event) {
        alert('Thanks ' + this.state.name+"\n"+"Your complaint was submitted"+"\n"+"Transaction ID  : "+this.state.complaintId);
        this.setState({
            complaintId: this.state.complaintId + 1
        })
        event.preventDefault();
      }
    
    render() { 
        return (
            
            <form onSubmit={this.handleSubmit}>
                <h1 style={{color:"red"}}>Register your complaint!!</h1>
                <table style={{marginLeft:"auto",marginRight:"auto"}}>
                <tbody>
                    <tr>
                        <td><label> Name : </label></td>
                        <td> <input type="text" value={this.state.name} onChange={this.handleNameChange} /></td>
                    </tr>
                    <tr>
                        <td><label>Complaint :</label></td>
                        <td><input type="text" value={this.state.complaint} onChange={this.handleComplaintChange} /></td>
                    </tr>
                    <tr>
                        <td><input type="submit" value="Submit" /></td>
                    </tr>
                </tbody>
            </table>
            </form>
          );
    }
}
 
export default ComplaintRegister;