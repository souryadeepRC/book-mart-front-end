import { Button } from "src/components/common/CommonComponents";
// styles
import styles from "./Buddies.module.scss";

const Buddies = (): JSX.Element => {
  const buddies = Array(123).fill({
    _id: 123,
    imageUrl:
      "https://wallpapers.com/images/hd/random-person-on-a-bridge-7np8sxqy5phik5cc.jpg",
    name: "Sourya",
    mutualBuddyCount: 15,
    joiningDate: "25-Feb,2023",
    mutualCommunities: Array(123).fill({ _id: "12", title: "Avengers" }),
  });
  return (
    <section className={styles["buddies__container"]}>
      {buddies?.map(
        (
          {
            name,
            imageUrl,
            mutualBuddyCount,
            joiningDate,
            mutualCommunities,
          }: any,
          index: number
        ) => {
          return (
            <section key={index} className={styles["buddy-details__container"]}>
              <img
                alt={name}
                className={styles["buddy__initial"]}
                src={imageUrl}
              />
              <section className={styles["buddy__details"]}>
                <div className={styles["title"]}>{name}</div>
                <div className={styles["info"]}>
                  <span>
                    <strong>{mutualBuddyCount}</strong> mutual Buddies
                  </span>
                  <span>
                    since <strong>{joiningDate}</strong>
                  </span>
                </div>
                <span><strong>{mutualCommunities.length}</strong>Common Communities</span>
                <section className={styles["buddy__action"]}>
                  <Button variant="contained">Message</Button>
                  <Button variant="contained">Remove Buddy</Button>
                </section>
              </section>
            </section>
          );
        }
      )}
    </section>
  );
};
export { Buddies };

