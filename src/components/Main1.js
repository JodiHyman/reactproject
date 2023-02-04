import React from 'react'
import { Link } from "react-router-dom";

 const Main1 =(props) => {
  return (
 <>
        {props.movie.map((movie) => (
        <div>
  <img src={movie.imageUrl} alt={movie.name} key={movie.name} style={{ marginLeft: '.5rem' }}></img></div>
        ))}
    </>
  )
}
export default Main1

    //  <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
    //       {props.movie.map((movie) => (
    //   <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
    //     <div className="rounded-lg h-64 overflow-hidden">
    //       <img alt="content" className="object-cover object-center h-full w-full" src="https://dummyimage.com/1203x503"></img>
    //     </div>
    //     <h2 className="text-xl font-medium title-font text-gray-900 mt-5">{movie.name}</h2>
    //     <p className="text-base leading-relaxed mt-2">Swag shoivdigoitch literally meditation subway tile tumblr cold-pressed. Gastropub street art beard dreamcatcher neutra, ethical XOXO lumbersexual.</p>
    //     <a className="text-indigo-500 inline-flex items-center mt-3">Learn More
    //       <svg fill="none" stroke="currentColor" strokeLinecap="round" stroke-linejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
    //         <path d="M5 12h14M12 5l7 7-7 7"></path>
    //       </svg>
    //     </a>
    //   </div>))}
    //   </div>