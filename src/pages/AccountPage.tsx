import { useDispatch } from "react-redux";
import { Button } from "src/components/common/CommonComponents";
import { logoutUser } from "src/store/auth/auth-actions";
import { AppDispatch } from "src/store/reducer-types";

const AccountPage = (): JSX.Element => {
  const dispatch: AppDispatch = useDispatch();
  const onLogout = () => {
    dispatch(logoutUser());
  };
  return (
    <div>
      AccountPage
      <Button onClick={onLogout}>Log out</Button>
    </div>
  );
};

export { AccountPage };

