import React from "react";
import { Link } from "react-router-dom";
import { Wrapper, Top, SearchBox, Button, Input, JoinParty } from "./partylist.styles";
import searchIcon from "../../assets/images/search_icon.png";
import partyAddIcon from "../../assets/images/party_add.svg";
import partybox from "../../components/partybox/partybox";

function PartyList() {
  return (
    <Wrapper>
      <Top>
        <SearchBox>
          <Button>
            <img src={searchIcon} alt="icon" style={{ width: "auto", height: "100%" }} />
          </Button>
          <Input type="text" placeholder="검색어를 입력하세요" />
        </SearchBox>
        <JoinParty to="/add">
          <span>파티 생성</span>
          <img src={partyAddIcon} alt="icon" style={{ width: "auto", height: "100%" }} />
        </JoinParty>
      </Top>
      <div>{/* <PartyBox /> */}</div>
    </Wrapper>
  );
}

export default PartyList;
