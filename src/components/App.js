import React from "react";
import { Routes, Route } from "react-router-dom";

import '../styles/reset.css';
import '../styles/index.css';

import Header from "./Header/Header";
import Footer from "./Footer/Footer";

import Accueil from "../pages/Accueil/Accueil";
import Error from "../pages/Error/Error";

function App() {

  return (
    <div id="app">
      <Header />
      <Routes>
        <Route path="/" element={<Accueil />}></Route>
        <Route path="/*" element={<Error />}></Route>
      </Routes>
      <Footer />

    </div>
  );
}

export default App;