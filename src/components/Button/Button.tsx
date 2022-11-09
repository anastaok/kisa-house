import "./Button.scss";

type TProps = {
  children: React.ReactElement | string;
  width: "sm" | "md" | "lg";
  variant?: "colorBlue";
  onClick?: () => void;
  disabled?: boolean;
  type?: "submit";
};

const Button: React.FC<TProps> = ({
  children,
  width,
  variant = "default",
  disabled,
  onClick,
  type,
}) => {
  return (
    <button
      className={`${width} ${variant} `}
      onClick={onClick && onClick}
      disabled={disabled}
      type={type}
    >
      {children}
    </button>
  );
};

export default Button;
