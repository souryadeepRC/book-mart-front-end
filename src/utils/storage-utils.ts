export const setItemToLS = (key: string, value: string): void => {
  window?.localStorage.setItem(key, value);
};

export const getItemFromLS = (key: string): string | null => {
  return window?.localStorage.getItem(key);
};
