import React, { useContext } from 'react'
import Hero from '../Components/Hero'
import Consult from '../Components/Consult'
import TopRated from '../Components/TopRated'
import Why from '../Components/Why'
import Reviews from '../Components/Reviews'
import Future from '../Components/Future'
import { ContextProvider } from '../Components/Context'




const HomePage = () => {
  const {doctors} = useContext(ContextProvider);
  const featDoct = doctors?.[0]
  return (
   <div>
    <Hero doctor = {featDoct}/>
    <Consult/>
    <TopRated/>
    <Why/>
    <Reviews/>
    <Future/>
    

    
   </div>
  )
}

export default HomePage
