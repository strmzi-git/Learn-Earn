import { IconType } from "react-icons";

interface ButtonProps {
  functionality?: () => void;
  label: string;
  icon?: IconType;
}
const Button: React.FC<ButtonProps> = function ({
  functionality,
  label,
  icon,
}) {
  return (
    <button className="flex text-sm px-4 py-2 font-semibold text-white bg-myPink bg-opacity-90 hover:bg-opacity-100 transition items-center gap-2">
      <p>{label}</p>
    </button>
  );
};

export default Button;
