import "./Button.scss";

type TProps = {
  children: React.ReactElement | string;
  width: "sm" | "md" | "lg";
  variant?: string;
};

const Button: React.FC<TProps> = ({ children, width, variant = "default" }) => {
  return <button className={`${width} ${variant} `}>{children}</button>;
};

export default Button;
