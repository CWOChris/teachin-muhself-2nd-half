import { createContext, useState, useContext } from 'react';

// Initialize new context for students
const CountContext = createContext();

// We create a custom hook to provide immediate usage of the student context in other components
export const useCountContext = () => useContext(CountContext);

// StudentProvider is a function that will return a provider component that makes global state available
export default function CountProvider ({ children }) {
    const [count, setCount] = useState(0);
    
    return (
    <CountContext.Provider value={{ count: count,setCount:setCount  }}>
        {children}
    </CountContext.Provider> 
    );
};
