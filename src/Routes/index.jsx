import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import IndexPage from '../Pages/IndexPage';
import RegistrationPage from '../Pages/RegistrationPage';
import AutorizationPage from '../Pages/AuthorizationPage';

function Router() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<IndexPage />} />
          <Route path="/authorization" element={<AutorizationPage />} />
          <Route path="/registration" element={<RegistrationPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default Router;
