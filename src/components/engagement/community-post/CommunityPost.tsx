// types
import { CommunityPostType } from "src/types/engagement-types";
// styles
import styles from "./CommunityPosts.module.scss";

const CommunityPost = ({ post }: { post: CommunityPostType }) => {
  const {
    title,
    author,
    description,
    topActiveMembers,
    isMoreFollowers,
    followersCount,
    postsCount,
  } = post;

  return (
    <div className={styles["community-post"]}>
      <section className={styles["community-post-details"]}>
        <span className={styles["post__title"]}>{title}</span>
        <span className={styles["post__author"]}>By {author}</span>
        <span className={styles["post__description"]}>{description}</span>
      </section>
      <section className={styles["community__insights"]}>
        <span>
          <strong>{followersCount}</strong> followers
        </span>
        <span>
          <strong>{postsCount}</strong> Posts
        </span>
      </section>
      <section className={styles["post-members__section"]}>
        <section className={styles["post__members"]}>
          {topActiveMembers?.map((member, index) => {
            return (
              <span
                key={index}
                className={styles["member__icon"]}
                title={member.stageName}
                style={{ left: `${index * 20}px`, zIndex: index + 1 }}
              >
                {member.stageName.charAt(0)}
              </span>
            );
          })}
        </section>
        {isMoreFollowers && <span>+more</span>}
      </section>
    </div>
  );
};
export { CommunityPost };

