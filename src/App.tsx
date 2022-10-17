import { Routes, Route } from "react-router-dom";
import Catalog from "./components/Catalog";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HelpPage from "./pages/HelpPage";
import KisaCart from "./pages/KisaCart";
import MainPage from "./pages/MainPage";

const App = () => {
  return (
    <div className="wrapper">
      <Header />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/help" element={<HelpPage />} />
        <Route path="/cart" element={<KisaCart />} />
        <Route path="/catalog" element={<Catalog />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
