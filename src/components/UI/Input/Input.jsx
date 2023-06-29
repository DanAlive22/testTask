import { 
  FormControl, 
  FormHelperText, 
  InputLabel, 
  TextField, 
  Typography 
} from "@mui/material";
import { 
  formControlStyle, 
  labelStyle, 
  textFieldStyle, 
  helperTextStyle, 
  asteriskStyle 
} from "./style";

const Input = ({
  label,
  value,
  name,
  sx,
  required,
  onError,
  helperText,
  onBlur,
  onChange,
  inputType,
  disabled
}) => {
  return (
    <FormControl 
      sx={{
        ...formControlStyle,
        ...sx
      }}
    >
      <InputLabel sx={labelStyle}>
        {required && (
          <Typography sx={asteriskStyle}>
            *
          </Typography>
        )}
        {label}
      </InputLabel>

      <TextField
        disabled={disabled}
        type={inputType}
        sx={textFieldStyle}
        onBlur={onBlur}
        onChange={onChange}
        value={value}
        name={name}
        error={onError}
      />
      
      <FormHelperText
        error={onError}
        sx={helperTextStyle}
      >
        {helperText}
      </FormHelperText>
    </FormControl>
  )
}

export default Input;