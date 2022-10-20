import { useState, useEffect } from "react";

import "./MainPage.scss";
import Header from "../../components/Header";
import Video from "../../components/Video";
import Kisa from "../../components/Kisa";
import Footer from "../../components/Footer";
import data from "../../db.json";

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

const MainPage = () => {
  const [kisas, setKisas] = useState<TKisa[]>([]);

  useEffect(() => {
    // fake request
    setTimeout(() => {
      setKisas(data.kisas);
    }, 500);
  }, []);

  return (
    <div>
      <Header />
      <Video />
      <div className="mainPage">
        {kisas.map((kisa) => (
          <Kisa key={kisa.id} kisa={kisa} />
        ))}
      </div>

      <Footer />
    </div>
  );
};

export default MainPage;
