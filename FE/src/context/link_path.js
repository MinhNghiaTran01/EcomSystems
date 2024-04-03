import React, { createContext, useState } from 'react';

// User Context
const LinkPath = createContext();

export const LinkPathProvider = ({ children }) => {
  const [link, setLink] = useState([]);

  return (
    <LinkPath.Provider value={{ link,setLink}}>
      {children}
    </LinkPath.Provider>
  );
}

export default LinkPath;
