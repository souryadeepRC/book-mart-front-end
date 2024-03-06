export const DEBOUNCE_TIME_LIMIT: number = 500;

export const STATUS_CODES: Record<string, number> = {
  UNAUTHORIZED: 401,
  NOT_FOUND: 404,
  DUPLICATE: 409,
};
export const STORAGE_KEY: Record<string, string> = {
  AUTH_TOKEN: "AUTH_TOKEN",
  ACCESS_TOKEN: "ACCESS_TOKEN",
  TOKEN_EXPIRY_DATE: "TOKEN_EXPIRY_DATE",
};
