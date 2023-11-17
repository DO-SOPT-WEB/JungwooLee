import React from "react";
import LoginPage from "./pages/LoginPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalStyle from "./styles/GlobalStyle";
import SignUpPage from "./pages/SignUpPage";
import MyPage from "./pages/MyPage";

function App() {
  return (
    <React.Fragment>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/mypage/:userId" element={<MyPage />} />
        </Routes>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
