import styled from "styled-components";
import { colors } from "../../designSystem/DesignSystem";

export const Wrapper = styled.div`
  display: flex;
  box-sizing: border-box;
  height: 800px;
  gap: 80px;
  padding: 20px;
  align-items: center;
  justify-content: center;
`;

export const MapBox = styled.div`
  width: 500px;
  height: 600px;
  border: 5px solid ${colors.gray[900]};
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 50px;
`;

export const Title = styled.h2`
  font-size: 36px;
  font-weight: bold;
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

export const Img = styled.img`
  width: 24px;
  height: 24px;
`;

export const InfoTitle = styled.div`
  display: flex;
  font-size: 23px;
  font-weight: bold;
  align-items: center;
  gap: 8px;
`;

export const InfoItem = styled.div`
  padding-left: 20px;
  font-size: 20px;
  display: flex;
  align-items: center;
  gap: 8px;

  a {
    color: inherit;
    text-decoration: none;
  }
`;

export const Button = styled.button`
  background-color: ${colors.btnBasic.default};
  border: none;
  color: white;
  padding: 10px 40px;
  border-radius: 36px;
  font-size: 20px;
  font-weight: bold;
  cursor: pointer;
  margin-top: 20px;
  align-self: flex-start;
  box-sizing: border-box;
  width: 500px;

  &:hover {
    background-color: ${colors.btnBasic.hover};
  }
`;
