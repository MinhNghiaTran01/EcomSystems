import React, { createContext, useState } from 'react';

// User Context
const Title = createContext();

export const TitleProvider = ({ children }) => {
  const [title, setTitle] = useState("Trang chủ");

  return (
    <Title.Provider value={{ title,setTitle}}>
      {children}
    </Title.Provider>
  );
}

export default Title;
