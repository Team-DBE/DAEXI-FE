import React from "react";
import LogoImage from "../../assets/Logo/Logo_small.svg";
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
  Copyright,
} from "./footer.styles";

const Footer = () => {
  return (
    <FooterWrapper>
      <FooterTopWrapper>
        <LeftArea>
          <LeftTop>
            <Logo src={LogoImage}></Logo>
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
              <a href="#">홈</a>
              <a href="#">파티리스트</a>
              <a href="#">로그인</a>
              <a href="#">회원가입</a>
              <a href="#">마이페이지</a>
            </NavList>
          </Navsection>

          <Navsection>
            <NavTitle>커뮤니티</NavTitle>
            <NavList>
              <a href="#">소개</a>
              <a href="#">문의</a>
              <a href="#">카카오톡</a>
              <a href="#">디스코드</a>
              <a href="#">개발자소개</a>
            </NavList>
          </Navsection>

          <Navsection>
            <NavTitle>사용방법</NavTitle>
            <NavList>
              <a href="#">파티 사용방법</a>
              <a href="#">파티 찾기방법</a>
              <a href="#">로그인에 문제가 있나요?</a>
              <a href="#">회원가입에 문제가 있나요?</a>
              <a href="#">마이페이지의 정보가 변경되었나요?</a>
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
