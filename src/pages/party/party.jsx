import React, { useEffect } from "react";
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

  // 카카오맵 로드
  useEffect(() => {
    const KAKAO_KEY = import.meta.env.VITE_KAKAO_MAP_KEY;

    // SDK 동적 로드
    const script = document.createElement("script");
    script.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${KAKAO_KEY}&autoload=false`;
    script.async = true;

    script.onload = () => {
      window.kakao.maps.load(() => {
        const container = document.getElementById("map");
        const options = {
          center: new window.kakao.maps.LatLng(xPosition, yPosition),
          level: 3,
        };

        const map = new window.kakao.maps.Map(container, options);

        // 마커 추가
        const markerPosition = new window.kakao.maps.LatLng(latPosition, lngPosition);
        const marker = new window.kakao.maps.Marker({
          position: markerPosition,
        });
        marker.setMap(map); // 지도에 마커 표시
      });
    };

    document.head.appendChild(script);
  }, []);

  return (
    <Wrapper>
      <MapBox>
        <div id="map" style={{ width: "100%", height: "100%", borderRadius: "12px" }} />
      </MapBox>

      <Content>
        <Title>파티명</Title>

        <Info>
          <InfoTitle>
            <Img src={PartyIcon1} alt="출발지" />
            출발지
          </InfoTitle>
          <InfoItem>출발지 주소</InfoItem>
        </Info>
        <Info>
          <InfoTitle>
            <Img src={PartyIcon2} alt="도착지" />
            도착지
          </InfoTitle>
          <InfoItem>도착지 주소</InfoItem>
        </Info>

        <Info>
          <InfoTitle>
            <Img src={PartyIcon3} alt="시간" />
            시간
          </InfoTitle>
          <InfoItem>00:00 ~ 00:00</InfoItem>
        </Info>

        <Info>
          <InfoTitle>
            <Img src={PartyIcon4} alt="인원" />
            인원
          </InfoTitle>
          <InfoItem>현재 파티 인원 3 / 4명</InfoItem>
        </Info>

        <Button>파티 참가</Button>
      </Content>
    </Wrapper>
  );
}

export default Party;
