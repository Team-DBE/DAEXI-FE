import { Link } from "react-router-dom";
import styled from "styled-components";
import { colors } from "../../designSystem/DesignSystem";

export const HeaderWrapper = styled.header`
  width: 100%;
  padding: 18px 150px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${colors.background};
  border-bottom: 3px solid ${colors.primary};
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

export const NavItem = styled(Link)`
  font-size: 20px;
  text-decoration: none;
  color: ${colors.text};
  font-weight: bold;
  &:hover {
    color: ${colors.primary};
  }
`;

export const LoginButton = styled.button`
  margin-right: 10px;
  padding: 10px 20px;
  background-color: ${colors.btnBasic.default};
  color: ${colors.gray[100]};
  font-weight: bold;
  border: none;
  border-radius: 20px;
  cursor: pointer;
  text-decoration: none;
  &:hover {
    background-color: ${colors.btnBasic.hover};
  }
`;

export const SignUpButton = styled.button`
  padding: 10px 20px;
  background-color: ${colors.btnGray.default};
  color: ${colors.gray[100]};
  font-weight: bold;
  border: none;
  border-radius: 20px;
  cursor: pointer;
  text-decoration: none;
  &:hover {
    background-color: ${colors.btnGray.hover};
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