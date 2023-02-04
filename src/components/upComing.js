import React,{useState, useEffect} from "react";
import axios from "axios"
import UpComingDisplay from "./UpComingDisplay";

const url= "http://3.17.216.66:4000/upcomingmovies"
// const url= "http://localhost:8000/latest"
// const url= "https://jsonplaceholder.typicode.com/photos"
// const url=".././data/db.json"

// const url="https://my-json-server.typicode.com/jodihyman/react-learning-edu/latest"

const UpComing =()=> {
    const [upComingMovies, setUpcoming] = useState([])
useEffect(()=>{axios.get(url)
  .then((response) => {
    // handle success
    //  console.log(response.data);
  setUpcoming(response.data)
  })
  .catch((error) => {
    // handle error
    console.log(error);
  })
}, [])



return(
<>
<UpComingDisplay movie={upComingMovies} />
</>

)



    }
export default UpComing