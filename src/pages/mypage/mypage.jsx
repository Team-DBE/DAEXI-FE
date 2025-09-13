import React, { useState } from "react";
import "../../designSystem/reset.css";
import { Pencil } from "lucide-react";
import account from "../../assets/images/account_circle.svg";
import {
  Contents,
  Title,
  Box,
  BoxTitle,
  SubContentsLabel,
  SubContentsValue,
  SubTitleContainer,
  ProfileImage,
  ProfileWrapper,
  EditIcon,
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
    <Contents>
      <Title>개인정보</Title>
      <Box>
        <EditIcon>
          <Pencil />
        </EditIcon>
        <BoxTitle>기본 정보</BoxTitle>
        <SubTitleContainer>
          <SubContentsLabel>이름</SubContentsLabel>
          <SubContentsValue>홍길동</SubContentsValue>
        </SubTitleContainer>
        <SubTitleContainer>
          <SubContentsLabel>생년월일</SubContentsLabel>
          <SubContentsValue>2009년 12월 16일</SubContentsValue>
        </SubTitleContainer>
        <SubTitleContainer>
          <SubContentsLabel>성별</SubContentsLabel>
          <SubContentsValue>남성</SubContentsValue>
        </SubTitleContainer>
      </Box>
      <Box>
        <EditIcon>
          <Pencil />
        </EditIcon>
        <BoxTitle>로그인 정보</BoxTitle>
        <SubTitleContainer>
          <SubContentsLabel>아이디</SubContentsLabel>
          <SubContentsValue>홍길동</SubContentsValue>
        </SubTitleContainer>
        <SubTitleContainer>
          <SubContentsLabel>비밀번호</SubContentsLabel>
          <SubContentsValue>{maskPassword("123456")}</SubContentsValue>
        </SubTitleContainer>
      </Box>
      <Box>
        <EditIcon>
          <Pencil />
        </EditIcon>
        <BoxTitle>공개 정보</BoxTitle>
        <SubTitleContainer>
          <SubContentsLabel>프로필 사진</SubContentsLabel>
          <SubContentsValue>
            <ProfileWrapper>
              <ProfileImage src={profileImage} alt="프로필 사진" />
            </ProfileWrapper>
          </SubContentsValue>
        </SubTitleContainer>
        <SubTitleContainer>
          <SubContentsLabel>별명</SubContentsLabel>
          <SubContentsValue>동에 번쩍 서에 번쩍</SubContentsValue>
        </SubTitleContainer>
        <SubTitleContainer>
          <SubContentsLabel>계좌번호</SubContentsLabel>
          <SubContentsValue>토스뱅크 1908-8868-1229</SubContentsValue>
        </SubTitleContainer>
        <SubTitleContainer>
          <SubContentsLabel>전화번호</SubContentsLabel>
          <SubContentsValue>010-0000-0000</SubContentsValue>
        </SubTitleContainer>
      </Box>
    </Contents>
  );
}

export default MyPage;
