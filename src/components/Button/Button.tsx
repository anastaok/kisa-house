import "./Button.scss";

type TProps = {
  children: React.ReactElement | string;
  width: "sm" | "md" | "lg";
  variant?: string;
  onClick?: () => void;
};

const Button: React.FC<TProps> = ({
  children,
  width,
  variant = "default",
  onClick,
}) => {
  return (
    <button className={`${width} ${variant} `} onClick={onClick && onClick}>
      {children}
    </button>
  );
};

export default Button;
