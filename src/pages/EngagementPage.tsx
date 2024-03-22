import { Navigate, Route, Routes } from "react-router-dom";
// components
import { Buddies } from "src/components/engagement/buddies/Buddies";
import { ChatPage } from "src/components/engagement/chat/ChatPage";
import { ChatBox } from "src/components/engagement/chat/chat-box/ChatBox";
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
        <Route path="chat/:roomId" element={<ChatBox />} />
        <Route path="status" element={<span>My Status</span>} />
        <Route path="my-community" element={<span>My Community</span>} />
      </Routes>
    );
  };

  return <>{EngagementRoutes()}</>;
};
export { EngagementPage };

