import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Box } from "@mui/material";
import BasicButton from "src/components/UI/Button/Button";
import Context from "src";
import { mainPageNavigation } from "src/constants";
import { 
  activeButtonStyle, 
  buttonStyle, 
  headerStyle 
} from "./style";

const Header = () => {
  const url = window.location.href;
  const lastSymbol = url.lastIndexOf("/");
  const currentPage = url.slice(lastSymbol, url.length);

  const store = useContext(Context);
  
  const navigate = useNavigate();

  const checkButtonAction = (link) => {
    if (link === "/login") {
      store.logout();
      navigate("/login");
    }
  }
  return (
    <Box sx={headerStyle}>
      {mainPageNavigation.map(element => (
        <Link
          key={element.link}
          to={element.link}
        >
          <BasicButton
            onClick={() => checkButtonAction(element.link)}
            type="button"
            sx={currentPage === element.link 
              ? { 
                  ...buttonStyle,
                  ...activeButtonStyle
                }
              : buttonStyle   
            }
          >
            {element.name}
          </BasicButton>
        </Link>
      ))}
    </Box>
  )
}

export default Header;