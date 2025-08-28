import React from "react";
import LogoImage from "../../assets/Logo/Logo_small.svg";
import { Link } from "react-router-dom";
import {
  FooterWrapper,
  FooterTopWrapper,
  LeftArea,
  LeftTop,
  Logo,
  SubText,
  LeftBottom,
  Description,
  Title,
  Content,
  RightArea,
  Navsection,
  NavTitle,
  NavList,
  NavLink,
  Copyright,
} from "./footer.styles";

const Footer = () => {
  return (
    <FooterWrapper>
      <FooterTopWrapper>
        <LeftArea>
          <LeftTop>
            <Link to="/home">
              <Logo src={LogoImage} alt="Logo" />
            </Link>{" "}
            <SubText>
              모두가 편리하게 이동할 수 있도록
              <br />
              위치 기반 택시 동승 서비스
            </SubText>
          </LeftTop>
          <LeftBottom>
            <Description>
              <Title>이메일</Title>
              <Content>cowtree28@dsm.hs.kr</Content>
            </Description>
            <Description>
              <Title>전화번호</Title>
              <Content>010-8415-1241</Content>
            </Description>
            <Description>
              <Title>주소</Title>
              <Content>
                대전광역시 유성구 가정북로 76 대덕소프트웨어마이스터고등학교
              </Content>
            </Description>
          </LeftBottom>
        </LeftArea>

        <RightArea>
          <Navsection>
            <NavTitle>빠른메뉴</NavTitle>
            <NavList>
              <NavLink to="/home">홈</NavLink>
              <NavLink to="/">파티리스트</NavLink>
              <NavLink to="/login">로그인</NavLink>
              <NavLink to="/signup">회원가입</NavLink>
              <NavLink to="/mypage">마이페이지</NavLink>
            </NavList>
          </Navsection>

          <Navsection>
            <NavTitle>커뮤니티</NavTitle>
            <NavList>
              <NavLink to="/">소개</NavLink>
              <NavLink to="/">문의</NavLink>
              <NavLink to="/">카카오톡</NavLink>
              <NavLink to="/">디스코드</NavLink>
              <NavLink to="/">개발자소개</NavLink>
            </NavList>
          </Navsection>

          <Navsection>
            <NavTitle>고객지원</NavTitle>
            <NavList>
              <NavLink to="/">개인정보처리방침</NavLink>
              <NavLink to="/">서비스이용약관</NavLink>
              <NavLink to="/">사용자권리</NavLink>
              <NavLink to="/">버그제보</NavLink>
            </NavList>
          </Navsection>
        </RightArea>
      </FooterTopWrapper>
      <Copyright>
        <p>
          © 2025 Daedeok Software Meister High School, Team DBE . All rights reserved.
        </p>
      </Copyright>
    </FooterWrapper>
  );
};

export default Footer;
