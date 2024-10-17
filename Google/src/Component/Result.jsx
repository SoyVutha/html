import { ResultContextProvider } from "../Context/ResultContextProvider";
import { useEffect } from "react";
import { useLocation } from 'react-router-dom';
import { ReactPlayer } from 'react-player'; // Ensure you are using this correctly
import { useResultContext } from '../Context/ResultContextProvider';
import Loading from '../Component/Loading';

export const Result = () => {
  const { getResult, results, isLoading, searchTerm, setSearchTerm } = useResultContext(); // Corrected to getResult
  const location = useLocation();

  useEffect(() => {
    getResult('/search/q=Javascript Mastery&num=40'); // Ensure you're calling getResult correctly
  }, [getResult]); // Added dependency to avoid warning

  if (isLoading) return <Loading />;
  console.log(location.pathname);

  switch (location.pathname) {
    case '/search':
      return (
        <div className="flex flex-wrap justify-between space-y-6 sm:px-56">
          {/* Example rendering of results, assuming 'results' is an array */}
          {results.map((link, title) => (
            <div key={title}>
              <h3>{link.title}</h3>
              <p>{link.description}</p>
            </div>
          ))}
        </div>
      );
    case '/images':
      return 'video';
    case '/news':
      return 'video';
    case '/videos':
      return 'video';
    default:
      return null; // Return null if no case matches
  }
};
