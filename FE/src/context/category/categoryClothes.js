import React, { createContext, useState } from 'react';

// User Context
const CategoryClothes = createContext();

export const CategoryClothesProvider = ({ children }) => {
  const [categoryClothes, setCategoryClothes] = useState([]);

  return (
    <CategoryClothes.Provider value={{ categoryClothes,setCategoryClothes}}>
      {children}
    </CategoryClothes.Provider>
  );
}

export default CategoryClothes;
