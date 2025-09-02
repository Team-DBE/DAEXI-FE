import styled from "styled-components";
import { colors } from "../../designSystem/DesignSystem";

export const Container = styled.div`
  width: 800px;
  padding: 10px 25px;
  margin-bottom: 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid ${colors.gray[900]};
`;

export const Name = styled.h2`
  font-size: 24px;
  font-weight: bold;
  margin: 0;
`;

export const Count = styled.p`
  font-size: 20px;
  margin: 0 15px;
  background-color: ${colors.gray[300]};
  border-radius: 24px;
`;

export const Departure = styled.p`
  font-size: 20px;
  margin: 0 15px;
  background-color: ${colors.gray[300]};
  border-radius: 24px;
`;

export const Time = styled.p`
  font-size: 20px;
  margin: 0 15px;
  background-color: ${colors.gray[300]};
  border-radius: 24px;
`;

export const Button = styled.button`
  background-color: ${colors.btnBasic.default};
  color: white;
  border: none;
  border-radius: 4px;
  padding: 8px 12px;
  cursor: pointer;

  &:hover {
    background-color: ${colors.btnBasic.hover};
  }
`;
