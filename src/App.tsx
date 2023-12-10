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
import RetryForm from './pages/RetryForm/RetryForm';
import { RecoilRoot } from "recoil";
import Complete from "./pages/Complete";

const App = () => {
  return (
    <RecoilRoot>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Onboarding />} />
          <Route path="/home" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/oauth/login" element={<GoogleLogin />} />
          <Route path="/record" element={<Record />} />
          <Route path="/ranking" element={<Ranking />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/retry" element={<RetryForm />} />
          <Route path="/complete" element={<Complete />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </RecoilRoot>
  )
}

export default App;
