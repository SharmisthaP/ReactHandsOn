import React ,{Component,createContext} from 'react';

export const AuthContext = createContext();

class AuthContextProvider extends Component {
    state = { 
        isLoggedIn:false,
        userId:0
     }
     toggleAuth=()=>{
         console.log("toggle called");
         this.setState({isLoggedIn : !this.state.isLoggedIn});
    }
    setId=(id)=>{
        console.log("set Id called",id);
        this.setState({userId:id});
   }
    render() { 
        return ( 
            <AuthContext.Provider value={{...this.state,toggleAuth:this.toggleAuth,setId:this.setId}}>
                {this.props.children}
            </AuthContext.Provider>
         );
    }
}
 
export default AuthContextProvider;

