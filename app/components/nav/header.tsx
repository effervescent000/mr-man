import { routeMap } from "~/routeMap";
import NavItem from "./nav-item";

const Header = () => {
  return (
    <div>
      {routeMap.map(({ label, path }, index) => (
        <NavItem key={index} label={label} path={path} />
      ))}
    </div>
  );
};

export default Header;
