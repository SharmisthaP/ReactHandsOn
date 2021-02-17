import React from 'react';

const Remove = (props) => {
    return ( 
        <button className="btn btn-danger ml-4" onClick={props.onClick}>
          Remove
        </button>
     );
}
 
export default Remove;