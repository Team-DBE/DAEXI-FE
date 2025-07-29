import styled from "styled-components";

function Login() {
  return (
    <Body>
      <Logo src="/src/assets/Logo/Logo_small.svg"></Logo>
      <Logindiv>
        <Logintitle>로그인</Logintitle>
        <Inputbox />
      </Logindiv>
    </Body>
  );
}

const Body = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const Logindiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 750px;
  height: 700px;
  padding: 0;
  border: 1px solid rgba(0, 0, 0, 0.3);
`;

const Logintitle = styled.h1`
  font-size: 50px;
`;

const Logo = styled.img`
  height: 80px;
  margin-top: 50px;
  margin-bottom: 20px;
`;

const Inputbox = styled.div`
  width: 550px;
  height: 80px;
  border: 1px solid rgba(0, 0, 0, 0.5);
`;

export default Login;
