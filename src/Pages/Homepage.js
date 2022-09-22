import React from 'react'
import HeroSection from '../Components/HomeComponents/HeroSection'
import Sectiontwo from '../Components/HomeComponents/Sectiontwo'
import Sectionthree from '../Components/HomeComponents/Sectionthree'
import Sectionfour from '../Components/HomeComponents/Sectionfour'
import Sectionfive from '../Components/HomeComponents/Sectionfive'
import Sectionsix from '../Components/HomeComponents/Sectionsix'
import Sectionseven from '../Components/HomeComponents/Sectionseven'

const Homepage = () => {
  return (
    <div>
        <HeroSection/>
        <Sectiontwo/>
        <Sectionthree/>
        <Sectionfour/>
        <Sectionfive/>
        <Sectionsix/>
        <Sectionseven/>
    </div>
  )
}

export default Homepage