import React from "react"
import { Link } from "react-router-dom";
import "../components/common.css"


// const Recommended =(props) => {
//     return(
//         <>
//         {props.movie.map((movie) => (
        
//   <img src={movie.imageUrl} alt='movie' key={movie._id} style={{ marginLeft: '.5rem' }}></img> ))
//         }
//         </>
//         )

// }
// export default Recommended


//working set
const Recommended =(props) => {
    return(
        <>
        {props.movie.map((movie) => (
        <div>
  <img src={movie.imageUrl} alt='movie' key={movie.name} style={{ marginLeft: '.5rem' }}></img><div>
    
 {/* <div className="btn btn-primary"> */}
     <Link to={`/latest/${movie._id}`} key={movie.name}><button type="button" className="primary button" >Movie Details</button> </Link></div></div>)
  )}
    </>
    )

}
export default Recommended