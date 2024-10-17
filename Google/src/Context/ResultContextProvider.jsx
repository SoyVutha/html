import React, { createContext, useContext, useState } from 'react';

const ResultContext = createContext();
const baseURL = "https://google-search74.p.rapidapi.com/?query=Nike&limit=10&related_keywords=true";

export const ResultContextProvider = ({ children }) => {
    const [results, setResults] = useState([]); // Renamed variable to 'results'
    const [isLoading, setIsLoading] = useState(false); // Fixed camelCase
    const [searchTerm, setSearchTerm] = useState(""); // Fixed camelCase

    const getResult = async (type) => {
        setIsLoading(true);
        try {
            const response = await fetch(`${baseURL}${type}`, {
                method: 'GET',
                headers: {
                    'x-rapidapi-host': 'google-search74.p.rapidapi.com',
                    'x-rapidapi-key': '5248b49b66msh507a92fb6292aafp15c0d3jsnd402e4fee127'
                }
            });

            // Retry on rate limit error
            if (response.status === 429) {
                console.warn("Rate limit exceeded. Retrying in 1 second...");
                await new Promise(resolve => setTimeout(resolve, 1000)); // Wait for 1 second
                return getResult(type); // Retry the request
            }

            const data = await response.json();
            setResults(data); // Update state with response data
        } catch (error) {
            console.error("Error fetching data:", error);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <ResultContext.Provider value={{ getResult, results, isLoading, searchTerm, setSearchTerm }}>
            {children}
        </ResultContext.Provider>
    );
};

// Hook to use the context
export const useResultContext = () => useContext(ResultContext); // Fixed function name casing
