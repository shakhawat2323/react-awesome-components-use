import PropTypes from "prop-types";
import Features from "./Features";

const Optionprice = ({ p }) => {
  const { id, name, price, currency, billingCycle, features } = p;
  console.log(p);
  return (
    <div className="bg-purple-400 rounded-xl p-4 text-center">
      <h1>
        <span className="text-4xl font-bold">{price}</span>
        <span className=" font-bold">/mon</span>
      </h1>
      <h2 className="text-3xl">{name}</h2>
      {features.map((feature) => (
        <Features feature={feature}></Features>
      ))}
      <button className="mt-10 bg-green-400 w-full py-5 rounded-lg  hover:bg-green-800 ">
        Buy Now{" "}
      </button>
    </div>
  );
};
Optionprice.prototype = {
  p: PropTypes.object,
};

export default Optionprice;
