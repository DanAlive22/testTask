import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { createContext } from "react";
import { GlobalStyles } from '@mui/material';
import App from "src/App";
import Store from "src/store/store";
import { globalStyle } from "src/style";

const store = new Store();
const Context = createContext(store);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Context.Provider value={store}>
    <BrowserRouter>
      <GlobalStyles styles={globalStyle}/>
      <App />
    </BrowserRouter>
  </Context.Provider>
);

export default Context;