import React, { useState } from "react";
const Counter = (props) => {
  console.log(props);

  const { value } = props;

  const formatValue = () => {
    return value === 0 ? "empty" : value;
  };
  const getBageClasses = () => {
    let classes = "badge ";
    classes += value === 0 ? "bg-warning m-2" : "bg-primary m-2";
    return classes;
  };

  const handleIncrement = () => {
    // setValue((prevState) => prevState + 1);
  };
  const handleDecrement = () => {
    // setValue((prevState) => prevState - 1);
  };
  return (
    <div>
      <span>{props.name}</span>
      <span className={getBageClasses()}>{formatValue()}</span>
      <button className="btn btn-primary btn-sm m-2" onClick={handleIncrement}>
        +
      </button>
      <button className="btn btn-primary btn-sm m-2" onClick={handleDecrement}>
        -
      </button>
      <button
        className="btn btn-danger btn-sm m-2"
        onClick={() => props.onDelete(props.id)}
      >
        Delet
      </button>
    </div>
  );
};

export default Counter;
