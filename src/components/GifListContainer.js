import React,{useState} from "react";
import GifSearch from "./GifSearch";
import GifList from "./GifList";

const GifListContainer=()=>{
    const [gifs,setGifs]=useState([])

    const handleSearchSubmit=(query)=>{
        const apiKey=`xPfBsxwuyq7MNd0gXoGAIU8gayQNpyll`
        const url=`https://api.giphy.com/v1/gifs/search?q=${query}&api_key=${apiKey}&rating=g`

        fetch(url)
            .then((r)=>r.json())
            .then((data)=>{

                const firstThreeGifs=data.data.slice(0,3)
                setGifs(firstThreeGifs)
            })
            .catch((error)=>{
                console.log(`Error fetching data:`,error)
            })
    }
    return(
        <div>
            <GifSearch onSearchSubmit={handleSearchSubmit} />
            <GifList gifs={gifs}/>
        </div>
    )
}
export  default GifListContainer