import React, { createContext, useState } from 'react';

// User Context
const BookWithCategoryName = createContext();

export const BookWithCategoryNameProvider = ({ children }) => {
  const [allBookWithCategoryName, setAllBookWithCategoryName] = useState([]);

  return (
    <BookWithCategoryName.Provider value={{ allBookWithCategoryName,setAllBookWithCategoryName}}>
      {children}
    </BookWithCategoryName.Provider>
  );
}

export default BookWithCategoryName;
