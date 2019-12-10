import React from "react";

const DateForm = props => {
  //console.log(props.value);
  return (
    <div>
      <label htmlFor={props.name}>
        {props.title}
      </label>
      <input
        className="form-control"
        id={props.name}
        name={props.name}
        type={props.inputtype}
        min={props.min}
        max={props.max}
        value={props.value}
        onChange={props.handlerChange}
        required
        {...props}
      />
    </div>
  );
};

export default DateForm;
