import Button from "@mui/material/Button";
import { buttonStyle } from "./style";

const BasicButton = ({
  children,
  type,
  onClick,
  sx,
  disabled
}) => {
  return (
    <Button 
      disabled={disabled}
      variant="contained"
      type={type}
      onClick={onClick}
      sx={{
        ...buttonStyle, 
        ...sx
      }}
    >
      {children}
    </Button>
  );
}

export default BasicButton;