import React, (useParams) from "react"
import { Link } from "react-router-dom";



export const MovieDetails = ({ movie }) => {
	const { _id, name, rate, type, imageUrl, language } = movie;

	return (
		<>

		<h3>{name}</h3>
		<p>Ratings: {rate}</p>
		<p>Category: {type}</p>
		<h3>Language: {language}</h3>
		<div>
  <img src={imageUrl} alt='movie' key={_id} style={{ marginLeft: '.5rem' }}></img></div>
		</>
	);
}

// const Recommended =(props) => {
//     return(
//         <>
//         {props.movie.map((movie) => (
//         <div>
//   <img src={movie.imageUrl} alt='movie' key={movie._id} style={{ marginLeft: '.5rem' }}></img><div>
    
//  {/* <div className="btn btn-primary"> */}
//      <Link to={`/latest/${movie.name}`} key={movie.name}><button type="button" className="primary button" >Movie Details</button> </Link></div></div>)
//   )}
//     </>
//     )

// }
// export default Recommended