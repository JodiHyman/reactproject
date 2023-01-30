 import React from "react"   
import {useParams,useSearchParams} from 'react-router-dom';

 const Poster =() => {   
     const { name } = useParams();
    let [searchParams] = useSearchParams();
    
    return ( 
    <>
    <div> <h1>Welcome {name} </h1>
</div>
    </>
    )

    }

    export default Poster