import PropTypes from "prop-types";

const Link = ({ router }) => {
  return (
    <div>
      <li className="mr-5 hover:bg-purple-600 ">
        <a href={`router.path`}>{router.name}</a>
      </li>
    </div>
  );
};
Link.prototype = {
  router: PropTypes.object,
};

export default Link;
