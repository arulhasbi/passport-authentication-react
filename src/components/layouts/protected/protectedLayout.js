import React from "react";
import styled from "styled-components";
import { Outlet } from "react-router-dom";
import { useAuth } from "../../../utils/customContexts/authContext";
import { Navigate } from "react-router-dom";

const ProtectedLayout = () => {
  const { user } = useAuth();
  if (!user) {
    return <Navigate to="/" />;
  }
  return (
    <ProtectedLayoutWrapper>
      <ProtectedLayoutMaxWidth>
        <h1>This is dashboard</h1>
        <Outlet />
      </ProtectedLayoutMaxWidth>
    </ProtectedLayoutWrapper>
  );
};

const ProtectedLayoutWrapper = styled.div``;
const ProtectedLayoutMaxWidth = styled.div``;

export default ProtectedLayout;
