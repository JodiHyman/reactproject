import React,{useState, useEffect} from "react"; 
import {useParams,useSearchParams} from 'react-router-dom';
import Hero1 from './Hero1';
import axios from 'axios';
// import Movie from '../Movies/MovieDetails'
import Recommended from './Recommended'


  const Hero =() => {  
    const [details, setDetails] = useState({}) 
    // const [movie, setMovie] = useState([]) 
    const {_id} = useParams();
const url= `http://3.17.216.66:4000/latest/${_id}`; 

//   let [searchParams] = useSearchParams();
console.log(_id);
console.log(url);

const getMovie =()=>{
  axios.get(`http://3.17.216.66:4000/latest/${_id}`)
// useEffect(()=>{axios.get(url)
  .then((response) =>{
    // handle success
     console.log("inside use");
     console.log(response.data);
    
  setDetails(response.data);
  })
  .catch((error) => {
    // handle error
    console.log(error);
  })
}
useEffect(()=> getMovie(){

}
, [])

// const details1 = [_id	"5ab12612f36d2879268f284a"
// name	"Black Panther"
// language	"ENGLISH"
// rate	4.5
// type	"Action Adventure Fantasy"
// imageUrl	"https://image.ibb.co/f0hhZc/bp.jpg"]

// const  [id, name, rate, type, imageUrl, language]  = details.map();
// const rate = details[2];
// console.log("madeness"+rate);
// return (
// <>
// {details.name}
// {/* <Hero1 movie={{...details}}/> */}
// {/* <Hero1 movie={details}/> */}
// <h1>Welcome{rate} </h1>
// </>

// )
//   }
//   export default Hero

//This works assigns the one array to new variable only one time
const [movie,] = details;
// console.log("newDetails ");
// console.log(movie);

console.log(movie);
console.log(details);

//attempt to use recommended but delete the link
 return (
  
  <>
  <p>hi {movie.name}</p>
  {/* <h1>Please work{movie.name}</h1>
  	
		<p>Ratings: {movie.rate}</p>
	<p>Category: {movie.type}</p>
 		<h3>Language: {movie.language}</h3>
 		<div>
   <img src={movie.imageUrl} alt='movie' key={movie._id} style={{ marginLeft: '.5rem' }}></img></div> */}
  </>
  // <Recommended movie={details} />
  
 )

 
    } 
  // let  movie =[]; 
    export default Hero

// const DetailsCard = ({ newDetails }) => {
// 	const { _id, name, rate, type, imageUrl, language } = newDetails

// 	return (
// 		<>

// 		<h3>{name}</h3>
// 		<p>Ratings: {rate}</p>
// 		<p>Category: {type}</p>
// 		<h3>Language: {language}</h3>
// 		<div>
//   <img src={imageUrl} alt='movie' key={_id} style={{ marginLeft: '.5rem' }}></img></div>
// 		</>
// 	);
// }
//  return (
//   <DetailsCard />
//  )
//  }
//  export default Hero