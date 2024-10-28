import React from "react";
import PropTypes from "prop-types";
import { AiFillCheckCircle } from "react-icons/ai";

const Features = ({ feature }) => {
  return (
    <div>
      <h1 className="flex gap-5 items-center">
        <AiFillCheckCircle className="bg-green-400"></AiFillCheckCircle>
        {feature}
      </h1>
    </div>
  );
};
Features.prototype = {
  feature: PropTypes.object,
};

export default Features;
