import NavItem from "./NavItem";
import { IoIosArrowUp } from "react-icons/io";

const NavList = function () {
  return (
    <div className="flex items-enter gap-6">
      <NavItem label="Designs" icon={IoIosArrowUp} />
      <NavItem label="Upload Design " />
    </div>
  );
};

export default NavList;
