import { palette } from "src/constants"

export const labelStyle = {
  position: "relative",
  top: "-15px",
  left: "-10px",
  height: "30px",
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  color: palette.white
}

export const formControlStyle = {
  width: "500px",
  height: "110px"
}

export const textFieldStyle = {
  height: "60px",

  "div": {
    height: "50px",
    backgroundColor: palette.white,

    "input": {
      padding: "10px 10px 10px 20px",
      fontSize: "20px",
      color: palette.grey
    }
  }
}

export const helperTextStyle = {
  textAlign: "start",
  position: "relative",
  top: "-5px",
  margin: "0",
  color: `${palette.redErorr} !important`
}

export const asteriskStyle = {
  margin: "0 5px 0 0",
  color: palette.red
}