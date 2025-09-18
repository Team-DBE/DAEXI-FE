import styled from "styled-components";
import { colors } from "../../designSystem/DesignSystem";

//전체 컨테이너
export const Contents = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

// 제목 개인정보
export const Title = styled.h1`
  width: 133px;
  height: 44px;

  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 36px;
  line-height: 44px;

  color: #000000;

  margin: 50px;
`;

//박스
export const Box = styled.div`
  display: flex;
  flex-direction: column;
  padding: 40px 50px;
  margin-bottom: 30px;

  width: 700px;
  min-height: 237px;
  height: auto;

  border: 1px solid rgba(0, 0, 0, 0.5);
  filter: drop-shadow(8px 8px 20px rgba(0, 0, 0, 0.25));
  border-radius: 10px;
`;

//박스 제목
export const BoxTitle = styled.h2`
  font-size: 32px;

  width: 632px;
  height: 39px;
`;

//서브 타이틀 컨테이너
export const SubTitleContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 30px;
  width: 100%;
`;

//아이디, 이름 제목
export const SubContentsLabel = styled.span`
  flex: 0 0 200px;
  font-size: 24px;
  color: rgba(0, 0, 0, 0.6);
`;

// 아이디, 이름에 대한 내용
export const SubContentsValue = styled.span`
  max-width: 350px;
  width: auto;
  font-size: 24px;
  color: rgba(0, 0, 0, 0.6);
`;

// 변경할 값
export const SubContentsChangeValue = styled.input`
  max-width: 230px;
  width: auto;
  font-size: 24px;
  color: rgba(0, 0, 0, 0.6);
  border: none;
  background: none;
  &:focus {
    outline: none;
    border: none;
  }
`;

// 성별 변경할 값
export const SubContentsChangeGender = styled.select`
  display: inline:
  flex: 1;
  font-size: 24px;
  color: rgba(0, 0, 0, 0.6);
  border: none;
  background: none;
  &:focus {
    outline: none;
    border: none;
  }
`;

// 실제 프로필 이미지
export const ProfileImage = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  object-fit: cover;
`;

// 프로필 전체 감싸는 컨테이너
export const ProfileWrapper = styled.div`
  position: relative;
  width: 60px;
  height: 60px;
`;

// 프로필 수정 아이콘 (연필)
export const EditProfileIcon = styled.label`
  position: absolute;
  top: 145px;
  right: 375px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;

  cursor: pointer;
  z-index: 10;
`;


// 수정 아이콘 (연필)
export const EditIcon = styled.label`
  position: absolute;
  right: 20px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;

  cursor: pointer;
`;

// 실제 파일 업로드 input (숨김)
export const HiddenFileInput = styled.input`
  display: none;
`;

//저장 버튼
export const SaveButton = styled.button`
  display: flex;
  position: absolute;
  justify-content: center;
  align-items: center;

  right: 50px;
  bottom: 35px;

  width: 57px;
  height: 44px;

  background: #FF9615;
  border-radius: 50px;
  border: none;
  
  color: white;

  font-size: 20px;
  cursor: pointer;
`;

//취소 버튼
export const CancelButton = styled.button`
  display: flex;
  position: absolute;
  justify-content: center;
  align-items: center;

  right: 120px;
  bottom: 35px;

  width: 57px;
  height: 44px;

  background: #FF3B3B;
  border-radius: 50px;
  border: none;

  color: white;

  font-size: 20px;
  cursor: pointer;
`;