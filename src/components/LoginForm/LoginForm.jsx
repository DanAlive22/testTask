import { useContext, useState } from "react";
import { Box, CircularProgress } from "@mui/material";
import Input from "src/components/UI/Input/Input";
import BasicButton from "src/components/UI/Button/Button";
import Context from "src";
import { emailRegexp, passwordRegexp } from "src/constants";
import { 
  formStyle, 
  submitButton, 
  submitFormBox 
} from "./style";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isEmailTouched, setIsEmailTouched] = useState(false);
  const [isPasswordTouched, setIsPasswordTouched] = useState(false);
  const [emailError, setEmailError] = useState("Это поле является обязательным");
  const [passwordError, setPasswordError] = useState("Это поле является обязательным");
  const [isLoading, setIsLoading] = useState(false);
  const [isFormDisabled, setFormDisabled] = useState(false);

  const store = useContext(Context);

  const handleBlur = (event) => {
    switch (event.target.name) {
      case "email": {
        setIsEmailTouched(true);
        break;
      }
      case "password": {
        setIsPasswordTouched(true);
        break;
      }
      default:
        break;
    }
  }

  const handleEmail = (event) => {
    setEmail(event.target.value.trim());

    if (!event.target.value.trim()) {
      setEmailError("Это поле является обязательным");
      return;
    }

    if (!emailRegexp.test(String(event.target.value).toLowerCase())) {
      setEmailError("Некорректный адрес электронной почты");
      return;
    }

    setEmailError("");
  }

  const handlePassword = (event) => {
    setPassword(event.target.value.trim());

    if (!event.target.value.trim()) {
      setPasswordError("Это поле является обязательным");
      return;
    }

    if (!passwordRegexp.test(String(event.target.value))) {
      setPasswordError("Пароль должен содержать не менее 8 символов и одну заглавную букву");
      return;
    }

    setPasswordError("");
  }

  const submitForm = (e) => {
    e.preventDefault();

    if (!emailError && !passwordError) {
      setIsLoading(true);
      setFormDisabled(true);
  
      setTimeout(() => {
        store.authorization(email);
      }, 2000);

      return;
    }

    setIsEmailTouched(true);
    setIsPasswordTouched(true);
  }

  return (
    <form
      style={formStyle}
      onSubmit={(e) => submitForm(e)}
    >
      <Input
        disabled={isFormDisabled}
        label="Электронная почта"
        name="email"
        required
        value={email}
        onBlur={(event) => handleBlur(event)}
        onChange={(event) => handleEmail(event)}
        inputType="text"
        onError={isEmailTouched && Boolean(emailError)}
        helperText={isEmailTouched && emailError}
      />

      <Input
        disabled={isFormDisabled}
        label="Пароль"
        name="password"
        required
        value={password}
        onBlur={(event) => handleBlur(event)}
        onChange={(event) => handlePassword(event)}
        inputType="password"
        onError={isPasswordTouched && Boolean(passwordError)}
        helperText={isPasswordTouched && passwordError}
      />

      <Box sx={submitFormBox}>
        <BasicButton
          disabled={isFormDisabled}
          type="submit"
          sx={submitButton}
        >
          Авторизация
        </BasicButton>
        {isLoading && <CircularProgress />}
      </Box>
    </form>
  )
}

export default LoginForm;