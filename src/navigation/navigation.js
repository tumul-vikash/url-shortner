import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from '../containers/Home';
import Main from '../containers/Main';

function Navigation() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/:id" element={<Home />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Navigation;
