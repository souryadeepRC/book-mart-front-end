import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { logoutUser } from "src/store/auth/auth-action";

const Logout = (): JSX.Element => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(logoutUser());
  }, [dispatch]);
  return <></>;
};

export { Logout };
