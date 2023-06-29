import { palette } from "src/constants"

export const itemBoxStyle = {
  width: "300px",
  height: "620px",
  borderRadius: "20px",
  margin: "50px 50px",
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  padding: "15px",
  boxShadow: "0 0 10px -3px",
  
  "div:hover button": {
    transition: "0.3s",
    opacity: "0.8"
  }
}

export const itemImgStyle = {
  width: "inherit",
  height: "inherit",
  objectFit: "cover"
}

export const priceBoxStyle = {
  display: "flex",
  flexDirection: "row",
  alignItems: "flex-end",
  gap: "8px"
}

export const rowDirectionBoxStyle = {
  display: "flex",
  flexDirection: "row",
  alignItems: "center"
}

export const actualPriceStyle = {
  fontWeight: "900",
  fontSize: "26px",
}

export const previousPriceStyle = {
  fontWeight: "900",
  fontSize: "20px",
  color: palette.grey,
  textDecoration: "line-through"
}

export const onlinePaymentPriceStyle = {
  color: palette.darkPink,
  fontWeight: "900",
  fontSize: "20px"
}

export const ratingStyle = {
  "& .MuiRating-iconFilled": {
    color: palette.darkPink,
  }
}

export const itemTagsStyle = {
  fontSize: "16px",
  margin: "0 0 10px",
  color: palette.grey,
}

export const installmentPaymentStyle = {
  background: "rgb(153,255,175)",
  background: "linear-gradient(90deg, rgba(153,255,175,1) 0%, rgba(255,209,0,1) 100%)",
  borderRadius: "18px",
  color: palette.black,
  textTransform: "upper-case",
  fontWeight: "600",
  fontSize: "16px",
  padding: "5px 12px",
  margin: "10px 0 15px"
}

export const basketButtonStyle = {
  backgroundColor: palette.darkPink,
  borderRadius: "12px",
  padding: "5px 20px",
  margin: "0 10px 0 0",

  ":hover": {
    backgroundColor: palette.darkPink
  }
}

export const reviewsNumberStyle = {
  color: palette.grey,
  margin: "2px 0 0 5px"
}

export const previewItemStyle = {
  backgroundColor: palette.white,
  borderRadius: "20px",
  color: palette.black,
  fontSize: "14px",
  position: "absolute",
  padding: "10px",
  opacity: "0",
  transition: "0.3s",

  ":hover": {
    backgroundColor: palette.grey
  }
}

export const imageBoxStyle = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  width: "inherit",
  height: "350px",
}

export const discountBoxStyle = {
  backgroundColor: palette.lightPink,
  padding: "3px 10px",
  borderRadius: "15px",
  position: "relative",
  bottom: "50px",
  right: "200px"
}

export const discountStyle = {
  fontSize: "14px",
  fontWeight: "600",
  color: palette.darkPink,
}