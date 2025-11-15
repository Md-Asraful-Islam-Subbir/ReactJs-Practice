import React, { useContext } from "react";
import {BioContext} from "./index.jsx";

const About = () => {
  const bio = useContext(BioContext);

  return (
    <div>
      <h1>About</h1>
      <p>Name: {bio.name}</p>
      <p>Age: {bio.age}</p>
      <p>Profession: {bio.profession}</p>
    </div>
  );
};

export default About;
