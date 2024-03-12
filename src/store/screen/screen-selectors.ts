// types
import { AppStoreType } from "src/store/reducer-types";
import { NotificationType } from "src/types/screen-types";

export const selectScreenType = (state: AppStoreType): string =>
  state?.screen?.screenType;

export const selectAppTheme = (state: AppStoreType): string =>
  state?.screen?.appTheme;

export const selectNotifications = (
  state: AppStoreType
): NotificationType[] | [] => state?.screen?.notifications;
