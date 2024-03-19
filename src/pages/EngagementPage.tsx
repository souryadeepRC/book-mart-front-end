import { Navigate, Route, Routes } from "react-router-dom";
import { Buddies } from "src/components/engagement/buddies/Buddies";
// components
import { ChatPage } from "src/components/engagement/chat/ChatPage";
import { CommunityBanners } from "src/components/engagement/community-banner/CommunityBanners";
import { Community } from "src/components/engagement/community/Community";
// hooks
import useEngagementSocket from "src/hooks/useEngagementSocket";

const EngagementPage = () => {
  useEngagementSocket();
  const EngagementRoutes = () => {
    return (
      <Routes>
        <Route path="" element={<Navigate to="community" />} />
        <Route path="community" element={<CommunityBanners />} />
        <Route path="community/:communityId/*" element={<Community />} />
        <Route path="buddy" element={<Buddies />} />
        <Route path="chat" element={<ChatPage />} />
        <Route path="status" element={<span>My Status</span>} />
        <Route path="my-community" element={<span>My Community</span>} />
      </Routes>
    );
  };

  return <>{EngagementRoutes()}</>;
};
export { EngagementPage };

