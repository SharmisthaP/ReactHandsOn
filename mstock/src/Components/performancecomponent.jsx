import React, { Component } from 'react';
import axios from 'axios';

class PerformanceComponent extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            companies :[],
            compare:[],
            company1:"",
            company2: "",
            from:"",
            to:""
         }
         this.handleSubmit = this.handleSubmit.bind(this);
         this.handleCompany1=this.handleCompany1.bind(this);
         this.handleCompany2=this.handleCompany2.bind(this);
         this.handleFrom=this.handleFrom.bind(this);
         this.handleTo=this.handleTo.bind(this);
    }
    handleCompany1(event) {
        this.setState({company1: event.target.value});
    }
    handleCompany2(event) {
        this.setState({company2: event.target.value});
    }
    handleFrom(event) {
        this.setState({from: event.target.value});
    }
    handleTo(event) {
        this.setState({to: event.target.value});
    }
    handleSubmit(event) {
        event.preventDefault();
        console.log(this.state.company1,this.state.company2);
       axios.get(`http://localhost:8080/stocks/compare-performance?companyCode1=${this.state.company1}&companyCode2=${this.state.company2}&from=${this.state.from}&to=${this.state.to}`)
        .then(res=>this.setState({compare:res.data}))
        .catch(err=>console.log(err));

    }
    compare=()=>{
        let count=1;
        if(this.state.compare.length===0)
        return null;
       return(
        <table className="table">
            <tbody>
            <th >Date</th>
            <th >Company</th>
            <th >Stock Price</th>
            {this.state.compare.map((data,i)=>{
                if(count%2==0)
                {
                    count++;
                    return(<tr key={i}>
                            <td></td>
                            <td>{data.company.companyName}</td>
                            <td>{data.company.currentStockPrice}</td>
                        </tr>)
                }
                else{
                    count++;
                    return(
                        <tr key={i}>
                            <td style={{fontWeight:"bold"}}>{data.date.split("-").reverse().join("-")}</td>
                            <td>{data.company.companyName}</td>
                            <td>{data.company.currentStockPrice}</td>
                        </tr>

                    )
                }

            })}
            </tbody>
        </table>
       ) ;
        
    }
    componentDidMount(){
        axios.get("http://localhost:8080/companies")
        .then(res=>this.setState({companies:res.data}))
        .catch(err => console.log(err));
    }
    render() { 
        return ( 
            <React.Fragment>
            <div className="container">
                <h1 className="mt-3">Compare Potential Companies</h1>
                <h3 className=" text-muted">Make smart investment decisions</h3>
                <br/>
                <form onSubmit={this.handleSubmit}>
                <div className="row">
                    <div className="col-lg-6 col-md-12 form-group">
                        <label>Select Company 1</label>
                        <select className="custom-select" onChange={this.handleCompany1}>
                        <option selected value="0">choose..</option>
                            {this.state.companies.map((company)=> {
                                return(<option value={company.companyId}>{company.companyName}</option>)
                            })}
                        </select> 
                    </div>
                    <div className="col-lg-6 col-md-12 form-group">
                        <label>Select Company 1</label>
                        <select className="custom-select" onChange={this.handleCompany2}>
                        <option selected value="0">choose..</option>
                            {this.state.companies.map((company)=> {
                                return(<option value={company.companyId}>{company.companyName}</option>)
                            })}
                        </select> 
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-6 col-md-12">
                    <div className="form-group">
                        <label >From Date</label>
                        <input type="date" className="form-control" id="from" value={this.state.from} onChange={this.handleFrom}/>
                    </div>
                    </div>
                    <div className="col-lg-6 col-md-12">
                    <div className="form-group">
                        <label >To Date</label>
                        <input type="date" className="form-control" id="from" value={this.state.to} onChange={this.handleTo}/>
                    </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-12">
                        <input type="submit"  className="btn btn-primary" value="Fetch Details" />
                    </div>
                </div>
                </form>
                <br/>
                <div className="row">{this.compare()}</div>
            </div>
            </React.Fragment>
         );
    }
}
 
export default PerformanceComponent;
