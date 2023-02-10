import { routeMap } from "~/routeMap";
import AccountStatus from "./account-status";
import NavItem from "./nav-item";

const Header = () => {
  return (
    <div className="flex justify-between">
      <div>
        {routeMap.map(({ label, path }, index) => (
          <NavItem key={index} label={label} path={path} />
        ))}
      </div>
      <AccountStatus />
    </div>
  );
};

export default Header;
