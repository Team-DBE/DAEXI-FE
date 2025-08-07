import React from "react";
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
        <Logo src={LogoImage} alt="Logo" />
      </HeaderLeftArea>
      <HeaderMiddleArea>
        <NavList>
          <NavItem href="#">
            <Icon src={HomeIcon} alt="icon" />홈
          </NavItem>
          <NavItem href="#">
            <Icon src={PartyIcon} alt="icon" />
            파티
          </NavItem>
          <NavItem href="#">
            <Icon src={ChatIcon} alt="icon" />
            채팅
          </NavItem>
          <NavItem href="#">
            <Icon src={MyPageIcon} alt="icon" />
            마이페이지
          </NavItem>
        </NavList>
      </HeaderMiddleArea>
      <HeaderRightArea>
        <LoginButton>로그인</LoginButton>
        <SignUpButton>회원가입</SignUpButton>
      </HeaderRightArea>
    </HeaderWrapper>
  );
};

export default Header;
