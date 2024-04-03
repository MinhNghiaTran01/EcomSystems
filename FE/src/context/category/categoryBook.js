import React, { createContext, useState } from 'react';

// User Context
const CategoryBook = createContext();

export const CategoryBookProvider = ({ children }) => {
  const [categoryBook, setCategoryBook] = useState([]);

  return (
    <CategoryBook.Provider value={{ categoryBook,setCategoryBook}}>
      {children}
    </CategoryBook.Provider>
  );
}

export default CategoryBook;
