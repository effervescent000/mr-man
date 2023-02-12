import { Link } from "@remix-run/react";
import { useOptionalUser } from "~/utils";

const AccountStatus = () => {
  const user = useOptionalUser();

  return (
    <div>
      {user ? (
        <>
          <span data-cy="logout">
            <Link to="/logout">Logout</Link>
          </span>
          <Link to="/saves">Save games</Link>
        </>
      ) : (
        <>
          <span data-cy="login">
            <Link to="/login">Login</Link>
          </span>
          <span data-cy="join">
            <Link to="/join">Sign up</Link>
          </span>
        </>
      )}
    </div>
  );
};

export default AccountStatus;
