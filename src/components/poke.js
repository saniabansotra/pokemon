import React, { useState } from "react";
const Poke = () => {
  const [num, setnum] = useState();

  return (
    <>
      <select
        value={num}
        onChange={(event) => {
          setnum(event.target.value);
        }}
      >
        <option value="1">1</option>
        <option value="25">25</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
      </select>
    </>
  );
};
export default Poke;
