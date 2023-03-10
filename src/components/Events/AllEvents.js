import React,{useState, useEffect} from "react";
import axios from "axios"
import Recommended from "../Recommended";
import "../common.css";


// const url= "http://3.17.216.66:4000/events"
const url="https://my-json-server.typicode.com/jodihyman/react-learning-edu/events"

const AllEvents = () => {
 const [events, setEvents] = useState([])
useEffect(()=>{axios.get(url)
  .then((response) => {
    // handle success
    //  console.log(response.data);
  setEvents(response.data)
  })
  .catch((error) => {
    // handle error
    console.log(error);
  })
}, [])

  return(
<>
<Recommended movie={events} />
</>

)

}

export default AllEvents


