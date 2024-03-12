import { useSelector } from "react-redux";
import { NavigateFunction, useNavigate } from "react-router-dom";
// common components
import { Button } from "src/components/common/CommonComponents";
// library
import { ReactTyped } from "react-typed";
// selectors
import { selectScreenType } from "src/store/screen/screen-selectors";
// types
import { CommunityType } from "src/types/engagement-types";
// constants
import { MEDIA_TYPES } from "src/constants/screen-constants";
// styles
import styles from "./CommunityBanners.module.scss";

type CommunityBannerProps = {
  community: CommunityType;
};
const CommunityBanner = ({ community }: CommunityBannerProps) => {
  // store
  const screenType: string = useSelector(selectScreenType);
  const {
    _id,
    title,
    author,
    description,
    topActiveMembers,
    isMoreFollowers,
    followersCount,
    postsCount,
  } = community;
  // hooks
  const navigate: NavigateFunction = useNavigate();
  // calculate
  const isMobile: boolean = screenType === MEDIA_TYPES.MOBILE;
  return (
    <div className={styles["community"]} onClick={() => navigate(`${_id}`)}>
      <section className={styles["community-details"]}>
        <span className={styles["community__title"]}> {title}</span>
        <span className={styles["community__author"]}>By {author}</span>
        <span className={styles["community__description"]}>
          <ReactTyped
            strings={[description]}
            typeSpeed={50}
            loop={false}
            showCursor={false}
          />
        </span>
      </section>
      <section className={styles["community__insights"]}>
        <span>
          <strong>{followersCount}</strong> followers
        </span>
        <span>
          <strong>{postsCount}</strong> Posts
        </span>
      </section>
      <section className={styles["community-members__section"]}>
        <section className={styles["community__members"]}>
          {topActiveMembers?.map((member, index) => {
            return (
              <span
                key={index}
                className={styles["member__icon"]}
                title={member.stageName}
                style={{
                  left: `${index * (isMobile ? 10 : 20)}px`,
                  zIndex: index + 1,
                }}
              >
                {member.stageName.charAt(0)}
              </span>
            );
          })}
        </section>
        {isMoreFollowers && <span>+more</span>}
        <Button variant="contained">JOIN NOW</Button>
      </section>
    </div>
  );
};
export { CommunityBanner };

