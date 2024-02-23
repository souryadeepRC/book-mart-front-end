// types
import { AppStoreType } from "src/store/reducer-type";
import { NotificationType } from "src/types/screen-type";

export const selectScreenType = (state: AppStoreType): string =>
  state?.screen?.screenType;

export const selectScreenTheme = (state: AppStoreType): string =>
  state?.screen?.screenTheme;

export const selectNotifications = (
  state: AppStoreType
): NotificationType[] | [] => state?.screen?.notifications;
