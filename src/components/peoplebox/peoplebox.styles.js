import styled from "styled-components";
import { colors } from "../../designSystem/DesignSystem";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 800px;
  border-radius: 24px;
  padding: 16px 30px;
  background-color: ${colors.gray[300]};
  color: ${colors.text};
`;

export const ProfileImg = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  overflow: hidden;
  margin-right: 35px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const Title = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;

export const Id = styled.p`
  font-size: 22px;
  font-weight: 600;
  margin: 0;
`;

export const Description = styled.p`
  font-size: 16px;
  color: ${colors.gray[800]};
  margin: 15px 0 0 0;
`;

export const Button = styled.button`
  background: ${colors.primary};
  border: none;
  padding: 12px 25px;
  border-radius: 24px;
  color: ${colors.gray[100]};
  font-weight: 600;
  font-size: 17px;
  cursor: pointer;
  padding: 8px 12px;
`;
