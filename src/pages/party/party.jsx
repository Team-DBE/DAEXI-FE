import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import MapImage from "../../assets/images/account_circle.svg";
import {
  Wrapper,
  MapBox,
  Content,
  Title,
  Info,
  Img,
  InfoTitle,
  InfoItem,
  Button,
} from "./party.styles";

import PartyIcon1 from "../../assets/images/party_departure.svg";
import PartyIcon2 from "../../assets/images/party_arrive.svg";
import PartyIcon3 from "../../assets/images/party_clock.svg";
import PartyIcon4 from "../../assets/images/party_people.svg";

function Party() {
  let latPosition = 36.391828;
  let lngPosition = 127.363368;

  // 파티 정보
  const departure = "출발지 주소";
  const arrival = "도착지 주소";
  const time = "출발시간 ~ 도착시간";
  const people = "현재 파티 인원 " + "3 / 4" + "명";
  const partyName = "파티명";

  // 참가 여부 저장
  const [isJoined, setIsJoined] = useState(false);

  // 카카오맵 로드
  useEffect(() => {
    const KAKAO_KEY = import.meta.env.VITE_KAKAO_MAP_KEY;

    const script = document.createElement("script");
    script.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${KAKAO_KEY}&autoload=false`;
    script.async = true;

    script.onload = () => {
      window.kakao.maps.load(() => {
        const container = document.getElementById("map");
        const options = {
          center: new window.kakao.maps.LatLng(latPosition, lngPosition),
          level: 3,
        };

        const map = new window.kakao.maps.Map(container, options);

        const markerPosition = new window.kakao.maps.LatLng(latPosition, lngPosition);
        const marker = new window.kakao.maps.Marker({
          position: markerPosition,
        });
        marker.setMap(map);
      });
    };

    document.head.appendChild(script);
  }, []);

  // 참가/탈퇴 버튼 클릭 핸들러
  const handleJoinToggle = () => {
    const newStatus = !isJoined;
    setIsJoined(newStatus);

    // 콘솔에 저장된 값 모두 출력
    console.log("참가 상태:", newStatus ? "참가중" : "미참가");
    console.log("출발지:", departure);
    console.log("도착지:", arrival);
    console.log("시간:", time);
    console.log("인원:", people);
  };

  return (
    <Wrapper>
      <MapBox>
        <div id="map" style={{ width: "100%", height: "100%", borderRadius: "12px" }} />
      </MapBox>

      <Content>
        <Title>{partyName}</Title>

        <Info>
          <InfoTitle>
            <Img src={PartyIcon1} alt="출발지" />
            출발지(지도를 참고해 주세요)
          </InfoTitle>
          <InfoItem>{departure}</InfoItem>
        </Info>

        <Info>
          <InfoTitle>
            <Img src={PartyIcon2} alt="도착지" />
            도착지
          </InfoTitle>
          <InfoItem>{arrival}</InfoItem>
        </Info>

        <Info>
          <InfoTitle>
            <Img src={PartyIcon3} alt="시간" />
            시간
          </InfoTitle>
          <InfoItem>{time}</InfoItem>
        </Info>

        <Info>
          <InfoTitle>
            <Img src={PartyIcon4} alt="인원" />
            인원
          </InfoTitle>
          <InfoItem><Link to="/peopleList" style={{ fontWeight: "bold" }}>{people}</Link></InfoItem>
        </Info>

        <Button
          onClick={handleJoinToggle}
          style={{
            backgroundColor: isJoined ? "red" : "#FF8C00",
            color: "white",
          }}>
          {isJoined ? "파티 탈퇴" : "파티 참가"}
        </Button>
      </Content>
    </Wrapper>
  );
}

export default Party;
