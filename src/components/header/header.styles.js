import styled from "styled-components";

export const HeaderWrapper = styled.header`
  padding: 18px 150px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #fafafa;
  border-bottom: 2.5px solid #FF8C00;
`;

export const HeaderLeftArea = styled.div`
  display: flex;
  align-items: center;
`;

export const HeaderMiddleArea = styled.nav`
  display: flex;
  flex-grow: 1;
  justify-content: center;
`;

export const HeaderRightArea = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

export const Logo = styled.img`
  height: 40px;
`;

export const NavList = styled.ul`
  list-style: none;
  display: flex;
  gap: 100px;
`;

export const NavItem = styled.a`
  font-size: 20px;
  text-decoration: none;
  color: #343a40;
  font-weight: bold;
  &:hover {
    color: #FF8C00;
  }
`;

export const LoginButton = styled.button`
  margin-right: 10px;
  padding: 10px 20px;
  background-color: #FF8C00;
  color: #fefefe;
  font-weight: bold;
  border: none;
  border-radius: 20px;
  cursor: pointer;
  &:hover {
    background-color: #EB8100;
  }
`;

export const SignUpButton = styled.button`
  padding: 10px 20px;
  background-color: #797979;
  color: #fefefe;
  font-weight: bold;
  border: none;
  border-radius: 20px;
  cursor: pointer;
  &:hover {
    background-color: #737373;
  }
`;

export const Icon = styled.img`
  width: 22px;
  height: 22px;
  margin-right: 8px;
  vertical-align: middle;
  display: inline-block;
  object-fit: contain;
`;