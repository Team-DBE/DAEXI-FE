import styled from "styled-components";

//전체 컨테이너
export const Contents = styled.div`
  display: flex;
`;

//왼쪽 메뉴 컨테이너
export const LeftContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px 0px;
  gap: 80px;

  width: 400px;
  height: 1256px;

  background: #FFFFFF;
  box-shadow: 8px 0px 5px rgba(0, 0, 0, 0.25);
`;

//이름 
export const Name = styled.h2`
  position: relative;
  bottom: 50px;
  width: auto;
  height: 48px;

  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 700;
  font-size: 40px;
  line-height: 48px;

  text-align: center;

  color: #000000;
`;

//설명
export const Description = styled.span`
  position: relative;
  bottom: 120px;
  width: auto;
  height: 24px;

  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 24px;
  text-align: center;

  color: rgba(0, 0, 0, 0.3);
`;

//정보 제목
export const InfoTitle = styled.h2`
  width: 230px;
  height: 65px;

  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 700;
  font-size: 54px;
  line-height: 65px;
  text-align: center;

  color: #000000;

  margin-bottom: 40px;
`;  

//정보 컨테이너
export const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;

  width: 1000px;

  margin-left: 200px;
  margin-top: 100px;
`;

//개인 정보
export const PersonalInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 40px;
  gap: 60px;

  width: auto;
  height: 324px;

  background: #FFFFFF;
  border: 1px solid rgba(0, 0, 0, 0.1);
  box-shadow: 4px 4px 5px rgba(0, 0, 0, 0.25);
  border-radius: 20px;

  margin-bottom: 120px;
`;

//정보 내용 컨테이너
export const InfoContentsWrapper = styled.div`
  display: flex;
  align-items: center;

  width: 100%;

  font-size: 40px;
`;

// 아이디, 이름제목 등
export const InfoLabel = styled.span`
  flex: 0 0 200px;
  font-size: 40px;
  font-weight: 600;
  color: #000000;
`;

// 아이디, 이름에 대한 내용
export const InfoValue = styled.span`
  flex: 1;
  font-size: 40px;
  font-weight: 600;
  color: #000000;

  display: flex;
  align-items: center;

  margin-left: 80px;
`;

//계정 정보
export const AccountInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 40px;
  gap: 60px;

  width: auto;
  height: auto;

  background: #FFFFFF;
  border: 1px solid rgba(0, 0, 0, 0.1);
  box-shadow: 4px 4px 5px rgba(0, 0, 0, 0.25);
  border-radius: 20px;
`;

// 프로필 전체 감싸는 컨테이너
export const ProfileWrapper = styled.div`
  position: relative;
  width: 120px;
  height: 120px;
`;

// 실제 프로필 이미지
export const ProfileImage = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  object-fit: cover;
  border: 2px solid #ccc;
`;

// 수정 아이콘 (연필)
export const EditIcon = styled.label`
  position: absolute;
  bottom: 0px;
  right: -25px;
  width: 36px;
  height: 36px;
  border-radius: 50%;

  transform: scale(1.5);

  display: flex;
  align-items: center;
  justify-content: center;

  cursor: pointer;

  font-size: 18px;
`;

// 실제 파일 업로드 input (숨김)
export const HiddenFileInput = styled.input`
  display: none;
`;