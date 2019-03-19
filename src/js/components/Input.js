import React from "react";
import "./../../style/index.scss";
import TsComp from "./TsComp";
const Input = ({ label, text, type, id, value, handleChange }) => (
  <div className="form-group">
    <label htmlFor={label}>{text}</label>
    <input
      type={type}
      className="form-control"
      id={id}
      value={value}
      onChange={handleChange}
      required
    />
    <TsComp/>
  </div>
);

export default Input;