import React,{useState, useEffect} from "react";
import axios from "axios"
import Recommended from "./Recommended";

// const url= "/api/latest"
// const url= "https://3.17.216.66:4000/latest"

// const url= "http://localhost:8000/latest"
// const url= "https://jsonplaceholder.typicode.com/photos"
// const url=".././data/db.json"

const url="https://my-json-server.typicode.com/jodihyman/react-learning-edu/latest"

const Home =()=> {
    const [latestMovies, setLatest] = useState([])
useEffect(()=>{axios.get(url)
  .then((response) => {
    // handle success
    //  console.log(response.data);
  setLatest(response.data)
  })
  .catch((error) => {
    // handle error
    console.log(error);
  })
}, [])



return(
<>
<Recommended movie={latestMovies} />
</>

)



    }
export default Home