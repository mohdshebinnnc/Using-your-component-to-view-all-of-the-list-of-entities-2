import { useState } from "react"


const LikeButton = ({isLiked})=> {
    const [liked,setLiked]=useState(isLiked)

    const toggleLike =()=>{
        setLiked(!liked)
    }


    return(
        <button 
            onClick={toggleLike}
            style={{
                backgroundColor:"transparent",
                border:"none",
                cursor:"pointer",
                color:liked ? "red" : "gray",
                fontSize: "20px",
            }}
        >
            {liked ? "❤️" : "🤍"}
        </button>
    )
}


export default LikeButton;
