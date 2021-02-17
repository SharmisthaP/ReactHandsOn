import React from 'react';

const Watch = (props) => {
   if(props.disable)
    return ( 
        <button className="btn btn-primary ml-4" onClick={props.onClick} disabled>
           Watch
        </button>
     );
   else
   return(
      <button className="btn btn-primary ml-4" onClick={props.onClick} >
           Watch
        </button>

   );
}
 
export default Watch;