import "./MainPage.scss";
import Header from "../../components/Header";
import Video from "../../components/Video";
import Kisa from "../../components/Kisa";
import Footer from "../../components/Footer";

const MainPage = () => {
  return (
    <div>
      <Header />
      <Video />
      <div className="main-page">
        <Kisa />
        <Kisa />
        <Kisa />
        <Kisa />
        <Kisa />
        <Kisa />
        <Kisa />
        <Kisa />
      </div>

      <Footer />
    </div>
  );
};

export default MainPage;
