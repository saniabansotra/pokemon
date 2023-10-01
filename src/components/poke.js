import React, { useEffect, useState } from "react";
import axios from "axios";
const Poke = () => {
  const [num, setnum] = useState();
  const [name, setname] = useState();
  const [moves, setmoves] = useState();
  useEffect(() => {
    async function getData() {
      const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${num}`);
      console.log(res);
      setname(res.data.name);
      setmoves(res.data.moves.length);
    }
    getData();
  });

  return (
    <>
      <h1> Hello Guys This is Pokemon</h1>
      <h3>
        Your Choose <span style={{ color: "Purple" }}> {num}</span> value
      </h3>
      <h3>
        My name is <span style={{ color: "Purple" }}> {name}</span>{" "}
      </h3>
      <h3>
        I have <span style={{ color: "Purple" }}> {moves} </span>moves
      </h3>
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
