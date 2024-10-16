import { ResultContextProvider } from "../Context/ResultContextProvider"
import { useEffect } from "react"
import {useLocation} from 'react-router-dom';
import {ReactPlayer} from 'react-player';
import {useResultcontext} from '../Context/ResultContextProvider';
import Loading from '../Component/Loading';

export const Result = () => {
  const {getreuslt,ResultContext,isloading,searchTerm,setsearchTerm}=useResultcontext();
  const location =useLocation();
  useEffect(()=>{getreuslt('/search/q=Javascript Mastery&num=40')})
  if(isloading) return <Loading/>
  console.log(location.pathname)
  switch (location.pathname) {
    case '/search':    
      return (
        <div className="flex flex-wrap justify-between space-y-6 sm:px-56">
          {/* {getreuslt?.getreuslt?.map((link, tittle)=>(

          ))} */}

        </div>
      )
    case '/images':
      return 'video';
      case '/news':
    return 'video';
    case '/videos':
    return 'video';
  
    default:
      break;
  }
}
