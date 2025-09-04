import styled from "styled-components";
import { Link } from "react-router-dom";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0px 130px;
  min-height: 800px;
  padding-top: 70px;
`;

export const Top = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 40px;
  width: 1200px;
  align-items: center;
`;

export const SearchBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  margin: 0 13px;
  width: 650px;
`;

export const Button = styled.button`
  border: none;
  background: none;
  position: absolute;
  left: 20px;
  width: 32px;
  height: 32px;
  cursor: pointer;
`;

export const Input = styled.input`
  border: 1px solid #d9d9d9;
  border-radius: 30px;
  font-size: 24px;
  padding: 10px 65px;
  width: 100%;
`;

export const JoinParty = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  font-size: 24px;
  color: #4f4f4f;
  cursor: pointer;
  text-decoration: none;
`;
