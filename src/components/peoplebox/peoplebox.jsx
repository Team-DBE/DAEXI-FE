import React from "react";
import { Wrapper, ProfileImg, Title, Id, Description, Button } from "./peoplebox.styles";

function PeopleBox({ user }) {
  return (
    <Wrapper>
      <ProfileImg>
        <img src={user.profilePicture} alt={user.id} />
      </ProfileImg>
      <Title>
        <Id>{user.id}</Id>
        <Description>{user.description}</Description>
      </Title>
      <Button>보기</Button>
    </Wrapper>
  );
}

export default PeopleBox;
