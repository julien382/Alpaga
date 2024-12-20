import React from "react";
import { Routes, Route } from "react-router-dom";

import '../styles/reset.css';
import '../styles/index.scss';

import Header from "./Header/Header";
import Footer from "./Footer/Footer";

import Error from "../pages/Error/Error";
import Alpaga from "../pages/Alpaga/Alpaga";
import Lama from "../pages/Lama/Lama";
import Alimentation from "../pages/Alimentation/Alimentation";
import Race from "../pages/Race/Race";
import Production from "../pages/Production/Production";
import Galerie from "./Galerie/Galerie";

function App() {

  return (
    <div id="app">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Alpaga />} />
          <Route path="/alimentation" element={<Alimentation />} />
          <Route path="/race" element={<Race />} />
          <Route path="/production" element={<Production />} />
          <Route path="/galerie" element={<Galerie />} />
          <Route path="/*" element={<Error />} />
          <Route path="/lama" element={<Lama />} />
        </Routes>
      </main>
      <Footer />

    </div>
  );
}

export default App;