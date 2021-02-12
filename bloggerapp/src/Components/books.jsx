import React from 'react';

  const Books = () => {
    let books=[
        {id:101,bname:'Master React',price:670},
        {id:102,bname:'Deep Dive into Angular 11 ',price:800},
        {id:103,bname:'Mongo Essentials',price:450},
      ];
      return ( <ul>
          {
          books.map((book) =>
            <div key={book.id}>
            <h3>  {book.bname}</h3>
              <h4>{book.price}</h4>
            </div>
          )}
      </ul> );
  }
   
  export default Books;
