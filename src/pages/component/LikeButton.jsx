
import React, { useState } from 'react';
import like from "../../assets/icons/Vector (10).png";
import likes from "../../assets/icons/Vector (11).png";

const LikeButton = () => {
  const [isLiked, setIsLiked] = useState(false);

  const handleClick = () => {
    setIsLiked((prevIsLiked) => !prevIsLiked);
  };

  return (
    <div>
      <img src={isLiked ? likes : like} alt="Like" onClick={handleClick} />
    </div>
  );
};

export default LikeButton