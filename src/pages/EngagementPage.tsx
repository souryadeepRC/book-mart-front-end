import { Navigate, Route, Routes, useParams } from "react-router-dom";
// components
import { CommunityPosts } from "src/components/engagement/community-post/CommunityPosts";
import { EngagementNavigation } from "src/components/engagement/engagement-navigation/EngagementNavigation";

const EngagementPage = () => {
  const CommunityDetails = (): JSX.Element => {
    console.log("CommunityDetails");

    const { communityId } = useParams();
    return <section>Community Harry Potter Community ID {communityId}</section>;
  };
  const EngagementRoutes = () => {
    return (
      <Routes>
        <Route path="" element={<Navigate to="community" />} />
        <Route path="community" element={<CommunityPosts />} />
        <Route path="community/:communityId" element={<CommunityDetails />} />
        <Route path="buddy" element={<span>My Buddies</span>} />
        <Route path="message" element={<span>Messages</span>} />
        <Route path="status" element={<span>My Status</span>} />
        <Route path="my-community" element={<span>My Community</span>} />
      </Routes>
    );
  };

  return (
    <div>
      <EngagementNavigation />
      {EngagementRoutes()}
    </div>
  );
};
export { EngagementPage };

