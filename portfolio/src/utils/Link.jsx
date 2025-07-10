import React from 'react'

const SocialLinks = ({textColor = "text-black" }) => {
  const Link =[
    {url:"https://www.instagram.com/iamsmaldeepak/",
      icon:'ri-instagram-fill'

    },
    {url:"https://github.com/Samal-993",
      icon:'ri-github-line'
    },
    {url:"https://www.linkedin.com/in/premananda-samal-803726333/",
      icon:'ri-linkedin-fill'
    }
  ]
  return (
   <div className='text-center mt-8  '>
      {Link.map((e,i) => {
        return(
          <a
        href={e.url}
        key={i}
        target="_blank"
        className={`text-3xl ml-2 ${textColor} bg-white p-2  rounded-[20%]`}
      >
       <i className={`  sm:text-center ${e.icon}`}></i>

      </a>
        )
      })}
     

    </div>
  )
}

export default SocialLinks
