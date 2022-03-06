import React from "react";

const ColorFullMessage = (props) => {
  const { color, children } = props;

  // console.log(props);
  const contentRadyStyle = {
    // color: color,
    color,
    fontSize: "18px"
  };

  return <p style={contentRadyStyle}>{children}</p>;
};

export default ColorFullMessage;
