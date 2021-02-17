import React ,{useContext,useEffect,useState}from 'react';
import Remove from './removecomponent';
import CompanyDetailsComponent from './companydetailscomponent';
import axios from 'axios';
import { AuthContext } from '../Contexts/AuthContext';


const WatchListComponent = (props) => {

    const {userId}=useContext(AuthContext);

    const [data, setData] = useState([]);

    useEffect(() => {
        console.log(`http://localhost:8080/watchList/${userId}`);
        axios.get(`http://localhost:8080/watchList/${userId}`)
        .then(res=>setData(res.data))
        .catch(err => console.log(err));
      },[]);

    const removeFromWatchList=(userId,companyId)=>{
    axios.delete(`http://localhost:8080/watchList/${userId}/${companyId}`)
    .then(res=>{
                axios.get(`http://localhost:8080/watchList/${userId}`)
                .then(res=>setData(res.data))
                .catch(err => console.log(err));
    })
    .catch(err=>console.log(err));
    
    }
    return ( 
        <React.Fragment>
        <h1 className="m-3"> My Companies List</h1>
        <br/>
        {data.length===0?<h3 className="m-3">No  company stock prices  added to watch list</h3>:
         <div className="row">
         {
         data.map((watch,i)=>{
             return(
                 
                <CompanyDetailsComponent key={watch.company.companyId} title={watch.company.companyName} content={watch.company.description} price={watch.company.currentStockPrice} >
                         <Remove onClick={()=>removeFromWatchList(userId,watch.company.companyId)} />
                </CompanyDetailsComponent>
                
             )
         })}
     </div>
        
        }
       
        </React.Fragment>
     );
}
 
export default WatchListComponent;