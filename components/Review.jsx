import React from "react";

export default function Review() {
  return (
    <>
      <br />
      <div>
        <select
          class="form-select"
          aria-label="Default select example"
          name="rating"
        >
          <option selected>Rate The Place</option>
          <option value={1}>Bad</option>
          <option value={2}>Weak</option>
          <option value={3}>Good</option>
          <option value={4}>Very Good</option>
          <option value={5}>Excellent</option>
        </select>
      </div>
    </>
  );
}
