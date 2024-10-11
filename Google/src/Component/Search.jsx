import { useEffect } from "react"
import {useLocation} from 'react-router-dom';
import ReactPlayer from 'react-player';
import { useResultcontext } from "../Context/ResultContextProvider";
const Search = () => {
  const {getreuslt,ResultContext,isloading,searchTerm,setsearchTerm}=useResultcontext();
  return (

    <div>Search</div>
  )
}

export default Search