import Container from "../../Container";
import Button from "../../buttons/Button";
import NavItem from "./navbar/NavItem";
import NavList from "./navbar/NavList";

const Header = function () {
  return (
    <div className="bg-transparent hover:bg-white transition duration-300 ">
      <Container>
        <div className="flex items-center justify-between h-[75px]">
          <div className=" flex items-center gap-6">
            <p className="text-lg font-semibold">{"<Learn&Earn>"}</p>
            <NavList />
          </div>
          <div className="flex items-center gap-4">
            <Button label="Try Learn & Earn free" />
            <NavItem label="Sign In" />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Header;
