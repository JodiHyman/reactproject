import React,{useState, useEffect} from "react"; 
import {useParams,useSearchParams} from 'react-router-dom';
import axios from 'axios';


  const Hero =() => {  
    const [details, setDetails] = useState([]) 
    const { _id } = useParams();
const url= `http://3.17.216.66:4000/latest/${_id}`; 

//   let [searchParams] = useSearchParams();

useEffect(()=>{axios.get(`http://3.17.216.66:4000/latest/${_id}`)
  .then((response) => {
    // handle success
     console.log(response.data);
  setDetails(response.data);
  })
  .catch((error) => {
    // handle error
    console.log(error);
  })
}, [])

const newDetails = details;

return (
		<>

		<h3>{newDetails.name}</h3>
		<p>Ratings: {rate}</p>
		<p>Category: {type}</p>
		<h3>Language: {language}</h3>
		<div>
  <img src={imageUrl} alt='movie' key={_id} style={{ marginLeft: '.5rem' }}></img></div>
		</>
	);
  }
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