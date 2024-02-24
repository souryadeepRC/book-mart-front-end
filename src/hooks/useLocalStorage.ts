import { useCallback, useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
// types
import { AppDispatch } from "src/store/reducer-types";
// actions
import {
  logoutUser,
  setLoginState,
  setUserAuthenticate,
} from "src/store/auth/auth-actions";
import { fetchUserDetails } from "src/store/user/user-actions";
// utils
import { getItemFromLS } from "src/utils/storage-utils";
// constants
import { LOGIN_STATE } from "src/constants/authentication-constants";
import { STORAGE_KEY } from "src/constants/common-constants";
const useLocalStorage = () => {
  // store
  const dispatch: AppDispatch = useDispatch();
  // ref
  const storageRef = useRef<boolean>(false);
  // event callback
  const handleStorage = useCallback(() => {
    const accessToken = getItemFromLS(STORAGE_KEY.ACCESS_TOKEN);
    const authToken = getItemFromLS(STORAGE_KEY.AUTH_TOKEN);

    if (storageRef.current && accessToken) return;

    if (storageRef.current && !accessToken) {
      dispatch(logoutUser());
      return;
    }
    if (accessToken) {
      dispatch(setUserAuthenticate(true));
      dispatch(setLoginState(LOGIN_STATE.DONE));
      dispatch(fetchUserDetails());
      storageRef.current = true;
    } else {
      dispatch(
        setLoginState(authToken ? LOGIN_STATE.OTP : LOGIN_STATE.ACCOUNT)
      );
    }
  }, [dispatch]);

  // effects
  useEffect(() => {
    window.addEventListener("storage", handleStorage);
    return () => window.removeEventListener("storage", handleStorage);
  }, [handleStorage]);
};
export { useLocalStorage };

