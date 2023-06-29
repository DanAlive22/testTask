import { palette } from "src/constants"

export const contentStyle = {
  display: "flex",
  flexDirection: "row",
  alignItems: "flex-start",
  justifyContent: "space-around",
  margin: "20px 0 0"
}

export const infoListStyle = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center"
}

export const titleStyle = {
  color: palette.black,
  fontSize: "28px",
  margin: "0 0 20px",
  fontWeight: "900"
}

export const paginationStyle = {
  margin: "15px 0 0"
}

export const loadingProgressStyle = {
  margin: "10px 0 0"
}

export const tableActionButton = {
  padding: "5px 10px",
  fontSize: "14px",
  backgroundColor: palette.red,

  ":hover": {
    backgroundColor: palette.darkRed
  }
}