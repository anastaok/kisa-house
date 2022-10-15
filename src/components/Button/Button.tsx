import "./Button.scss";

type TProps = {
  text: string;
  btnInfo: string;
};

const Button: React.FC<TProps> = ({ text, btnInfo }) => {
  return (
    <button className={`btn ${btnInfo}`}>
      <p>{text}</p>
    </button>
  );
};

export default Button;
