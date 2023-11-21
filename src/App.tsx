import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from './pages/Home/Home';
import Onboarding from "./pages/Onboarding";
import GoogleLogin from "./pages/Login";
import Register from "./pages/register";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/onboarding" element={<Onboarding />} />
        <Route path="/register" element={<Register />} />
        <Route path="/oauth/login" element={<GoogleLogin />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
