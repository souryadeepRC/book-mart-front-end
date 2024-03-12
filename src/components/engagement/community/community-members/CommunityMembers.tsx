import { Button } from "src/components/common/CommonComponents";
// styles
import styles from "./CommunityMembers.module.scss";

const CommunityMembers = (): JSX.Element => {
  const members = Array(123).fill({
    _id: 123,
    imageUrl:
      "https://wallpapers.com/images/hd/random-person-on-a-bridge-7np8sxqy5phik5cc.jpg",
    name: "Sourya",
    mutualBuddyCount: 15,
    joiningDate: "25-Feb,2023",
    isMyBuddy: true,
  });
  return (
    <section className={styles["community-members__container"]}>
      {members?.map(
        (
          { name, imageUrl, mutualBuddyCount, joiningDate, isMyBuddy }: any,
          index: number
        ) => {
          return (
            <section
              key={index}
              className={styles["member-details__container"]}
            >
              <img
                alt={name}
                className={styles["member__initial"]}
                src={imageUrl}
              />
              <section className={styles["member__details"]}>
                <div className={styles["title"]}>{name}</div>
                <div className={styles["info"]}>
                  <span>
                    <strong>{mutualBuddyCount}</strong> mutual Buddies
                  </span>
                  <span>
                    since <strong>{joiningDate}</strong>
                  </span>
                </div>
                {isMyBuddy ? (
                  <Button variant="contained">Connect</Button>
                ) : (
                  <Button variant="contained">Be my Buddy</Button>
                )}
              </section>
            </section>
          );
        }
      )}
    </section>
  );
};
export { CommunityMembers };

