import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from './pages/Home/Home';
import Onboarding from "./pages/Onboarding";
import GoogleLogin from "./pages/Login";
import Register from "./pages/register";
import Record from './pages/Record/Record';
import Ranking from './pages/Ranking/Ranking';
import Profile from './pages/Profile/Profile';
import NotFound from './pages/NotFound/NotFound';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/onboarding" element={<Onboarding />} />
        <Route path="/register" element={<Register />} />
        <Route path="/oauth/login" element={<GoogleLogin />} />
        <Route path="/record" element={<Record />} />
        <Route path="/ranking" element={<Ranking />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
