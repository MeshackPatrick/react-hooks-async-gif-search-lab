import React,{useState} from "react";

const GifSearch=({onSearchSubmit})=>{
    const[query,setQuery]=useState("")

    const handleSubmit=(e)=>{
        e.preventDefault()
        onSearchSubmit(query)
    }
    return(
        <form onSubmit={handleSubmit}>
            <input type="text"
                   value={query}
                   onChange={(e)=>setQuery(e.target.value)}
                   placeholder="Enter your gif search"
            />
            <button type="submit">Search</button>
        </form>

    )
}
export default GifSearch