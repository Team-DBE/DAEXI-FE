import styled from "styled-components";

export const Body = styled.div`
  display: flex;
  padding: 0;
  margin: 0;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 100vh;
`;

export const SignupDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 70px 0;
  width: 600px;
  height: 700px;
  border: 1px solid rgba(0, 0, 0, 0.3);
  border-radius: 10px;
`;

export const Signuptitle = styled.h1`
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
  margin-top: 15px;
`;

export const Inputbox = styled.input`
  width: 100%;
  height: 60px;
  margin-top: 20px;
  padding-top: 5px;
  padding-left: 30px;
  padding-right: 30px;
  font-size: 25px;
  border: 1px solid rgba(0, 0, 0, 0.5);
  border-radius: 10px;
`;

export const ButtonWrapper = styled.div`
  width: 400px;
  margin-top: 20px;
`;

export const Button = styled.button`
  border: none;
  border-radius: 10px;
  width: 100%;
  height: 60px;
  background-color: ${(props) => props.bgColor};
  color: white;
  font-size: 25px;
  font-weight: 600;
  cursor: pointer;
`;

export const CheckboxWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  gap: 10px;
`;

export const CheckboxItem = styled.div`
  display: flex;
  align-items: center;
`;

export const CheckboxInput = styled.input`
  width: 20px;
  height: 20px;
  margin: 0;
  margin-right: 10px;
  cursor: pointer;
  accent-color: #ff8c00;
`;

export const Text = styled.span`
  font-size: 14px;
  color: rgba(0, 0, 0, 0.4);
  user-select: none;
`;

export const Linktext = styled.a`
  font-size: 14px;
  color: #0000FF;
`;

