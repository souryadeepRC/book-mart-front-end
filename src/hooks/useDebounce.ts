import { useEffect, useState } from "react";

export const useDebounce = (value: string, delay: number = 1000): string => {
  // state
  const [debouncedValue, setDebouncedValue] = useState<string>("");
  // effects
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);
    return () => {
      clearTimeout(timer);
    };
  }, [value, delay]);

  return debouncedValue;
};
