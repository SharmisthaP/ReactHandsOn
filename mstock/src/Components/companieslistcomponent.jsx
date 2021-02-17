import React ,{useContext,useEffect,useState}from 'react';
import CompanyDetailsComponent from './companydetailscomponent';
import '../Stylesheets/mystyles.css';
import Watch from './watchcomponent';
import { AuthContext } from '../Contexts/AuthContext';
import axios from 'axios';




const CompanyDetailsList = () => {
    const {isLoggedIn,userId}=useContext(AuthContext);
    const [data, setData] = useState([]);
    const [watching,setWatching]=useState([]);

    useEffect(() => {
        axios.get("http://localhost:8080/companies")
        .then(res=>{setData(res.data);
            axios.get(`http://localhost:8080/watchList/${userId}`).
            then(res=>{
                res.map(watch=>setWatching([...watching,watch.company.companyId]))
            })
            .catch(err=>console.log(err));
        })
        .catch(err => console.log(err));
      },[]);
      

    const adddToWatchList=(userId,companyId)=>{
        const add={
            userId,
            companyId
        }
        axios.post(`http://localhost:8080/watchList`,add)
        .then(res=>{
            setWatching([...watching,companyId]);
            alert("Company added to your watch list!");
        })
        .catch(err=>console.log(err));
     
    }
    return ( 
        <React.Fragment>
        
        <h1 className="m-3">Companies List</h1>
        <br/>
        <div className="row">
            {data.map((company)=>{
                if(isLoggedIn)
                return(

                        <CompanyDetailsComponent key={company.companyId} title={company.companyName} content={company.description} price={company.currentStockPrice} >
                            <Watch onClick={()=>adddToWatchList(userId,company.companyId)} disable={watching.includes(company.companyId)?true:false} />
                        </CompanyDetailsComponent>
                   
                )
                else
                return(

                    <CompanyDetailsComponent key={company.companyId} title={company.companyName} content={company.description} price={company.currentStockPrice} >
                            
                    </CompanyDetailsComponent>
               
                )
            })}
        </div>
        </React.Fragment>
     );
}
 
export default CompanyDetailsList;