import React from 'react';

const Courses = () => {
    let courses =[
        {id:1001,cname:'Angular',startdate:'4/5/2021'},
        {id:1002,cname:'React',startdate:'6/3/20201'}
      ]; 
    return (<div> 
        {   
            courses.map((course) =>
            <div key={course.id}>
            <h1>{course.cname}</h1>
            <h4>{course.startdate}</h4>
            </div>)
        }
     </div> 
     );
}
 
export default Courses;