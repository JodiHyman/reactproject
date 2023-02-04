import React,{useState, useEffect} from "react";
import axios from "axios"
import Main1 from "./Main1";


const url= "http://3.17.216.66:4000/latest"
// const url= "http://localhost:8000/latest"
// const url= "https://jsonplaceholder.typicode.com/photos"
// const url=".././data/db.json"

// const url="https://my-json-server.typicode.com/jodihyman/react-learning-edu/latest"

const Main =()=> {
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
<Main1 movie={latestMovies} />
</>

)



    }
export default Main