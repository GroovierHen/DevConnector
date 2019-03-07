import React from "react";
import { TextField } from "@material-ui/core";

const TextArea = props => {
  const { label, name, value, onChange, error, errorText } = props;
  return (
    <TextField
      label={label}
      name={name}
      value={value}
      onChange={onChange}
      error={error}
      helperText={errorText}
      multiline
      rowsMax='5'
      margin='normal'
      variant='outlined'
      fullWidth
    />
  );
};

export default TextArea;
