import React, {Link} from "react"

import "../common.css"
// import '../../index.css'

const MovieCard = (props)=> {

return (
<>
<div>
{props.movie.map((movie) => (
 
 <div className="card" key={movie._id}>
  
  <img src={movie.imageUrl} alt='movie' key={movie._id} className="card-img-top"></img>
  <div className="card-body">
    <h5 className="card-title">{movie.name}</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
   {/* <div> <Link to={`/latest/${movie._id}`} key={movie._id} className="btn btn-primary">Movie Details</Link> </div> */}
   </div>
  </div>))} </div></>
  
)
 }
 export default MovieCard  