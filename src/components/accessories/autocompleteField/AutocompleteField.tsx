import {
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
  Select,
} from "@material-ui/core";
import React, {
  Fragment,
  FunctionComponent,
  memo,
  useEffect,
  useState,
} from "react";
import { IProps } from "./types";
import "./styles.scss";
import { Autocomplete } from "@material-ui/lab";
import { TextField as MaterialComponent } from "@material-ui/core";

const AutocompleteField: FunctionComponent<IProps> = ({
  fieldName,
  fieldValue,
  label,
  isValid,
  errorText,
  onBlur,
  options,
}) => {
  const [value, setValue] = React.useState(options[0]);
  const [inputValue, setInputValue] = React.useState("");

  useEffect(() => {
    setInputValue(fieldValue);
  }, [fieldValue]);

  const handleOnBlur = (e: React.FocusEvent<HTMLDivElement>) => {
    onBlur(e, inputValue);
  };

  return (
    <FormControl variant="outlined" className="autocomplete" size="small">
      <Autocomplete
        value={value}
        inputValue={inputValue}
        options={options}
        onInputChange={(event, newInputValue) => {
          setInputValue(newInputValue);
        }}
        renderOption={(option) => <Fragment>{option.label}</Fragment>}
        getOptionLabel={(option) => option.label}
        onBlur={handleOnBlur}
        onChange={(event, newValue) => {
          setValue(newValue!);
        }}
        renderInput={(params) => (
          <MaterialComponent
            {...params}
            id={fieldName}
            error={isValid}
            label={label}
            variant="outlined"
            fullWidth
          />
        )}
      />
      <FormHelperText error>{errorText || ""}</FormHelperText>
    </FormControl>
  );
};

export default memo(AutocompleteField);
