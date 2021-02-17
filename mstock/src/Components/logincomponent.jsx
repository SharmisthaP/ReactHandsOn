import React, { Component } from 'react';
import { AuthContext } from '../Contexts/AuthContext';
import MenuComponent from './menucomponent';
import axios from 'axios';

//axios.interceptors.request.use(config=>{console.log(`${config.method} sent to ${config.url}`)});

class LoginComponent extends Component {
    static contextType = AuthContext;
    constructor(props) {
        super(props);
        this.state = { 
            email:"",
            password:"",
            errors:{
                email:"",
                password:"",
                invalid:""
            }
         }
         this.handleSubmit = this.handleSubmit.bind(this);
         this.handleEmailChange=this.handleEmailChange.bind(this);
         this.handlePasswordChange=this.handlePasswordChange.bind(this);
         this.handleValidation=this.handleValidation.bind(this);
    }
    handleEmailChange(event) {
        this.setState({email: event.target.value});
    }
    handlePasswordChange(event) {
        this.setState({password: event.target.value});
    }
    handleSubmit(event) {
        event.preventDefault();
        const {toggleAuth,setId} = this.context;
        const res=this.handleValidation();
        console.log(res)
        if(res)
        {
            console.log("inside axios")
            const user={
                email : this.state.email,
                password : this.state.password
            };
            axios.post("http://localhost:8080/users",user)
            .then(res=>{
                console.log(res.data);
                toggleAuth();
                setId(res.data.id);
                this.props.history.push("/companies");
            })
            .catch(err => {
                this.setState({errors:{...this.state.errors,invalid:"Invalid user"}});
                console.log(err);
            });
        }
        else
        console.log("inelse part");
    }
    
    handleValidation(){

        let temp = {
            email:"",
            password:"",
            invalid:""
        };
        let valid=true;
        const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        
        if(this.state.email==="")
        {
            valid=false;
            temp.email="Email is required";
        }
        else if(!re.test(this.state.email))
        {
          
            valid=false;
            temp.email="Invalid email";
        }
        
        if(this.state.password==="")
        {
            valid=false;
            temp.password="Password is required";
        }
        this.setState({
            errors:temp
        });
        if(valid)
            return true;
        else
            return false;
        
    }
    displayErrors(){
       return(
           <ul className="text-danger">
               {this.state.errors.email!==""?<li>{this.state.errors.email}</li>:null}
               {this.state.errors.password!==""?<li>{this.state.errors.password}</li>:null}
               {this.state.errors.invalid!==""?<li>Invalid username/password</li>:null}
           </ul>
       )

    }

    render() { 
        
        return (
            <React.Fragment>
            <div className="container">
                <h1 className="mt-3">Let's get started by Login</h1>
                <small className="text-danger">Fields marked with * are mandatory</small>
                {this.displayErrors()}
                <form onSubmit={this.handleSubmit}>
                <div className="form-group">
                    <label >Email address<span className="text-danger">*</span></label>
                    <input type="text" className="form-control" id="email" value={this.state.email} onChange={this.handleEmailChange}/>
                </div>
                <div className="form-group">
                    <label >Password<span className="text-danger">*</span></label>
                    <input type="password" className="form-control" id="password" value={this.state.password} onChange={this.handlePasswordChange}/>
                </div>
                <input type="submit"  className="btn btn-primary" value="Submit" />
                
                </form>
            </div>
            </React.Fragment>
          );
    }
}
 
export default LoginComponent;