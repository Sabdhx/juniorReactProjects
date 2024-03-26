import { useState } from "react";
import { FaStar } from "react-icons/fa";
import './starrating.css'

const StarRating = ({ noOfStars }) => {

  const [hover, setHover] = useState();
  const [rating, setRating] = useState();
  const handleMouseClick = (currentIndex) => {
    setRating(currentIndex);
  };
  const handleMouseEnter = (currentIndex) => {
    setHover(currentIndex);
  };
  const HandleMouseLeave = () => {
    setHover(rating);
  };

  return (
    <div className="star-rating flex  text-xl">
      {[...Array(noOfStars)].map((_, index) => {
     
        return (
          <FaStar
            className={index <= (hover || rating) ? "active" : "inactive"}
            key={index}
            onClick={() => {
              handleMouseClick(index);
            }}
            onMouseMove={() => {
              handleMouseEnter(index);
            }}
            onMouseLeave={() => {
              HandleMouseLeave();
            }}
            size={50}
          />
        );
      })}
    </div>
  );
};

export default StarRating;
