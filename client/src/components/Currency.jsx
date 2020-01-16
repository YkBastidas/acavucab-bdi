import React from "react";

const Currency = props => {

  let pattern ="";
  if (props.name==="rif" || props.name==="telephone1" || props.name==="telephone2"
      || props.name==="telephone3")
    pattern = "[0-9].*";
  else if (props.name==="comercialDesignation" || props.name==="businessName" ||
          props.name==="fiscalAddress" || props.name==="mainAddress")
    pattern = "[A-Za-z_0-9].*";
  else if(props.name==="email")
    pattern = "[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,}$";
  else if (props.name==="name" || props.name==="lastNames" ||
          props.name==="nameContact")
     pattern= "[a-zA-Z_].*";
  else if (props.name==="webPage")
    pattern = "'www'+/^[a-z0-9._%+-]+\\.[a-z]{2,}$/"
  else if (props.name==="capital")
    pattern = "[0-9]+\\.[0-9]{2}$/"
  else pattern = "(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[^A-Za-z0-9_]).{8,20}";

  return (
      <div>
        <label htmlFor={props.name}>
          {props.title}
        </label>
        <input
          className=
          {
            props.help === "true"
            ? "form-control help"
            : "form-control"
          }
          id={props.name}
          name={props.name}
          type={props.inputtype}
          value={props.value}
          onChange={props.handlerChange}
          placeholder={props.placeholder}
          pattern={pattern}
          required={props.required}
          min ="0.00"
          step ="0.01"
          data-number-to-fixed="2"
          data-number-stepfactor="100"
          {...props}
        />
        {
          props.help
          ? <small className="text-muted helpBlock">
              <b> {props.helptext} </b>
            </small>
          : ""
        }

      </div>
  );
};

export default Currency;
