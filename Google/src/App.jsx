import React from 'react'
import { useState } from 'react'
import Navbar from './Component/Navbar'
import Footer from './Component/Footer'
import Routes from './Component/Routes'

const App = () => {
  const [darktheme,setDarktheme]=useState(false);
  return (
    <div  className={darktheme?'dark':''}>
      <div className='bg-white dark:bg-black dark:text-white min-h-screen'>
      <Navbar darktheme={darktheme} setDarktheme={setDarktheme}/>
      <Routes/>
      <Footer/>
      </div>
    </div>
  )
}

export default App