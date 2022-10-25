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
  // 1. Перенсти запрос в App
  // 2. Передать кис в MainPage and InfoKisaPage (тип с кисами надо перенести в апп тоже)
  // 3. В инфокисапейдж доставать id из урла странички и через filter найти нужную кису
  // 4. Взять из нее инфу и отрисовать

  const [kisas, setKisas] = useState<TKisa[]>([]);

  useEffect(() => {
    // fake request
    setTimeout(() => {
      setKisas(data.kisas);
    }, 500);
  }, []);

  return (
    <div className="wrapper">
      <Header />
      <Routes>
        <Route path="/" element={<MainPage kisas={kisas} />} />
        <Route path="/help" element={<HelpKisa />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/catalog" element={<Catalog kisas={kisas} />} />
        <Route path="/kisa-info/:id" element={<InfoKisaPage kisas={kisas} />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
