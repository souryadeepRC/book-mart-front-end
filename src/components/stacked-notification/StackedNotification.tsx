// library
import { useDispatch, useSelector } from "react-redux";
import { Alert, Snackbar } from "@mui/material";
// actions
import { removeNotifications } from "src/store/screen/screen-action";
// selectors
import { selectNotifications } from "src/store/screen/screen-selector";
// types
import { NotificationType } from "src/types/screen-type";
import { AppDispatch } from "src/store/reducer-type";

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
