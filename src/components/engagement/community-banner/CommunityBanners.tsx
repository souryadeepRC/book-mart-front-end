import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
// Common Components
import { Loader } from "src/components/common/CommonComponents";
// components
import { CommunityBanner } from "./CommunityBanner";
// actions
import { fetchCommunities } from "src/store/engagement/engagement-actions";
// selectors
import {
  selectCommunities,
  selectEngagementIsLoading,
} from "src/store/engagement/engagement-selectors";
// types
import { AppDispatch } from "src/store/reducer-types";
import { CommunityType } from "src/types/engagement-types";
// styles
import styles from "./CommunityBanners.module.scss";

const CommunityBanners = () => {
  // store
  const dispatch: AppDispatch = useDispatch();
  const isLoading: boolean = useSelector(selectEngagementIsLoading);
  const communities: CommunityType[] | [] = useSelector(selectCommunities);
  // ref
  const isDataLoadedRef = useRef<boolean>(false);
  // effects
  useEffect(() => {
    if (!isDataLoadedRef.current) {
      dispatch(fetchCommunities());
      isDataLoadedRef.current = true;
    }
  }, [dispatch]);

  return (
    <>
      <Loader loading={isLoading} />
      <section className={styles["communities__container"]}>
        {communities?.map((community: CommunityType, index: number) => {
          return <CommunityBanner key={index} community={community} />;
        })}
      </section>
    </>
  );
};
export { CommunityBanners };

