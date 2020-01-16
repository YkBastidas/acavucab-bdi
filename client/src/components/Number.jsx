import React from "react";

const Number = props => {
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
          step={props.step}
          value={props.value}
          onChange={props.handlerchange}
          required
          {...props}
        />
    </div>
  );
};

export default Number;
