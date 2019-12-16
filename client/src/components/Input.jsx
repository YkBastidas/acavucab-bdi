import React from "react";

const Input = props => {
  let pattern ="";
  if (props.name==="rif")
    pattern = "[0-9].*";
  else if (props.name==="telephone1" || props.name==="telephone2"
      || props.name==="telephone3" || props.name==="numberContact")
    pattern="([0-9]{3}) [0-9]{3}[ -][0-9]{4}"
  else if (props.name==="comercialDesignation" || props.name==="businessName" ||
          props.name==="fiscalAvenue" || props.name==="fiscalBuilding" || props.name==="fiscalFloor" ||
          props.name==="fiscalOffice" || props.name==="fiscalApartment" ||
          props.name==="mainAvenue" || props.name==="mainBuilding" || props.name==="mainFloor" ||
          props.name==="mainOffice" || props.name==="mainApartment" ||
          props.name==="homeAvenue" || props.name==="homeBuilding" || props.name==="homeFloor" ||
          props.name==="homeOffice" || props.name==="homeApartment")
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

export default Input;
