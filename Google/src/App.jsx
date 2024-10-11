import React from 'react'
import { useState } from 'react'
import Navbar from './Component/Navbar'
import Footer from './Component/Footer'
import Routes from './Component/Routes'

const App = () => {
  const [darktheme,setDarktheme]=useState(false);
  return (
    <div  className={darktheme?'dark':''}>
      <div className='bg-gray-100 dark:bg-black dark:text-gray-200 min-h-screen'>

      <Navbar darktheme={darktheme} setDarktheme={setDarktheme}/>
      <Footer/>
      <Routes/>
      </div>
    </div>
  )
}

export default App