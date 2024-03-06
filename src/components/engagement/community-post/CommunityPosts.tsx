import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
// Common Components
import { Loader } from "src/components/common/CommonComponents";
// components
import { CommunityPost } from "./CommunityPost";
// actions
import { fetchCommunityPosts } from "src/store/engagement/engagement-actions";
// selectors
import {
  selectCommunityPosts,
  selectEngagementIsLoading,
} from "src/store/engagement/engagement-selectors";
// types
import { AppDispatch } from "src/store/reducer-types";
import { CommunityPostType } from "src/types/engagement-types";
// styles
import styles from "./CommunityPosts.module.scss";

const CommunityPosts = () => {
  // store
  const dispatch: AppDispatch = useDispatch();
  const isLoading: boolean = useSelector(selectEngagementIsLoading);
  const communityPosts: CommunityPostType[] | [] =
    useSelector(selectCommunityPosts);
  // ref
  const isDataLoadedRef = useRef<boolean>(false);
  // effects
  useEffect(() => {
    if (!isDataLoadedRef.current) {
      dispatch(fetchCommunityPosts());
      isDataLoadedRef.current = true;
    }
  }, [dispatch]);

  return (
    <>
      <Loader loading={isLoading} />
      <section className={styles["community-posts__container"]}>
        {communityPosts?.map((post: CommunityPostType, index) => {
          return <CommunityPost key={index} post={post} />;
        })}
      </section>
    </>
  );
};
export { CommunityPosts };

