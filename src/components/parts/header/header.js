import React from "react";
import styled from "styled-components";

const Header = (props) => {
  return (
    <HeaderWrapper>
      <HeaderMaxWidth className="flex flex-col gap-3">
        {props.children}
      </HeaderMaxWidth>
    </HeaderWrapper>
  );
};

const HeaderWrapper = styled.div``;
const HeaderMaxWidth = styled.div``;

export default Header;
