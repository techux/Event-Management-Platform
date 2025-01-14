import React from 'react'

import Herosection from '../components/Herosection'
import Ctasection from '../components/Ctasection'
import Stats from '../components/Stats'
import Testimonal from '../components/Testimonal'
import Faqs from '../components/Faqs'


const Homepage = () => {
  return (
    <>
        <Herosection />
        <Ctasection />
        <Stats />
        <Testimonal />
        <Faqs />
    </>
  )
}

export default Homepage