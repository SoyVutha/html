
import  {search}  from "../assets/icons"
import { profile } from "../assets/icons"
import { cart } from "../assets/icons"
const Nav = () => {
  return (
    <>
      <div className="flex-1 flex-wrap justify-center flex bg-black"><p className="font-palanquin text-sm pt-2 pb-2 max-md:max-w-xl max-sm: items-center text-white text-center">Sign up for our newsletter and get 15% off your next order</p></div>
      <div className="grid grid-cols-8 py-5 bg-gray-400">
        <div className="col-span-2 px-5 max-md:col-span-5 max-sm:col-span-3"><h1>ZINZERA</h1></div>
        
        <ul className="max-md:hidden flex flex-row justify-between flex-1 flex-wrap col-span-4 ">
          <li>Home</li>
          <li>Shop</li>
          <li>Categories</li>
          <li>About</li>
          <li>Reviews</li>
          <li>FAQ</li>
          <li>Journal</li>
        </ul>
        
        <ul className="flex pr-5 flex-row flex-1 flex-wrap col-span-2 max-md:col-span-3 max-sm:col-span-5 justify-center justify-evenly items-center pl-[100px]">
          <li className="w-5"><img src={search} /></li>
          <li className="w-5 "><img src={profile}  /></li>
          <li className="w-5"><img src={cart} /></li>
        </ul>

      </div>

    </>
  )
}

export default Nav