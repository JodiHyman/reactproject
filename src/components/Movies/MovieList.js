import React from "react"
import { Link } from "react-router-dom";





//working set
const MovieList =(props) => {
    return(
        <>
        <section className="text-gray-600 body-font">
            <div className="container px-5 py-24 mx-auto">
              <div className="flex flex-col">
      <div className="h-1 bg-gray-200 rounded overflow-hidden">
        <div className="w-24 h-full bg-indigo-500"></div>
      </div>
      <div className="flex flex-wrap sm:flex-row flex-col py-6 mb-12">
        <h1 className="sm:w-2/5 text-gray-900 font-medium title-font text-2xl mb-2 sm:mb-0">The Latest Movies</h1>
        <p className="sm:w-3/5 leading-relaxed text-base sm:pl-10 pl-0">Select a movie to start your entertainment fun.</p>
      </div>
    </div>
     <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
        {props.movie.map((movie) => (
        <div class="p-4 md:w-1/3 sm:mb-0 mb-6 items-center">    
        <div className="rounded-lg h-96 overflow-hidden ">
  <img src={movie.imageUrl} alt={movie.name} key={movie.name} className="object-contain object-center h-full w-8/12"></img>
  </div>
  <h2 className="text-xl font-medium title-font text-gray-900 mt-5 ">{movie.name}</h2>
  <Link to={`/latest/${movie._id}`} key={movie.name} className="text-indigo-500 inline-flex items-center mt-3">See Details
<svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
  className="w-4 h-4 ml-2" viewBox="0 0 24 24">
  <path d="M5 12h14M12 5l7 7-7 7"></path>
</svg></Link>
  
  </div>
  )
  
  )}
  </div>
  </div>
  </section>
    </>
    )

}
export default MovieList