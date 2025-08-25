import React, { useState } from "react"; // useState 훅 추가
import "../../designSystem/reset.css"
import Header from "../../components/header/header.jsx";
import Footer from "../../components/footer/footer.jsx";
import { Pencil } from "lucide-react";
import account from "../../assets/images/account_circle.svg";
import {
  LeftContainer,
  AccountInfoContainer,
  PersonalInfoContainer,
  Contents,
  InfoTitle,
  InfoWrapper,
  InfoContentsWrapper,
  InfoLabel,
  InfoValue,
  ProfileImage,
  ProfileWrapper,
  EditIcon,
  HiddenFileInput,
  Name,
  Description,
} from "./mypage.styles.js";

function MyPage() {
  function maskPassword(password) {
    return "*".repeat(password.length);
  }

  const [profileImage, setProfileImage] = useState(account);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setProfileImage(URL.createObjectURL(file));
    }
  };

  return (
    <>
      <Header />
      <Contents>
        <LeftContainer>
          <ProfileWrapper>
            <ProfileImage src={profileImage} alt="프로필" />
          </ProfileWrapper>

          <Name>인천 사나이</Name>
          <Description>인천 너무 멉니다..</Description>
        </LeftContainer>

        <InfoWrapper>
          <InfoTitle>개인 정보</InfoTitle>
          <PersonalInfoContainer>
            <InfoContentsWrapper>
              <InfoLabel>아이디</InfoLabel>
              <InfoValue>Incheon Man</InfoValue>
            </InfoContentsWrapper>
            <InfoContentsWrapper>
              <InfoLabel>비밀번호</InfoLabel>
              <InfoValue>{maskPassword("sdjksjj1355d")}</InfoValue>
            </InfoContentsWrapper>
            <InfoContentsWrapper>
              <InfoLabel>계좌번호</InfoLabel>
              <InfoValue>ㅇㅇㅇㅇ</InfoValue>
            </InfoContentsWrapper>
          </PersonalInfoContainer>

          <InfoTitle>계정 정보</InfoTitle>
          <AccountInfoContainer>
            <InfoContentsWrapper>
              <InfoLabel>아이콘</InfoLabel>
              <InfoValue>
                <ProfileWrapper>
                  <ProfileImage src={profileImage} alt="프로필" />
                  <EditIcon htmlFor="profile-upload">
                    <Pencil size={18} />
                  </EditIcon>
                  <HiddenFileInput
                    id="profile-upload"
                    type="file"
                    onChange={handleImageChange}
                  />
                </ProfileWrapper>
              </InfoValue>
            </InfoContentsWrapper>
            <InfoContentsWrapper>
              <InfoLabel>이름</InfoLabel>
              <InfoValue>인천 사나이</InfoValue>
            </InfoContentsWrapper>
            <InfoContentsWrapper>
              <InfoLabel>설명</InfoLabel>
              <InfoValue>인천 → 인천 너무 멉니다..</InfoValue>
            </InfoContentsWrapper>
          </AccountInfoContainer>
        </InfoWrapper>
      </Contents>
      <Footer />
    </>
  );
}

export default MyPage;
