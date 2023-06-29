import { 
  Box, 
  IconButton, 
  Rating, 
  Typography 
} from "@mui/material";
import BasicButton from "src/components/UI/Button/Button";
import { ReactComponent as Like } from "src/img/like.svg";
import { 
  actualPriceStyle, 
  basketButtonStyle, 
  discountBoxStyle, 
  discountStyle, 
  imageBoxStyle, 
  installmentPaymentStyle, 
  itemBoxStyle, 
  itemImgStyle, 
  itemTagsStyle, 
  onlinePaymentPriceStyle, 
  previewItemStyle, 
  previousPriceStyle, 
  priceBoxStyle, 
  ratingStyle, 
  reviewsNumberStyle, 
  rowDirectionBoxStyle 
} from "./style";

const ShopItem = ({ itemInfo }) => {
  return (
    <Box sx={itemBoxStyle}>
      <Box sx={imageBoxStyle}>
        <img 
          src={itemInfo.imgSrc} 
          alt={itemInfo.imgAlt} 
          style={itemImgStyle} 
        />
        <BasicButton sx={previewItemStyle}>
          Быстрый просмотр
        </BasicButton>
      </Box>
      <Box sx={priceBoxStyle}>
        <Typography sx={actualPriceStyle}>
          {itemInfo.actualPrice} P
        </Typography>
        {itemInfo.previousPrice &&
          <Typography sx={previousPriceStyle}>
            {itemInfo.previousPrice} P
          </Typography>
        }
        {itemInfo.discount &&
          <Box sx={discountBoxStyle}>
            <Typography sx={discountStyle}>
              -{itemInfo.discount}%
            </Typography>
          </Box>
        }
      </Box>

      <Typography sx={onlinePaymentPriceStyle}>
        {itemInfo.onlinePaymentPrice} P
      </Typography>

      <Typography sx={itemTagsStyle}>
        {itemInfo.tags}
      </Typography>

      <Box sx={rowDirectionBoxStyle}>
        <Rating 
          name="read-only" 
          value={itemInfo.rating} 
          readOnly sx={ratingStyle} 
          precision={0.5} 
        />
        <Typography sx={reviewsNumberStyle}>
          {itemInfo.reviewsNumber}
        </Typography>
      </Box>

      <BasicButton sx={installmentPaymentStyle}>
        Рассрочка 0-0-6
      </BasicButton>

      <Box sx={rowDirectionBoxStyle}>
        <BasicButton sx={basketButtonStyle}>
          В корзину
        </BasicButton>
        <IconButton>
          <Like />
        </IconButton>
      </Box>
    </Box>
  )
}

export default ShopItem;