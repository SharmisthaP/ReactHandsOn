import React, { Component } from 'react';

class Register extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            name:"",
            email:"",
            password:"",
            errors:{
                name:"",
                email:"",
                password:""
            }
         }
         this.handleSubmit = this.handleSubmit.bind(this);
         this.handleEmailChange=this.handleEmailChange.bind(this);
         this.handleNameChange=this.handleNameChange.bind(this);
         this.handlePasswordChange=this.handlePasswordChange.bind(this);
         this.handleValidation=this.handleValidation.bind(this);

    }
    handleNameChange(event) {
        this.setState({name: event.target.value});
      }
    handleEmailChange(event) {
    this.setState({email: event.target.value});
    }
    handlePasswordChange(event) {
        this.setState({password: event.target.value});
      }
    
    handleSubmit(event) {
        event.preventDefault();
        this.handleValidation();
    }

    handleValidation(){
       
        let temp = {
            name:"",
            email:"",
            password:""
        };
        const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        if(this.state.name.length<5)
        {
            temp.name="name must have 5 characters";
        }
        if(!re.test(this.state.email))
        {
          
            temp.email="invalid email";
        }
        if(this.state.password.length<8)
        {
            temp.password="password must have atleast 8 characters";
        }
        console.log(temp);
      this.setState({
          errors:temp
      },()=>{
        console.log(this.state.errors);
        let {name,email,password}=this.state.errors;
        let valid=true;
        if(name!=="")
        {
            valid=false;
            alert(name);
        }
        if(password!=="")
        {
            valid=false;
            alert(password);
        }
        if(email!=="")
        {
            valid=false;
            alert(email);
        }
        if(valid)
            alert("form is valid");

      });

       //console.log(this.state.errors);
      
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
                    <td><label>Email :</label></td>
                    <td><input type="text" value={this.state.complaint} onChange={this.handleEmailChange} /></td>
                </tr>
                <tr>
                    <td><label>Password :</label></td>
                    <td><input type="password" value={this.state.complaint} onChange={this.handlePasswordChange} /></td>
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
 
export default Register;