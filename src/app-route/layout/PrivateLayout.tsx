import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
// library
// selectors
import { selectIsUserAuthenticated } from "src/store/auth/auth-selectors";

type PrivateLayoutProps = {
  component: any;
};
const PrivateLayout = ({
  component: Component,
}: PrivateLayoutProps): React.ReactElement | null => {
  // store
  const isUserAuthenticated: boolean = useSelector(selectIsUserAuthenticated);

  if (!isUserAuthenticated) {
    return <Navigate to="/" />;
  }
  return (
    <div className="private">
      <span>Private</span>
      {<Component />}
    </div>
  );
};
export { PrivateLayout };

