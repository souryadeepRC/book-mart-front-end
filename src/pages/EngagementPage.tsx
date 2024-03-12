import { Navigate, Route, Routes } from "react-router-dom";
import { Buddies } from "src/components/engagement/buddies/Buddies";
// components
import { CommunityBanners } from "src/components/engagement/community-banner/CommunityBanners";
import { Community } from "src/components/engagement/community/Community";
import { EngagementNavigation } from "src/components/engagement/engagement-navigation/EngagementNavigation";
import { MessagePage } from "src/components/engagement/message/MessagePage";

const EngagementPage = () => {
  const EngagementRoutes = () => {
    return (
      <Routes>
        <Route path="" element={<Navigate to="community" />} />
        <Route path="community" element={<CommunityBanners />} />
        <Route path="community/:communityId/*" element={<Community />} />
        <Route path="buddy" element={<Buddies />} />
        <Route path="message" element={<MessagePage />} />
        <Route path="status" element={<span>My Status</span>} />
        <Route path="my-community" element={<span>My Community</span>} />
      </Routes>
    );
  };

  return (
    <>
      <EngagementNavigation />
      {EngagementRoutes()}
    </>
  );
};
export { EngagementPage };

