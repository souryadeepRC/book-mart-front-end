// library
import { Alert, Snackbar } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
// actions
import { removeNotifications } from "src/store/screen/screen-actions";
// selectors
import { selectNotifications } from "src/store/screen/screen-selectors";
// types
import { AppDispatch } from "src/store/reducer-types";
import { NotificationType } from "src/types/screen-types";

type StackedNotificationProps = {
  children: JSX.Element;
};
const StackedNotification = ({ children }: StackedNotificationProps) => {
  // store
  const dispatch: AppDispatch = useDispatch();
  const notifications: NotificationType[] = useSelector(selectNotifications);
  // handler fns
  const handleClose = (id: string) => () => {
    dispatch(removeNotifications(id));
  };
  return (
    <>
      <div>
        {notifications?.map((notification: NotificationType, index: number) => {
          return (
            <Snackbar
              anchorOrigin={{ vertical: "top", horizontal: "center" }}
              open={true}
              onClose={handleClose(notification.id)}
              autoHideDuration={10000}
              key={index}
            >
              <Alert severity="success">{notification.message}</Alert>
            </Snackbar>
          );
        })}
      </div>

      {children}
    </>
  );
};
export { StackedNotification };

