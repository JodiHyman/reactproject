import React,{useState, useEffect} from "react"; 
import {useParams,useSearchParams} from 'react-router-dom';
import axios from 'axios';


const Hero3 =() => {  

const [details, setDetails] = useState([])
const [_id, setID ] = useState(useParams())   
const url= "http://3.17.216.66:4000/latest"; 
const [locate, setLocate]= useSearchParams({})

// console.log(...locate);
// console.log(useSearchParams());
// let url1= []
// setLocate(locate);

// useEffect(()=>{setLocate(locate)},)
// url1=locate.pathname

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
console.log("before the search param ");
console.log(locate.pathanme);

// console.log(url1);

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
  <h1>jo </h1>
</>
)
  }
  export default Hero3

