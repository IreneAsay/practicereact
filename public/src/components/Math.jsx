import React from "react";

const Math = (props) => {
  let result;

  switch (props.operator) {
    case "+":
      result = props.num1 + props.num2;
      break;
    case "-":
      result = props.num1 - props.num2;
      break;
    case "*":
      result = props.num1 * props.num2;
      break;
    case "/":
      result = props.num1 / props.num2;
      break;
    default:
      console.log(`Sorry, we are out of`);
  }

  const result = props.num1 + props.num2;

  return <span>{result}</span>;
};

export default Math;
