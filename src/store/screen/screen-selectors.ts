// types
import { AppStoreType } from "src/store/reducer-types";
import { NotificationType } from "src/types/screen-types";

export const selectScreenType = (state: AppStoreType): string =>
  state?.screen?.screenType;

export const selectScreenTheme = (state: AppStoreType): string =>
  state?.screen?.screenTheme;

export const selectNotifications = (
  state: AppStoreType
): NotificationType[] | [] => state?.screen?.notifications;
