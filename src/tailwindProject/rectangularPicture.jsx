import React from "react";

const RectangularPicture = () => {
  return (
    <div className="w-full bg-white">
      <img
        src="./8.PNG"
        alt=""
        className="  bg-black object-cover  mt-[125vh] lg:mt-[19vh] lg:h-[47vh] lg:w-full
        transition duration-700 transform hover:scale-101 hover:shadow-xl
        "
      />
    </div>
  );
};
export default RectangularPicture;