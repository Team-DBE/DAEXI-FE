import styled from "styled-components";

/* ──────────────── 푸터 전체 래퍼 ──────────────── */
export const FooterWrapper = styled.footer`
  width: 100%;
  margin-top: 50px;
  padding: 20px 180px 10px;
  background-color: #323232;
  box-sizing: border-box;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const FooterTopWrapper = styled.footer`
  width: 100%;
  box-sizing: border-box;

  display: flex;
  justify-content: center;
  align-items: center;
`;

/* ──────────────── 왼쪽 영역 (로고 + 정보) ──────────────── */
export const LeftArea = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  gap: 30px;
  width: 50%;
`;

export const LeftTop = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

export const Logo = styled.img`
  width: 135px;
`;

export const SubText = styled.div`
  font-size: 16px;
  font-weight: 700;
  line-height: 1.3;
  color: #9f9f9f;
`;

export const LeftBottom = styled.div`
  display: flex;
  flex-direction: column;
  gap: 19px;
`;

export const Description = styled.div`
  display: flex;
  flex-direction: row;
  gap: 8px;
  align-items: flex-start;
`;

export const Title = styled.div`
  font-size: 15px;
  font-weight: 700;
  color: #f0f0f0;
  width: 80px;
`;

export const Content = styled.div`
  font-size: 14px;
  font-weight: 400;
  color: #b1afaf;
`;

/* ──────────────── 오른쪽 영역 (NAV) ──────────────── */
export const RightArea = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  flex-direction: row;
  width: 45%;
`;

export const Navsection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  width: 30%;
`;

export const NavTitle = styled.div`
  font-size: 16px;
  font-weight: 700;
  color: #fafafa;
  margin-bottom: 12px;
`;

export const NavList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  a {
    font-size: 14px;
    font-weight: 400;
    color: #b1afaf;
    text-decoration: none;
    &:hover {
      color: #f0f0f0;
      font-weight: 600;
    }
  }
`;

export const Copyright = styled.div`
  width: 100%;
  text-align: center;
  font-size: 13px;
  color: #b1afaf;
  margin-top: 20px;
  border-top: 1px solid #444444;
  p {
    margin-top: 12px;
    padding: 0;
    font-weight: 400;
  }
`;
