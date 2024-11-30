import React from "react";
import PropTypes from "prop-types";

const OptionList = ({ options }) => {
  return (
    <>
      <option value="">Select an option</option>
      {options.map((option, index) => (
        <option key={index} value={option}>
          {option}
        </option>
      ))}
    </>
  );
};

OptionList.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default OptionList;
