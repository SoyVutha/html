import React, { createContext, useContext, useState } from 'react';

const ResultContext = createContext();
const baseURL = "https://google-search74.p.rapidapi.com/?query=Nike&limit=10&related_keywords=true";

export const ResultContextProvider = ({ children }) => {
    const [resultData, setResultContext] = useState([]); // Rename this variable
    const [isloading, setisloading] = useState(false);
    const [searchTerm, setsearchTerm] = useState("");

    const getreuslt = async (type) => {
        setisloading(true);
        const response = await fetch(`${baseURL}${type}`, {
            method: 'GET',
            headers: {
                'x-rapidapi-host': 'google-search74.p.rapidapi.com',
                'x-rapidapi-key': '5248b49b66msh507a92fb6292aafp15c0d3jsnd402e4fee127'
            }
        });
        const data = await response.json();
        setResultContext(data); // Update state here
        setisloading(false);
        console.log(data);
    }

    return (
        <ResultContext.Provider value={{ getreuslt, resultData, isloading, searchTerm, setsearchTerm }}>
            {children}
        </ResultContext.Provider>
    );
};

// Hook to use the context
export const useResultcontext = () => useContext(ResultContext);
