import { Box } from "@mui/material";
import Header from "src/components/Header/Header";
import ShopItem from "src/components/ShopItem/ShopItem";
import { shopItemsInfoList } from "src/constants";
import { contentStyle, wrapperStyle } from "./style";

const Shop = () => {
  return (
    <Box sx={wrapperStyle}>
      <Header />
      <Box sx={contentStyle}>
        {shopItemsInfoList.map(itemInfo => (
          <ShopItem 
            itemInfo={itemInfo}
            key={itemInfo.id}
          />
        ))}
      </Box>
    </Box>
  )
}

export default Shop;