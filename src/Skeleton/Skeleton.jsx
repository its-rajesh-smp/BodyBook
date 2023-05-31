import React from "react";
import ContentLoader from "react-content-loader";
import "./skeletonStyle.css";

// POST CONTAINER
const PostContainerSkeleton = (props) => {
  return (
    <div className="PostContainerSkeleton-div">
      <PostSkeleton />
      <PostSkeleton />
      <PostSkeleton />
    </div>
  );
};
export default PostContainerSkeleton;

/* -------------------------------------------------------------------------- */
/*                                    POST                                    */
/* -------------------------------------------------------------------------- */
const PostSkeleton = (props) => (
  <ContentLoader
    className="PostSkeleton-div__skeleton"
    speed={2}
    viewBox="0 0 400 160"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="48" y="8" rx="3" ry="3" width="88" height="6" />
    <rect x="48" y="26" rx="3" ry="3" width="52" height="6" />
    <rect x="0" y="56" rx="3" ry="3" width="410" height="6" />
    <rect x="0" y="72" rx="3" ry="3" width="380" height="6" />
    <rect x="0" y="88" rx="3" ry="3" width="178" height="6" />
    <circle cx="20" cy="20" r="20" />
  </ContentLoader>
);

/* -------------------------------------------------------------------------- */
/*                                USER PROFILE                                */
/* -------------------------------------------------------------------------- */
export const ProfilePageSkeleton = (props) => {
  return (
    <>
      <ProfileSkeleton />;
      <div className="ProfilePageSkeleton__container">
        <ProfilePageSideSkeleton />
        <PostContainerSkeleton />
      </div>
    </>
  );
};

export const ProfileSkeleton = (props) => (
  <ContentLoader className="ProfilePageSkeleton-div" {...props}>
    <rect x="110" y="21" rx="4" ry="4" width="254" height="6" />
    <rect x="111" y="41" rx="3" ry="3" width="185" height="7" />
    <rect x="304" y="-46" rx="3" ry="3" width="350" height="6" />
    <rect x="371" y="-45" rx="3" ry="3" width="380" height="6" />
    <rect x="484" y="-45" rx="3" ry="3" width="201" height="6" />
    <circle cx="48" cy="48" r="48" />
  </ContentLoader>
);

export const ProfilePageSideSkeleton = (props) => (
  <ContentLoader className="ProfilePageSideSkeleton__div" {...props}>
    <rect x="0" y="0" rx="3" ry="3" width="250" height="10" />
    <rect x="20" y="20" rx="3" ry="3" width="220" height="10" />
    <rect x="20" y="40" rx="3" ry="3" width="170" height="10" />
    <rect x="0" y="60" rx="3" ry="3" width="250" height="10" />
    <rect x="20" y="80" rx="3" ry="3" width="200" height="10" />
    <rect x="20" y="100" rx="3" ry="3" width="80" height="10" />
  </ContentLoader>
);
