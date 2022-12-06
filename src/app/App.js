import React from "react";
import styled from "styled-components";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <AppWrapper className="py-10 px-10">
      <AppMaxWidth>
        <Outlet />
      </AppMaxWidth>
    </AppWrapper>
  );
}

const AppWrapper = styled.div``;
const AppMaxWidth = styled.div``;

export default App;
