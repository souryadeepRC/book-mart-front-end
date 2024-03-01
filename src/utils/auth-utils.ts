import { removeAllItemFromLS } from "./storage-utils";

export const removeUserInfo = (): void => {
  removeAllItemFromLS();
  window.location.href = "/";
};
