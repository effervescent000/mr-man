import { Link } from "@remix-run/react";
import { useOptionalUser } from "~/utils";

const AccountStatus = () => {
  const user = useOptionalUser();

  return (
    <div>
      {user ? (
        <Link to="/logout">Logout</Link>
      ) : (
        <>
          <Link to="/login">Login</Link>
          <Link to="/join">Sign up</Link>
        </>
      )}
    </div>
  );
};

export default AccountStatus;
