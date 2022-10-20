import "./Video.scss";

import cat from "../../content/video/cat.mp4";

const Video = () => {
  return (
    <div className="videoContainer">
      <video autoPlay loop muted id="video">
        <source src={cat} type="video/mp4" />
      </video>

      <div className="videoText">
        <div className="leftTxt">
          <div>У каждого кота</div>
          <div>–</div>
          <div>свой стиль</div>
        </div>
        <div className="rightTxt">
          <div>И у каждого</div>
          <div>–</div>
          <div>должен быть</div>
          <div>свой дом</div>
        </div>
      </div>
    </div>
  );
};

export default Video;
