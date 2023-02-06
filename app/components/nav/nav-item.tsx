import { Link } from "@remix-run/react";

const NavItem = ({ label, path }: { label: string; path: string }) => {
  return (
    <div>
      <Link to={path}>{label}</Link>
    </div>
  );
};

export default NavItem;
