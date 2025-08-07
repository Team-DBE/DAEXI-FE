import "../../components/reset.css";
import LogoImage from "../../assets/Logo/Logo_small.svg";
import {
  Body,
  SignupDiv,
  Signuptitle,
  Logo,
  Wrapper,  
  Inputbox,
  ButtonWrapper,
  Button,
  CheckboxInput,
  Text,
  Linktext,
  CheckboxWrapper,
  CheckboxItem
} from "./signup.styles.js";

function Signup() {
  return (
    <Body>
      <Logo src={LogoImage}></Logo>
      <SignupDiv>
        <Signuptitle>회원가입</Signuptitle>
        <form>
          <Wrapper>
            <Inputbox type="email" placeholder="이메일" />
            <Inputbox type="text" placeholder="아이디" />
            <Inputbox type="password" placeholder="비밀번호" />
            <Inputbox type="password" placeholder="비밀번호 재확인" />
            <CheckboxWrapper>
              <CheckboxItem>
                <CheckboxInput type="checkbox" />
                <Text>[필수] <Linktext href="">개인정보 수집 및 이용</Linktext>에 동의합니다</Text>
                </CheckboxItem>
              <CheckboxItem>
                <CheckboxInput type="checkbox" />
                <Text>[필수] <Linktext href="">최종이용자 이용약관</Linktext>에 동의합니다</Text>
              </CheckboxItem>
            </CheckboxWrapper>
          </Wrapper>
          <ButtonWrapper>
            <Button bgColor="#FF8C00" type="submit" >완료</Button>
          </ButtonWrapper>
        </form>
      </SignupDiv>
    </Body>
  );
}

export default Signup;