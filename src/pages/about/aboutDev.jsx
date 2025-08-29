import React from "react";
import styled from "styled-components";
import { colors } from "../../designSystem/DesignSystem";

function AboutDev() {
  return (
    <body style={{ margin: 0, padding: 0, backgroundColor: colors.gray[200] }}>
      <Wrapper>
        <SubTitle>Team DBE의 개발팀을 소개해 드릴게요</SubTitle>
        <Title>개발자 소개</Title>
        <Profile>
          <Set>
            <Card>
              <Role>PM & Backend</Role>
              <Name>남우현</Name>
              <Description>설명</Description>
              <GithubId>
                <a href="https://github.com/Namwoo728">@Namwoo728</a>{" "}
                <img src="../src/assets/Logo/github-mark.svg" alt="깃허브 로고" />
              </GithubId>
            </Card>
            <Card>
              <Role>Frontend</Role>
              <Name>전재준</Name>
              <Description>설명</Description>
              <GithubId>
                <a href="https://github.com/JAEJUN090210">@JAEJUN090210</a>{" "}
                <img src="../src/assets/Logo/github-mark.svg" alt="깃허브 로고" />
              </GithubId>
            </Card>
            <Card>
              <Role>DevOps</Role>
              <Name>김민정</Name>
              <Description>설명</Description>
              <GithubId>
                <a href="https://github.com/kimsaram32">@kimsaram32</a>{" "}
                <img src="../src/assets/Logo/github-mark.svg" alt="깃허브 로고" />
              </GithubId>
            </Card>
          </Set>
          <Set>
            <Card>
              <Role>Backend</Role>
              <Name>김민수</Name>
              <Description>설명</Description>
              <GithubId>
                <a href="https://github.com/Heiji57">@Heiji57</a>{" "}
                <img src="../src/assets/Logo/github-mark.svg" alt="깃허브 로고" />
              </GithubId>
            </Card>
            <Card>
              <Role>Design & Embedded</Role>
              <Name>손서원</Name>
              <Description>설명</Description>
              <GithubId>
                <a href="https://github.com/vikira12">@vikira12</a>{" "}
                <img src="../src/assets/Logo/github-mark.svg" alt="깃허브 로고" />
              </GithubId>
            </Card>
            <Card>
              <Role>Frontend</Role>
              <Name>장윤호</Name>
              <Description>설명</Description>
              <GithubId>
                <a href="https://github.com/yunho09">@yunho09</a>{" "}
                <img src="../src/assets/Logo/github-mark.svg" alt="깃허브 로고" />
              </GithubId>
            </Card>
          </Set>
        </Profile>
      </Wrapper>
    </body>
  );
}

const Wrapper = styled.div`
  box-sizing: border-box;
  padding: 80px 24px;
  padding-top: 40px;
  background-color: ${colors.gray[200]};
  min-height: 800px;
  text-align: center;
  margin: 0 400px;
`;

const SubTitle = styled.p`
  display: flex;
  text-align: flex-start;
  font-size: 22px;
  font-weight: 600;
  color: ${colors.primary};
  margin-bottom: 15px;
`;

const Title = styled.h1`
  display: flex;
  text-align: flex-start;
  font-size: 42px;
  font-weight: bold;
  color: #222;
  margin-bottom: 40px;
`;

const Profile = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 40px;
`;

const Set = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 50px;
  justify-content: center;
`;

const Card = styled.div`
  background: ${colors.gray[100]};
  border-radius: 24px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.08);
  padding: 24px 20px;
  width: 260px;
  height: 310px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-6px);
    box-shadow: 0 16px 35px rgba(0, 0, 0, 0.12);
  }
`;

const Role = styled.p`
  display: flex;
  text-align: flex-start;
  font-size: 18px;
  color: ${colors.primary};
  font-weight: 600;
  margin-bottom: 8px;
`;

const Name = styled.h2`
  display: flex;
  text-align: flex-start;
  font-size: 32px;
  color: #222;
  margin: 0;
  margin-bottom: 12px;
  font-weight: bold;
`;

const Description = styled.p`
  display: flex;
  text-align: flex-start;
  font-size: 18px;
  color: ${colors.gray[600]};
  margin-top: 60px;
  margin-bottom: 16px;
`;

const GithubId = styled.p`
  margin-top: 40px;
  text-align: right;
  font-size: 18px;
  color: ${colors.gray[800]};

  a {
    color: ${colors.gray[800]};
    text-decoration: none;

    &:hover {
      text-decoration: none;
    }
  }

  img {
    margin-left: 9px;
    width: 20px;
    height: 20px;
  }
`;

export default AboutDev;
