import { createContext, useState } from "react";

export const UserInputContext = createContext();

export const UserInputProvider = ({ children }) => {
  const [formItems, setFormItems] = useState([
    { name: "name", type: "text" },
    { name: "email", type: "email" },
    { name: "address", type: "text" },
    { name: "skills", type: "text" },
    { name: "password", type: "password" },
    {},
    {name: 'CV', type: 'file'}
  ])
  


  return (
    <UserInputContext.Provider value={[ {formItems} , setFormItems]}>
      {children}
    </UserInputContext.Provider>
  );
};
