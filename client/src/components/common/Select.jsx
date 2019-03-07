import React from "react";
import { TextField } from "@material-ui/core";

const Select = props => {
  const { label, name, value, onChange, error, errorText } = props;
  return (
    <TextField
      label={label}
      name={name}
      value={value}
      onChange={onChange}
      error={error}
      helperText={errorText}
      select
      margin='normal'
      variant='outlined'
      fullWidth
    />
  );
};

export default Select;
