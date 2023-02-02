import React,{useState, useEffect} from "react"; 
import {useParams,useSearchParams} from 'react-router-dom';
import axios from 'axios';


const Hero3 =() => {  

const [details, setDetails] = useState([])
const [_id, setID ] = useState(useParams())   
const url= "http://3.17.216.66:4000/latest/"; 


useEffect(()=>{axios.get(url)
  .then(response=> {
    // handle success
     console.log(...response.data);
  setDetails(response.data);
//   console.log("details ");
   console.log("after setting", details);
  })
  .catch((error) => {
    // handle error
    console.log(error);
    console.log("error found");
  })
}, [])

 
console.log("the ");
console.log(_id);

//a for loop is need to compare id to locate



const Testrec =(props) => {
    return(
        <>
        {props.map((movie) => (
        <div>
  <img src={movie.imageUrl} alt='movie' key={movie.name} style={{ marginLeft: '.5rem' }}></img></div>))}
    
    </>
    )
        }

return (
    <>
    
  <div>
      <h1>Mi Casa</h1>
      <p>This is my house y&apos;all!</p>
      {details.map(home => <div>{home._id}</div>)}
    </div>
  <h1>jo</h1>
</>
)
  }
  export default Hero3

