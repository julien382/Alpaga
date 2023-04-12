import React from "react";
import { Routes, Route } from "react-router-dom";

import '../styles/reset.css';
import '../styles/index.css';

import Header from "./Header/Header";
import Footer from "./Footer/Footer";

import Error from "../pages/Error/Error";
import Alpaga from "../pages/Alpaga/Alpaga";
import Lama from "../pages/Lama/Lama";
import Alimentation from "../pages/Alimentation/Alimentation";
import Race from "../pages/Race/Race";
import Elevage from "../pages/Elevage/Elevage";
import Production from "../pages/Production/Production";

function App() {

  return (
    <div id="app">
      <Header />
      <Routes>
        <Route path="/" element={<Alpaga />} />
        <Route path="/alimentation" element={<Alimentation />} />
        <Route path="/race" element={<Race />} />
        <Route path="/elevage" element={<Elevage />} />
        <Route path="/production" element={<Production />} />
        <Route path="/*" element={<Error />} />
        <Route path="/lama" element={<Lama />} />
      </Routes>
      <Footer />

    </div>
  );
}

export default App;