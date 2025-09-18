import "../../designSystem/reset.css";
import { useState } from "react";
import { Pencil } from "lucide-react";
import account from "../../assets/images/account_circle.svg";
import visibility from "../../assets/images/visibility.svg";
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
  SubContentsChangeValue,
  SubContentsChangeGender,
  SaveButton,
  CancelButton,
  EditProfileIcon,
} from "./mypage.styles.js";

function MyPage() {
  const [isEditingBasic, setIsEditingBasic] = useState(false);
  const [isEditingLogin, setIsEditingLogin] = useState(false);
  const [isEditingPublic, setIsEditingPublic] = useState(false);

  const [basicInfo, setBasicInfo] = useState({
    이름: "홍길동",
    생년월일: "2009-12-16",
    성별: "남성",
  });

  const [loginInfo, setLoginInfo] = useState({
    아이디: "홍길동",
    비밀번호: "123456",
  });

  const [publicInfo, setPublicInfo] = useState({
    별명: "동에 번쩍 서에 번쩍",
    계좌번호: "1908-8868-1229",
    전화번호: "010-0000-0000",
  });

  const [profileImage, setProfileImage] = useState(account);

  const [tempBasic, setTempBasic] = useState(basicInfo);
  const [tempLogin, setTempLogin] = useState(loginInfo);
  const [tempPublic, setTempPublic] = useState(publicInfo);
  const [tempProfileImage, setTempProfileImage] = useState(profileImage);

  const [showPassword, setshowPassword] = useState(false);

  function maskPassword(password) {
    return "*".repeat(password.length);
  }

  //기본
  const startEditBasic = () => {
    setTempBasic({ ...basicInfo });
    setIsEditingBasic(true);
  };

  const cancelEditBasic = () => {
    setTempBasic({ ...basicInfo });
    setIsEditingBasic(false);
  };

  const saveBasic = () => {
    setBasicInfo({ ...tempBasic });
    setIsEditingBasic(false);
  };

  //로그인
  const startEditLogin = () => {
    setTempLogin(loginInfo);
    setIsEditingLogin(true);
  };

  const cancelEditLogin = () => {
    setTempLogin(loginInfo);
    setIsEditingLogin(false);
  };

  const saveLogin = () => {
    setLoginInfo(tempLogin);
    setIsEditingLogin(false);
  };

  //공개
  const startEditPublic = () => {
    setTempPublic(publicInfo);
    setTempProfileImage(profileImage);
    setIsEditingPublic(true);
  };

  const cancelEditPublic = () => {
    setTempPublic(publicInfo);
    setTempProfileImage(profileImage);
    setIsEditingPublic(false);
  };

  const savePublic = () => {
    setPublicInfo(tempPublic);
    setProfileImage(tempProfileImage);
    setIsEditingPublic(false);
  };

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
        <EditIcon onClick={startEditBasic}>
          <Pencil />
        </EditIcon>
        {!isEditingBasic ? (
          <>
            <BoxTitle>기본 정보</BoxTitle>
            <SubTitleContainer>
              <SubContentsLabel>이름</SubContentsLabel>
              <SubContentsValue>{basicInfo.이름}</SubContentsValue>
            </SubTitleContainer>
            <SubTitleContainer>
              <SubContentsLabel>생년월일</SubContentsLabel>
              <SubContentsValue>{basicInfo.생년월일}</SubContentsValue>
            </SubTitleContainer>
            <SubTitleContainer>
              <SubContentsLabel>성별</SubContentsLabel>
              <SubContentsValue>{basicInfo.성별}</SubContentsValue>
            </SubTitleContainer>
          </>
        ) : (
          // 수정 모드
          <>
            <BoxTitle>기본 정보</BoxTitle>
            <SubTitleContainer>
              <SubContentsLabel>기존 이름</SubContentsLabel>
              <SubContentsValue>{basicInfo.이름}</SubContentsValue>
            </SubTitleContainer>
            <SubTitleContainer>
              <SubContentsLabel>변경할 이름</SubContentsLabel>
              <SubContentsChangeValue
                value={tempBasic.이름}
                onChange={(e) => setTempBasic({ ...tempBasic, 이름: e.target.value })}
              />
            </SubTitleContainer>
            <SubTitleContainer>
              <SubContentsLabel>기존 생년월일</SubContentsLabel>
              <SubContentsValue>{basicInfo.생년월일}</SubContentsValue>
            </SubTitleContainer>
            <SubTitleContainer>
              <SubContentsLabel>변경할 생년월일</SubContentsLabel>
              <SubContentsChangeValue
                value={tempBasic.생년월일}
                onChange={(e) => setTempBasic({ ...tempBasic, 생년월일: e.target.value })}
              />
            </SubTitleContainer>
            <SubTitleContainer>
              <SubContentsLabel>성별</SubContentsLabel>
              <SubContentsChangeGender
                value={tempBasic.성별}
                onChange={(e) => setTempBasic({ ...tempBasic, 성별: e.target.value })}>
                <option value="남성">남성</option>
                <option value="여성">여성</option>
                <option value="기타">기타</option>
              </SubContentsChangeGender>
            </SubTitleContainer>
            <CancelButton onClick={cancelEditBasic}>취소</CancelButton>
            <SaveButton onClick={saveBasic}>저장</SaveButton>
          </>
        )}
      </Box>
      <Box>
        <EditIcon onClick={startEditLogin}>
          <Pencil />
        </EditIcon>
        {!isEditingLogin ? (
          <>
            <BoxTitle>로그인 정보</BoxTitle>
            <SubTitleContainer>
              <SubContentsLabel>아이디</SubContentsLabel>
              <SubContentsValue>{loginInfo.아이디}</SubContentsValue>
            </SubTitleContainer>
            <SubTitleContainer>
              <SubContentsLabel>비밀번호</SubContentsLabel>
              <SubContentsValue>{maskPassword(loginInfo.비밀번호)}</SubContentsValue>
            </SubTitleContainer>
          </>
        ) : (
          // 수정 모드
          <>
            <BoxTitle>기본 정보</BoxTitle>
            <SubTitleContainer>
              <SubContentsLabel>기존 아이디</SubContentsLabel>
              <SubContentsValue>{loginInfo.아이디}</SubContentsValue>
            </SubTitleContainer>
            <SubTitleContainer>
              <SubContentsLabel>변경할 아이디</SubContentsLabel>
              <SubContentsChangeValue
                value={tempLogin.아이디}
                onChange={(e) => setTempLogin({ ...tempLogin, 아이디: e.target.value })}
              />
            </SubTitleContainer>
            <SubTitleContainer>
              <SubContentsLabel>기존 비밀번호</SubContentsLabel>
              <SubContentsValue>
                {showPassword ? loginInfo.비밀번호 : maskPassword(loginInfo.비밀번호)}
              </SubContentsValue>
              <button style={{border: "none", outline: "none", background: "none", cursor: "pointer", position: "relative", marginLeft: "10px"}} >
                <img src={visibility} onClick={() => setshowPassword(!showPassword)}/>
              </button>
            </SubTitleContainer>
            <SubTitleContainer>
              <SubContentsLabel>변경할 생년월일</SubContentsLabel>
              <SubContentsChangeValue
                type="password"
                value={tempLogin.비밀번호}
                onChange={(e) => setTempLogin({ ...tempLogin, 비밀번호: e.target.value })}
              />
            </SubTitleContainer>
            <CancelButton onClick={cancelEditLogin}>취소</CancelButton>
            <SaveButton onClick={saveLogin}>저장</SaveButton>
          </>
        )}
      </Box>
      <Box>
        <EditIcon>
          <Pencil onClick={startEditPublic} />
        </EditIcon>
        {!isEditingPublic ? (
          <>
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
              <SubContentsValue>{publicInfo.별명}</SubContentsValue>
            </SubTitleContainer>
            <SubTitleContainer>
              <SubContentsLabel>계좌번호</SubContentsLabel>
              <SubContentsValue>{publicInfo.계좌번호}</SubContentsValue>
            </SubTitleContainer>
            <SubTitleContainer>
              <SubContentsLabel>전화번호</SubContentsLabel>
              <SubContentsValue>{publicInfo.전화번호}</SubContentsValue>
            </SubTitleContainer>
          </>
        ) : (
          // 수정 모드
          <>
            <BoxTitle>공개 정보</BoxTitle>
            <SubTitleContainer>
              <SubContentsLabel>프로필 사진</SubContentsLabel>
              <input
                type="file"
                id="profileImage"
                accept="image/*"
                style={{ display: "none" }}
                onChange={(e) => {
                  const file = e.target.files[0];
                  if (file) {
                    setTempProfileImage(URL.createObjectURL(file));
                  }
                }}
              />
              <EditProfileIcon onClick={() => document.getElementById("profileImage").click()}>
                <Pencil />
              </EditProfileIcon>
              <SubContentsValue>
                <ProfileWrapper>
                  <ProfileImage src={tempProfileImage} alt="프로필 사진" />
                </ProfileWrapper>
              </SubContentsValue>
            </SubTitleContainer>
            <SubTitleContainer>
              <SubContentsLabel>기존 별명</SubContentsLabel>
              <SubContentsValue>{publicInfo.별명}</SubContentsValue>
            </SubTitleContainer>
            <SubTitleContainer>
              <SubContentsLabel>변경할 별명</SubContentsLabel>
              <SubContentsChangeValue
                value={tempPublic.별명}
                onChange={(e) => setTempPublic({ ...tempPublic, 별명: e.target.value })}
              />
            </SubTitleContainer>
            <SubTitleContainer>
              <SubContentsLabel>기존 계좌번호</SubContentsLabel>
              <SubContentsValue>{publicInfo.계좌번호}</SubContentsValue>
            </SubTitleContainer>
            <SubTitleContainer>
              <SubContentsLabel>변경할 계좌번호</SubContentsLabel>
              <SubContentsChangeValue
                value={tempPublic.계좌번호}
                onChange={(e) => setTempPublic({ ...tempPublic, 계좌번호: e.target.value })}
              />
            </SubTitleContainer>
            <SubTitleContainer>
              <SubContentsLabel>기존 전화번호</SubContentsLabel>
              <SubContentsValue>{publicInfo.전화번호}</SubContentsValue>
            </SubTitleContainer>
            <SubTitleContainer>
              <SubContentsLabel>변경할 전화번호</SubContentsLabel>
              <SubContentsChangeValue
                value={tempPublic.전화번호}
                onChange={(e) => setTempPublic({ ...tempPublic, 전화번호: e.target.value })}
              />
            </SubTitleContainer>
            <CancelButton onClick={cancelEditPublic}>취소</CancelButton>
            <SaveButton onClick={savePublic}>저장</SaveButton>
          </>
        )}
      </Box>
    </Contents>
  );
}

export default MyPage;
