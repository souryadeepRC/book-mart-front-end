import { useCallback, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
// types
import { AppDispatch } from "src/store/reducer-types";
// actions
import {
  checkUserAuth,
  resetUserAuth,
  setAccessTokenExistence,
  setLoginState,
} from "src/store/auth/auth-actions";
// utils
import { getItemFromLS } from "src/utils/storage-utils";
// constants
import { LOGIN_STATE } from "src/constants/authentication-constants";
import { STORAGE_KEY } from "src/constants/common-constants";
import {
  selectAuthIsLoading,
  selectIsUserAuthenticated,
} from "src/store/auth/auth-selectors";
const useLocalStorage = () => {
  // store
  const dispatch: AppDispatch = useDispatch();
  const authIsLoading: boolean = useSelector(selectAuthIsLoading);
  const isUserAuthenticated: boolean = useSelector(selectIsUserAuthenticated);
  // ref
  const storageRef = useRef<boolean>(false);
  // event callback
  const handleStorage = useCallback(() => {
    const accessToken = getItemFromLS(STORAGE_KEY.ACCESS_TOKEN);
    const authToken = getItemFromLS(STORAGE_KEY.AUTH_TOKEN);

    if (accessToken) {
      dispatch(setAccessTokenExistence(true));
    } else {
      dispatch(setAccessTokenExistence(false));
    }

    if (authIsLoading) return;

    if (!accessToken && isUserAuthenticated) {
      dispatch(resetUserAuth());
      return;
    }
    if (accessToken) {
      dispatch(checkUserAuth());
    } else {
      dispatch(
        setLoginState(authToken ? LOGIN_STATE.OTP : LOGIN_STATE.ACCOUNT)
      );
    }
  }, [dispatch, authIsLoading, isUserAuthenticated]);

  // effects

  useEffect(() => {
    if (!storageRef.current) {
      handleStorage();
      storageRef.current = true;
    }
    window.addEventListener("storage", handleStorage);
    return () => window.removeEventListener("storage", handleStorage);
  }, [handleStorage]);
};
export { useLocalStorage };

