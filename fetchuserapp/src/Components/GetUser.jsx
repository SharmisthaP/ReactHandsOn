import React, { Component } from 'react';

class GetUser extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            person :{
                name:{
                    title:"",
                    first:"",
                    last:""
                },
                picture:{
                    large:""
                }
            },
            loading:true
         };
    }

    async componentDidMount()
    {
        const url ="https://api.randomuser.me/";
        const response =await fetch(url);
        const data =await response.json();
        this.setState({person:data.results[0],loading:false});
        console.log(data.results[0]);
    }
    render() { 
        return ( 
            <div>
                <h1>{this.state.person.name.title} {this.state.person.name.first} {this.state.person.name.last} </h1>
                <img src={this.state.person.picture.large} alt="profile pic" width="25%" height="25%" />
            </div>

         );
    }
}
 
export default GetUser;