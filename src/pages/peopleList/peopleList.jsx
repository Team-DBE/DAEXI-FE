import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Wrapper, Title } from "./peopleList,styles";
import PeopleBox from "../../components/peoplebox/peoplebox";

function PeopleList() {
  const { partyName } = useParams();
  const [users, setUsers] = useState([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const accessToken = localStorage.getItem("accessToken");
        if (!accessToken) {
          console.error("액세스 토큰이 없습니다.");
          return;
        }

        const response = await fetch("http://localhost:4000/api/party/users", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${accessToken}`,
          },
          body: JSON.stringify({ partyName }),
        });

        if (!response.ok) {
          throw new Error("서버 요청 실패");
        }

        const data = await response.json();

        setTotal(data.total);
        setUsers(data.users);
      } catch (error) {
        console.error("API 호출 에러:", error);
      }
    };

    fetchUsers();
  }, [partyName]);

  return (
    <Wrapper>
      <Title>파티에 속해있는 유저들</Title>

      {users.map((user) => (
        <PeopleBox
          key={user.id}
          user={{
            id: user.id,
            description: user.description,
            profilePicture: user.profilePicture,
          }}
        />
      ))}
    </Wrapper>
  );
}

export default PeopleList;
