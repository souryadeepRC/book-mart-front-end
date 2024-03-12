// types
import { AppStoreType } from "src/store/reducer-types";
import { NotificationType } from "src/types/screen-types";
// constants
import { MEDIA_TYPES } from "src/constants/screen-constants";

export const selectMediaType = (state: AppStoreType): string =>
  state?.screen?.mediaType;

export const selectAppTheme = (state: AppStoreType): string =>
  state?.screen?.appTheme;

export const selectNotifications = (
  state: AppStoreType
): NotificationType[] | [] => state?.screen?.notifications;

export const selectIsMobile = (state: AppStoreType): boolean =>
  state?.screen?.mediaType === MEDIA_TYPES.MOBILE;
