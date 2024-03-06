import { Link, Navigate, Route, Routes, useParams } from "react-router-dom";
// components
import { EngagementNavigation } from "src/components/engagement/engagement-navigation/EngagementNavigation";
const EngagementPage = () => {
  const CommunityFeed = (): JSX.Element => {
    return (
      <section>
        <section>
          Community Harry Potter
          <span>
            <Link to="com-harry-potter">Details</Link>
          </span>
        </section>
        <section>
          Community Game of Thrones
          <span>
            <Link to="com-game-of-thrones">Details</Link>
          </span>
        </section>
      </section>
    );
  };

  const CommunityDetails = (): JSX.Element => {
    console.log('CommunityDetails');
    
    const { communityId } = useParams();
    return <section>Community Harry Potter Community ID {communityId}</section>;
  };
  const EngagementRoutes = () => {
    return (
      <Routes>
        <Route path="" element={<Navigate to="community" />} />
        <Route path="community" element={<CommunityFeed />} />
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

