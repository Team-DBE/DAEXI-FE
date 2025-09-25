import React from "react";
import { Container, Name, Count, Departure, Time, Button } from "./partybox.styles";

function PartyBox({ party }) {
  const { name, count, departure, time } = party;

  return (
    <Container>
      <div>
        <Name>{name}</Name>
        <Count>{count}</Count>
        <Departure>{departure}</Departure>
        <Time>{time}</Time>
      </div>
      <Button>파티 참가</Button>
    </Container>
  );
}

export default PartyBox;
