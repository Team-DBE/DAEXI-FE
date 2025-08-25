import styled from "styled-components";
import { colors } from "../../designSystem/DesignSystem"

export const Body = styled.div`
  display: flex;
  padding: 0;
  margin: 0;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 100vh;
`;

export const LoginDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 600px;
  height: 700px;
  border: 1px solid ${colors.gray[400]};
  border-radius: 10px;
`;

export const Logintitle = styled.h1`
  margin-top: 70px;
  font-weight: 600;
  font-size: 50px;
`;

export const Logo = styled.img`
  height: 80px;
  margin-left: 30px;
  margin-bottom: 50px;
`;

export const Wrapper = styled.div`
  width: 400px;
  margin-top: 20px;
`;

export const Inputbox = styled.input`
  width: 100%;
  height: 60px;
  margin-top: 30px;
  padding-top: 5px;
  padding-left: 30px;
  padding-right: 30px;
  font-size: 25px;
  border: 1px solid ${colors.gray[400]};
  border-radius: 10px;
`;

export const Forget = styled.h2`
  padding-top: 15px;
  font-size: 16px;
  color: ${colors.gray[500]};
  text-align: right;
  cursor: pointer;
`;

export const ButtonWrapper = styled.div`
  width: 400px;
  margin-top: 50px;
`;

export const Button = styled.button`
  border: none;
  border-radius: 10px;
  width: 100%;
  height: 60px;
  background-color: ${(props) => props.bgColor};
  color: ${colors.gray[100]};
  font-size: 25px;
  font-weight: 600;
  cursor: pointer;
`;

export const Line = styled.div`
  display: flex;
  align-items: center;
  color: ${colors.gray[500]};
  font-size: 17px;
  font-weight: 500;
  margin: 20px 0;

  &::before,
  &::after {
    content: "";
    flex: 1;
    height: 1px;
    background: ${colors.gray[400]};
  }

  &::before {
    margin-right: 12px;
  }

  &::after {
    margin-left: 12px;
  }
`;