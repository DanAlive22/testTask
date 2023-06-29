import { palette } from "src/constants";

export const buttonStyle = {
  textTransform: "none",
  fontSize: "20px",
  color: palette.white,

  "&:disabled": {
    backgroundColor: palette.blue,
    color: palette.white
  }
}