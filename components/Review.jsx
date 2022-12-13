import React from "react";
import ReactStars from "react-stars";

export default function SkeletonLoading() {
  return (
    <>
    <br/>
      <div>
        <h2>Plase Rate Our App</h2>
        <ReactStars count={5} size={24} color2={"#ffd700"} />
      </div>
    </>
  );
}
