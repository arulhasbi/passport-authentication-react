import React from "react";
import styled from "styled-components";
import { Outlet } from "react-router-dom";

const HomeLayout = () => {
  return (
    <HomeLayoutWrapper>
      <HomeLayoutMaxWidth>
        <Outlet />
      </HomeLayoutMaxWidth>
    </HomeLayoutWrapper>
  );
};

const HomeLayoutWrapper = styled.div``;
const HomeLayoutMaxWidth = styled.div``;

export default HomeLayout;
