import React from "react";
import { Link } from "react-router-dom";

import LogoImage from "../../assets/Logo/Logo_small.svg";
import HomeIcon from "../../assets/images/icon-campaign.svg";
import PartyIcon from "../../assets/images/icon-group.svg";
import ChatIcon from "../../assets/images/icon-comment.svg";
import MyPageIcon from "../../assets/images/icon-person.svg";

import {
  HeaderWrapper,
  HeaderLeftArea,
  HeaderMiddleArea,
  HeaderRightArea,
  Logo,
  NavList,
  NavItem,
  LoginButton,
  SignUpButton,
  Icon,
} from "./header.styles";

const Header = () => {
  return (
    <HeaderWrapper>
      <HeaderLeftArea>
        <Link to="/home">
          <Logo src={LogoImage} alt="Logo" />
        </Link>
      </HeaderLeftArea>
      <HeaderMiddleArea>
        <NavList>
          <NavItem to="/home">
            <Icon src={HomeIcon} alt="icon" />홈
          </NavItem>
          <NavItem to="/">
            <Icon src={PartyIcon} alt="icon" />
            파티
          </NavItem>
          <NavItem to="/">
            <Icon src={ChatIcon} alt="icon" />
            채팅
          </NavItem>
          <NavItem to="/Mypage">
            <Icon src={MyPageIcon} alt="icon" />
            마이페이지
          </NavItem>
        </NavList>
      </HeaderMiddleArea>
      <HeaderRightArea>
        <LoginButton as={Link} to="/login">
          로그인
        </LoginButton>
        <SignUpButton as={Link} to="/signup">
          회원가입
        </SignUpButton>
      </HeaderRightArea>
    </HeaderWrapper>
  );
};

export default Header;
