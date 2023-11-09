import React from "react";
import { HeaderDiv, IconDiv, Title } from "./styled";
import ListIcon from "../../../public/icons/ListIcon";
const Header = () => {
  return (
    <HeaderDiv>
      <IconDiv>
        <ListIcon />
      </IconDiv>
      <Title>Your todos</Title>
    </HeaderDiv>
  );
};

export default Header;
