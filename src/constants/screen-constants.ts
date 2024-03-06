export const MEDIA_TYPES: Record<string, string> = {
  MOBILE: "MOBILE",
  DESKTOP: "DESKTOP",
  TABLET: "TABLET",
};
export const RESPONSIVE_MEDIA_QUERY: Record<string, Record<string, number>> = {
  MOBILE: { maxWidth: 767 },
  TABLET: { minWidth: 768, maxWidth: 1023 },
  DESKTOP: { minWidth: 1024 },
};
