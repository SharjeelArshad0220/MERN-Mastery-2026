import { useState } from 'react';

function LikeButton() {
  // TODO 1: Create state for whether post is liked
  // Name it 'isLiked', start as false
  const [isLiked, setIsLiked] = useState(false);
  
  // TODO 2: Create state for like count
  // Name it 'likeCount', start as 0
  const [likeCount, setLikeCount] = useState(0);
  
  function handleLike() {
    // TODO 3: Toggle isLiked between true/false
    // Hint: Use ! operator
    setIsLiked(!isLiked);
    
    // TODO 4: If we're liking (isLiked will become true),
    // increase likeCount by 1. Otherwise decrease by 1.
    // Hint: Use ternary operator
    if (!isLiked) {  // If currently not liked (about to be liked)
      setLikeCount(likeCount + 1);
    } else {
      setLikeCount(likeCount - 1);
    }
  }
  
  return (
    <div>
      {/* TODO 5: Show like count */}
      <p>{likeCount} Likes</p>
      
      {/* TODO 6: Button text should be ❤️ when liked, 🤍 when not */}
      <button onClick={handleLike}>
        {isLiked ? "❤️ Liked" : "🤍 Like"}
      </button>
    </div>
  );
}