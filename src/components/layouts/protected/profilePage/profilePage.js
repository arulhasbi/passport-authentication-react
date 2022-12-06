import React from "react";
import styled from "styled-components";

const ProfilePage = () => {
  return (
    <ProfilePageWrapper>
      <ProfilePageMaxWidth>
        <h1>This is profile page.</h1>
      </ProfilePageMaxWidth>
    </ProfilePageWrapper>
  );
};

const ProfilePageWrapper = styled.div``;
const ProfilePageMaxWidth = styled.div``;

export default ProfilePage;
