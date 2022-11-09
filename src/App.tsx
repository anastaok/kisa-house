import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";

import Cart from "./components/Cart";
import Catalog from "./components/Catalog";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HelpKisa from "./components/HelpKisa";
import InfoKisaPage from "./components/InfoKisaPage";
import MainPage from "./pages/MainPage";

import data from "./db.json";
import KisaTake from "./components/KisaTake";

export type TKisa = {
  id: number;
  imageUrl: string;
  name: string;
  age: string;
  gender: string;
  breed: string;
  character: string;
  food: string;
  owner: string;
};

const App = () => {
  const [kisas, setKisas] = useState<TKisa[]>([]);
  const [cartKisas, setCartKisas] = useState<TKisa[]>([]);

  useEffect(() => {
    // fake request
    setTimeout(() => {
      setKisas(data.kisas);
    }, 500);
  }, []);

  return (
    <div className="wrapper">
      <Header cartKisas={cartKisas} />
      <Routes>
        <Route
          path="/"
          element={
            <MainPage
              kisas={kisas}
              setCartKisas={setCartKisas}
              cartKisas={cartKisas}
            />
          }
        />
        <Route path="/help" element={<HelpKisa />} />
        <Route
          path="/cart"
          element={<Cart cartKisas={cartKisas} setCartKisas={setCartKisas} />}
        />
        <Route
          path="/catalog"
          element={
            <Catalog
              kisas={kisas}
              setCartKisas={setCartKisas}
              cartKisas={cartKisas}
            />
          }
        />
        <Route
          path="/kisa-info/:id"
          element={
            <InfoKisaPage
              kisas={kisas}
              cartKisas={cartKisas}
              setCartKisas={setCartKisas}
            />
          }
        />
        <Route path="/kisa-take" element={<KisaTake />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
