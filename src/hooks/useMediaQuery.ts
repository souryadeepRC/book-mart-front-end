import { useEffect, useState } from "react";
// constants
import {
  MEDIA_TYPES,
  RESPONSIVE_MEDIA_QUERY,
} from "src/constants/screen-constants";

const useMediaQuery = (): string => {
  // state
  const [mediaType, setMediaType] = useState<string>("");
  // fns
  const updateMediaType = (
    event: MediaQueryListEvent | MediaQueryList
  ): void => { 
    if (event.matches) {
      setMediaType(MEDIA_TYPES.TABLET);
    } else {
      if (window?.innerWidth > RESPONSIVE_MEDIA_QUERY.MOBILE.maxWidth) {
        setMediaType(MEDIA_TYPES.DESKTOP);
      } else {
        setMediaType(MEDIA_TYPES.MOBILE);
      }
    }
  };
  useEffect(() => {
    const media: MediaQueryList = window.matchMedia(
      `(min-width:${RESPONSIVE_MEDIA_QUERY.TABLET.minWidth}px) and (max-width:${RESPONSIVE_MEDIA_QUERY.TABLET.maxWidth}px)`
    );
    media.addEventListener("change", updateMediaType);
    updateMediaType(media);

    return () => {
      media.removeEventListener("change", updateMediaType);
    };
  }, []);
  return mediaType;
};
export { useMediaQuery };
