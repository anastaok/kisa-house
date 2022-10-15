import "./Button.scss";

type TProps = {
  text: string;
  width: "sm" | "md" | "lg";
  variant?: string;
};

const Button: React.FC<TProps> = ({ text, width, variant = "default" }) => {
  return (
    <button className={`${width} ${variant} `}>
      <p>{text}</p>
    </button>
  );
};

export default Button;
