import { IconType } from "react-icons";

interface NavItemProps {
  label: string;
  icon?: IconType;
}

const NavItem: React.FC<NavItemProps> = function ({ label, icon: Icon }) {
  return (
    <div className="relative cursor-pointer flex items-center gap-1 text-sm text-neutral-900">
      <p className="peer">{label}</p>
      {Icon && <Icon size={15} className="transform rotate-180" />}
      <div className="absolute -bottom-[2.5px] transition-width left-[50%] transform -translate-x-[50%] duration-300 peer-hover:w-full w-[70%] h-[2px] bg-transparent peer-hover:bg-neutral-600"></div>
    </div>
  );
};

export default NavItem;
