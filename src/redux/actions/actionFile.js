import { useParams } from "react-router";
import axios from "axios";


const base_url = "http://3.17.216.66:4000";
const params = useParams();

export function latestMovies(){
    const output = axios.get(`${base_url}${params}`)
      .then(result => setData(result.data));

    return{
        type:'LATEST_MOVIES',
        payload:output
    }
}

export function articleNews(){
    const output = fetch(`${base_url}/articles?_start=3&_end=10`,{method:'GET'})
    .then((data) => data.json())

    return{
        type:'ARTICLE_NEWS',
        payload:output
    }
}

export function galleryNews(){
    const output = fetch(`${base_url}/galleries?_limit=2`,{method:'GET'})
    .then((data) => data.json())

    return{
        type:'GALLERY_NEWS',
        payload:output
    }
}