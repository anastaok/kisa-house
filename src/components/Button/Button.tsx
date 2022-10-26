import "./Button.scss";

type TProps = {
  children: React.ReactElement | string;
  width: "sm" | "md" | "lg";
  variant?: string;
  onClick?: () => void;
  disabled?: boolean;
};

const Button: React.FC<TProps> = ({
  children,
  width,
  variant = "default",
  disabled,
  onClick,
}) => {
  return (
    <button
      className={`${width} ${variant} `}
      onClick={onClick && onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
