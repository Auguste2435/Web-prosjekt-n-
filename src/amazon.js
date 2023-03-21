import React, { useState } from "react";

import Cards from "./card";


const Amazon = ({ handleClick, data }) => {
  return (
    <section>
      {data?.map((ev) => (
        <Cards key={ev.id} item={ev} handleClick={handleClick} />
      ))}
    </section>
  );
};

export default Amazon;