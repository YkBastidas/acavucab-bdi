import React from "react";

const Button = props => {
  return (
    props.id
    ? <button
      id ={props.id}
      className={
        props.type !== "options"
        ? props.type === "primary" ? "btn btn-primary" : "btn btn-warning"
        : "btn btn-outline-dark btn-lg btn-block"
      }
      onClick={props.action}
      style={props.buttonStyle}
    >
      {props.title}
    </button>
    : <button
      className={
        props.type !== "options"
        ? props.type === "primary" ? "btn btn-primary" : "btn btn-warning"
        : "btn btn-outline-dark btn-lg btn-block"
      }
      onClick={props.action}
      style={props.buttonStyle}
    >
      {props.title}
    </button>

  );
};

export default Button;
