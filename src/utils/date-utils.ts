// Output: "24 Feb 2024" (for example)
export const formatDate = (date: Date): string => {
  if (!date) return "";
  return new Intl.DateTimeFormat("en-US", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  }).format(date);
};
