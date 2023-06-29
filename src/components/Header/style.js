import { palette } from "src/constants"

export const headerStyle = {
  width: "inherit",
  height: "85px",
  borderBottom: `1px solid ${palette.grey}`,
  display: "flex",
  flexDirection: "row",
  alignItems: "flex-end"
}

export const buttonStyle = {
  backgroundColor: "unset",
  color: palette.grey,
  boxShadow: "unset",

  ":hover": {
    backgroundColor: "unset",
    boxShadow: "unset",
  }
}

export const activeButtonStyle = {
  borderBottom: `1px solid ${palette.blue}`
}