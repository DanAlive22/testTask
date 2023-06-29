import { useContext, useEffect, useState } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Context from "src";
import LoginPage from "src/pages/Login/Login";
import MainPage from "src/pages/Main/Main";
import Shop from "src/pages/Shop/Shop";

const App = () => {
  const store = useContext(Context);
  const [isLoggedIn, setIsLoggedIn] = useState(store.isAuth);

  useEffect(() => {
    store.subscribe("login", (isAuth) => setIsLoggedIn(isAuth));
    store.checkAuth();
  }, [store]);

  if (isLoggedIn) {
    return (
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/store" element={<Shop />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    );
  }

  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="*" element={<Navigate to="/login" replace />} />
    </Routes>
  );
}

export default App;