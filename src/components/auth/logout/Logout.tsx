import { useEffect, useRef } from "react";
import { useDispatch } from "react-redux";

const Logout = (): JSX.Element => {
  const dispatch = useDispatch();
  const logoutRef = useRef(false);

  useEffect(() => {
    if (logoutRef.current) return;
    // dispatch(logoutUser());
    logoutRef.current = true;
  }, [dispatch]);
  return <></>;
};

export { Logout };

