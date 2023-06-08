import { IconType } from "react-icons";

interface ButtonProps {
  functionality?: () => void;
  label: string;
  icon?: IconType;
  large?: boolean;
  outline?: boolean;
}
const Button: React.FC<ButtonProps> = function ({
  functionality,
  label,
  outline,
  large,
  icon,
}) {
  return (
    <button
      className={`flex  font-semibold  ${
        outline
          ? "text-black border-2 border-black bg-transparent"
          : "text-white bg-myPink"
      }  bg-opacity-90 transition items-center gap-2
      ${outline ? "hover:text-white hover:bg-black" : " hover:bg-opacity-100"}
      ${large ? "px-8 py-3 text-base" : "px-4 py-2 text-sm"}
      `}
    >
      <p>{label}</p>
    </button>
  );
};

export default Button;
