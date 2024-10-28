import { prototype } from "postcss/lib/previous-map";
import React, { useEffect, useState } from "react";
import Optionprice from "./Optionprice";

const Priceoption = () => {
  const [newfile, setnewfile] = useState([]);

  useEffect(() => {
    fetch("file.json")
      .then((res) => res.json())
      .then((data) => setnewfile(data));
  }, []);

  return (
    <div className="m-12">
      <h2 className="text-4xl font-bold">Best Price in the Dinajpur </h2>
      <div className="grid grid-cols-3 gap-5">
        {newfile.map((p) => (
          <Optionprice p={p}></Optionprice>
        ))}
      </div>
    </div>
  );
};
Priceoption.prototype = {};

export default Priceoption;
