import React from 'react';




const CompanyDetailsComponent = (props) => {
    
    return ( 
        <div className="col-sm-12 col-md-6 col-lg-4">
            <div className="card m-2" >
            <div className="card-header card-title">{props.title}</div>
            <div className="card-body">
                <p className="card-text text-muted">{props.content}</p>
            </div>
            <div className="card-footer">
            Today's Price  : ${props.price} <span>{props.children}</span>
            </div>
            </div>
        </div>
     );
}
 
export default CompanyDetailsComponent;