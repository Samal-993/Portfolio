import React from 'react'

import SocialLinks from '../utils/Link'

const Footer = () => {
  return (
    <div className='w-full h-[130px] bg-black '>
      <div className=' flex justify-between items-center pr-10'>
      <h1 style={{ fontFamily: "logo_font" }} className="text-white pt-16 sm:text-lg sm:pt-15 sm:pl-5">
        
        @Premananda*
      </h1>
     <SocialLinks  textColor="text-black"/>
      </div>

    </div>
  )
}

export default Footer
