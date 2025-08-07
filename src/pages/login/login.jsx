import "../../components/reset.css";
import LogoImage from "../../assets/Logo/Logo_small.svg";
import {
  Body,
  LoginDiv,
  Logintitle, 
  Logo,
  Wrapper,
  Inputbox, 
  Forget,
  ButtonWrapper,
  Button,
  Line
} from "./login.styles.js";

function Login() {
  return (
    <Body>
      <Logo src={LogoImage}></Logo>
      <LoginDiv>
        <Logintitle>로그인</Logintitle>
        <form>
          <Wrapper>
            <Inputbox type="text" placeholder="아이디" />
            <Forget>아이디를 잊어버렸어요</Forget>
            <Inputbox type="password" placeholder="비밀번호" />
            <Forget>비밀번호를 잊어버렸어요</Forget>
          </Wrapper>
          <ButtonWrapper>
            <Button bgColor="#FF8C00" type="submit">로그인</Button>
            <Line>또는</Line>
            <Button bgColor="rgba(0,0,0,0.3)">회원가입</Button>
          </ButtonWrapper>
        </form>
      </LoginDiv>
    </Body>
  );
}

export default Login;
