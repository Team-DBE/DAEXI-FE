import React from "react";
import { Link } from "react-router-dom";
import { Wrapper, Top, SearchBox, Button, Input, JoinParty } from "./partylist.styles";
import searchIcon from "../../assets/images/search_icon.png";
import partyAddIcon from "../../assets/images/party_add.svg";
import PartyBox from "../../components/partybox/partybox";

function PartyList() {
  const [parties, setParties] = useState([]);

  useEffect(() => {
    const fetchParties = async () => {
      try {
        const accessToken = localStorage.getItem("accessToken");
        if (!accessToken) {
          console.error("액세스 토큰이 없습니다.");
          return;
        }

        const response = await fetch("http://localhost:4000/api/party/list", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${accessToken}`,
          },
        });

        if (!response.ok) {
          throw new Error("서버 요청 실패");
        }

        const data = await response.json();
        setParties(data.parties);
      } catch (error) {
        console.error("파티 목록 불러오기 실패:", error);
      }
    };

    fetchParties();
  }, []);
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
      <div>
        {parties.map((party) => (
          <PartyBox
            key={party.id}
            party={{
              name: party.name,
              count: party.count,
              departure: party.departure,
              time: party.time,
            }}
          />
        ))}
      </div>
    </Wrapper>
  );
}

export default PartyList;
