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
          <span data-cy="saves-link">
            <Link to="/saves">Save games</Link>
          </span>
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
