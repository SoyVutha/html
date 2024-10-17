import { useEffect } from "react"
import {useLocation} from 'react-router-dom';
import ReactPlayer from 'react-player';
import { useResultContext } from "../Context/ResultContextProvider";
const Search = () => {
  const {getreuslt,ResultContext,isloading,searchTerm,setsearchTerm}=useResultContext();
  return (

    <div>Search</div>
  )
}

export default Search