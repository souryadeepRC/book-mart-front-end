import { NavLink } from "src/components/common/CommonComponents";
// types
import { EngagementNavigationType } from "src/types/engagement-types";
// constants
import { ENGAGEMENT_NAVIGATION } from "src/constants/engagement-constants";
// styles
import styles from "./EngagementNavigation.module.scss";

const EngagementNavigation = (): JSX.Element => { 

  return (
    <ul className={styles["engagement-navigation__list"]}>
      {ENGAGEMENT_NAVIGATION?.map(
        (navigation: EngagementNavigationType, index: number) => {
          return (
            <li key={index} className={styles["navigation__item"]}>
              <NavLink to={navigation.path}>{navigation.label}</NavLink>
            </li>
          );
        }
      )}
    </ul>
  );
};
export { EngagementNavigation };

