import styled from "styled-components";
import { colors } from "../../designSystem/DesignSystem";

export const Body = styled.div`
  display: flex;
  padding: 0;
  margin: 0;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
`;

export const Contents = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 1200px;
  height: 740px;
  padding: 20px;
  box-sizing: border-box;
`;

export const Contents2 = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 1200px;
  height: 740px;
  padding: 20px;
  box-sizing: border-box;
`;

export const NormalText = styled.p`
  font-size: 90px;
  font-weight: 700;
  line-height: 1.2;
  color: ${colors.text};
  margin: 10px 0;
  text-align: center;
`;

export const SmallText = styled.span`
  font-size: 50px;
  font-weight: 700;
  line-height: 1.2;
  color: ${colors.text};
  margin: 10px 0;
  text-align: center;
`;

export const Highlight = styled.span`
  color: ${colors.primary};
`;

export const Img = styled.img`
  height: 280px;
  margin-top: 50px;
`;

export const Img2 = styled.img`
  height: 350px;
  margin-top: 50px;
`;

export const Textbox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  width: 60;
  box-sizing: border-box;
  padding-left: 50px;
`;
