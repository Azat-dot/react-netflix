import { useState, memo } from "react";

function FavoriteButton() {
    const [isFavorite, setIsFavorite] = useState(false);



    return (
    <button  onClick={() => setIsFavorite(!isFavorite)}>
            {isFavorite ? "💖" : "🤍" }
    </button>
    )
    
}

export default memo(FavoriteButton)