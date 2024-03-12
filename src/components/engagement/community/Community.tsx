import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Navigate, Route, Routes, useParams } from "react-router-dom";
// common components
import { NavLink } from "src/components/common/CommonComponents";
// icons
import CardGiftcardIcon from "@mui/icons-material/CardGiftcard";
import Diversity3Icon from "@mui/icons-material/Diversity3";
import PostAddIcon from "@mui/icons-material/PostAdd";
import QuizIcon from "@mui/icons-material/Quiz";
// components
import { CommunityMembers } from "./community-members/CommunityMembers";
// actions
// selectors
import { selectIsMobile } from "src/store/screen/screen-selectors";
// types
// styles
import styles from "./Community.module.scss";
const Community = (): JSX.Element => {
  // router
  const { communityId } = useParams(); 

  // store
  const isMobile: boolean = useSelector(selectIsMobile);
  /* const isLoading: boolean = useSelector(selectEngagementIsLoading); */
  const communityDetails = {title:'Avengers',author : 'souryadeep'}; // select from store

  // effects
  useEffect(() => {
    // fetch community Details
  }, [communityId]);

  const CommunityNavigation = (): JSX.Element => {
    return (
      <ul className={styles["community__menu"]}>
        <li>
          <NavLink to="posts">
            <PostAddIcon />
            {!isMobile && "Posts"}
          </NavLink>
        </li>
        <li>
          <NavLink to="quiz">
            <QuizIcon />
            {!isMobile && "Quiz"}
          </NavLink>
        </li>
        <li>
          <NavLink to="gifts">
            <CardGiftcardIcon />
            {!isMobile && "Gifts"}
          </NavLink>
        </li>
        <li>
          <NavLink to="members">
            <Diversity3Icon /> {!isMobile && "Members"}
          </NavLink>
        </li>
      </ul>
    );
  };
  const CommunityRoutes = (): React.ReactElement | null => {
    return (
      <Routes>
        <Route path="" element={<Navigate to="posts" />} />
        <Route path="posts" element={<span>posts</span>} />
        <Route path="posts/:postId" element={<span>post 1</span>} />
        <Route path="quiz" element={<span>My quiz</span>} />
        <Route path="quiz/:quizId" element={<span>quiz 1</span>} />
        <Route path="gifts" element={<span>gifts</span>} />
        <Route path="members" element={<CommunityMembers />} />
      </Routes>
    );
  };
  return (
    <section className={styles["community__container"]}>
      <section className={styles["community-info"]}>
        <section className={styles["community__details"]}>
          <span className={styles["community__title"]}>{communityDetails.title}</span>
          <span className={styles["community__author"]}>
            By {communityDetails.author}
          </span>
        </section>
        <CommunityNavigation />
      </section>
      <CommunityRoutes />
    </section>
  );
};
export { Community };

