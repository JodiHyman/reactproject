import React,{useState, useEffect} from "react";
import {useParams} from 'react-router-dom';
import axios from "axios"
import Recommended from "./Recommended";

// const url= "http://3.17.216.66:4000/latest"
// const url= "http://localhost:8000/latest"
// const url= "https://jsonplaceholder.typicode.com/photos"
// const url=".././data/db.json"

// const url="https://my-json-server.typicode.com/jodihyman/react-learning-edu/latest"



   
const Hero1 =(movie)=> {
const  [_id, name, rate, type, imageUrl, language]  = movie;

return (
		<>
		<h1>The rate is </h1>
<h3></h3>
		{/* <p>Ratings: {props.rate}</p>
	<p>Category: {props.type}</p>
		<h3>Language: {props.language}</h3>
		<div>
  <img src={props.imageUrl} alt='movie' key={props._id} style={{ marginLeft: '.5rem' }}></img></div> */}
		</>
	);
  }



export default Hero1


// return (
// 		<>
    
// {props.movie.map((newDetails) => (
//   <div>
// 		<h3>{newDetails.name}</h3>
// 		<p>Ratings: {newDetails.rate}</p>
// 		<p>Category: {newDetails.type}</p>
// 		<h3>Language: {newDetails.language}</h3>
// 		<div>
//   <img src={newDetails.imageUrl} alt='movie' key={newDetails._id} style={{ marginLeft: '.5rem' }}></img></div>
//   </div>))}
// 		</>
// 	);
//   }



// export default Hero1