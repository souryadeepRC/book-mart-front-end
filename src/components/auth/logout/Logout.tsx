import { useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { logoutUser } from "src/store/auth/auth-action";

const Logout = (): JSX.Element => {
  const dispatch = useDispatch();
  const logoutRef = useRef(false);

  useEffect(() => {
    if (logoutRef.current) return;
    dispatch(logoutUser());
    logoutRef.current = true;
  }, [dispatch]);
  return <></>;
};

export { Logout };
