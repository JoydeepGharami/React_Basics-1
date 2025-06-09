import Book from './Book';
import React from 'react';
import books from './books.json';

 

const BookList = () => {
  return (
    <div>
      {books.map((ele,index) =>{

    return  <Book image={ele.image} title={ele.title} publisher={ele.publisher} price={ele.price}/>
      })}
    </div>
  );
};

export default BookList;
