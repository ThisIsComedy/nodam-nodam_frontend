import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from './pages/Home/Home';
import Onboarding from "./pages/Onboarding";
import GoogleLogin from "./pages/GoogleLogin";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/onboarding" element={<Onboarding />} />
        <Route path="/oauth/login" element={<GoogleLogin />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
