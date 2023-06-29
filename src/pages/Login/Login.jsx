import { Box, Typography } from "@mui/material";
import LoginForm from "src/components/LoginForm/LoginForm";
import { boxStyle, titleStyle } from "./style";

const Login = () => {
  return (
    <Box sx={boxStyle}>
      <Typography sx={titleStyle}>
        Авторизация
      </Typography>
      <LoginForm />
    </Box>
  )
}

export default Login;