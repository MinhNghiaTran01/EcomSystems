import React, { createContext, useState } from 'react';

// User Context
const CategoryMobile = createContext();

export const CategoryMobileProvider = ({ children }) => {
  const [categoryMobile, setCategoryMobile] = useState([]);

  return (
    <CategoryMobile.Provider value={{ categoryMobile,setCategoryMobile}}>
      {children}
    </CategoryMobile.Provider>
  );
}

export default CategoryMobile;
