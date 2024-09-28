import React, { createContext, useContext, useState } from 'react';

// Create a new context
const GlobalContext = createContext();

// Custom hook to use the GlobalContext easily
export const useGlobalContext = () => {
    return useContext(GlobalContext);
};

const Context = ({ children }) => {
    const [name, setName] = useState("HElllllo");

    return (
        <GlobalContext.Provider value={{ 
            name,
            
        }}>
            {children}
        </GlobalContext.Provider>
    );
}

export default Context;
