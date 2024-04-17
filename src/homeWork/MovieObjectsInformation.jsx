import React from "react";
import { useParams } from "react-router-dom";

function MovieObjectsInformation() {
  const { params } = useParams();
  return (
    <div>{params}
  
    </div>
)
}

export default MovieObjectsInformation;
