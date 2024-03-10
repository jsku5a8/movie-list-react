import React from "react";
import "./Input.css";

export const Input = React.forwardRef(
  ({ type, style, value, placeholder, setData, ...rest }, ref) => {
    return (
      <input
        className={style}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={(event) => {
          setData(event.target.value);
        }}
        ref={ref}
        {...rest}
      />
    );
  }
);