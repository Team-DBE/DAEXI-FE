import styled from "styled-components";
import "../components/reset.css";
import LogoImage from "../assets/Logo/Logo_small.svg";

function Login() {
  return (
    <Body>
      <Logo src={LogoImage}></Logo>
      <LoginDiv>
        <Logintitle>로그인</Logintitle>
        <Wrapper>
          <Inputbox type="text" placeholder="아이디" />
          <Forget>아이디를 잊어버렸어요</Forget>
          <Inputbox type="password" placeholder="비밀번호" />
          <Forget>비밀번호를 잊어버렸어요</Forget>
        </Wrapper>
        <ButtonWrapper>
          <Button bgColor="#FF8C00">로그인</Button>
          <Line>또는</Line>
          <Button bgColor="rgba(0,0,0,0.3)">회원가입</Button>
        </ButtonWrapper>
      </LoginDiv>
    </Body>
  );
}

const Body = styled.div`
  display: flex;
  padding: 0;
  margin: 0;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 100vh;
`;

const LoginDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 600px;
  height: 700px;
  border: 1px solid rgba(0, 0, 0, 0.3);
  border-radius: 10px;
`;

const Logintitle = styled.h1`
  margin-top: 70px;
  font-weight: 600;
  font-size: 50px;
`;

const Logo = styled.img`
  height: 80px;
  margin-left: 30px;
  margin-bottom: 50px;
`;

const Wrapper = styled.div`
  width: 400px;
  margin-top: 20px;
`;

const Inputbox = styled.input`
  width: 100%;
  height: 60px;
  margin-top: 30px;
  padding-top: 5px;
  padding-left: 30px;
  padding-right: 30px;
  font-size: 25px;
  border: 1px solid rgba(0, 0, 0, 0.5);
  border-radius: 10px;
`;

const Forget = styled.h2`
  padding-top: 15px;
  font-size: 16px;
  color: rgba(0, 0, 0, 0.5);
  text-align: right;
  cursor: pointer;
`;

const ButtonWrapper = styled.div`
  width: 400px;
  margin-top: 50px;
`;

const Button = styled.button`
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

const Line = styled.div`
  display: flex;
  align-items: center;
  color: rgba(0,0,0,0.3);
  font-size: 17px;
  font-weight: 500;
  margin: 20px 0;

  &::before,
  &::after {
    content: "";
    flex: 1;
    height: 1px;
    background: rgba(0,0,0,0.3);
  }

  &::before {
    margin-right: 12px;
  }

  &::after {
    margin-left: 12px;
  }
`;

export default Login;
