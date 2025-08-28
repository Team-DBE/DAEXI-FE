// PartyAdd.jsx
import React, { useState, useEffect } from "react";
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
} from "./partyAdd.styles";

import PartyIcon1 from "../../assets/images/party_departure.svg";
import PartyIcon2 from "../../assets/images/party_arrive.svg";
import PartyIcon3 from "../../assets/images/party_clock.svg";
import PartyIcon4 from "../../assets/images/party_people.svg";

function PartyAdd() {
  let latPosition = 36.391828;
  let lngPosition = 127.363368;

  const [partyName, setPartyName] = useState("");
  const [departureAddress, setDepartureAddress] = useState("");
  const [departureLatLng, setDepartureLatLng] = useState(null);
  const [arrivalAddress, setArrivalAddress] = useState("");
  const [arrivalLatLng, setArrivalLatLng] = useState(null);
  const [time, setTime] = useState("");
  const [people, setPeople] = useState("");

  const [selectMode, setSelectMode] = useState(null); // "departure" or "arrival"
  const [map, setMap] = useState(null);
  const [departureMarker, setDepartureMarker] = useState(null);
  const [arrivalMarker, setArrivalMarker] = useState(null);

  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    const KAKAO_KEY = import.meta.env.VITE_KAKAO_MAP_KEY;
    const script = document.createElement("script");
    script.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${KAKAO_KEY}&libraries=services,clusterer&autoload=false`;
    script.async = true;
    document.head.appendChild(script);

    script.onload = () => {
      window.kakao.maps.load(() => {
        const mapInstance = new window.kakao.maps.Map(document.getElementById("map"), {
          center: new window.kakao.maps.LatLng(latPosition, lngPosition),
          level: 3,
        });

        const geocoder = new window.kakao.maps.services.Geocoder();

        const depMarker = new window.kakao.maps.Marker({
          map: mapInstance,
        });

        const arrMarker = new window.kakao.maps.Marker({
          map: mapInstance,
        });

        window.kakao.maps.event.addListener(mapInstance, "click", (mouseEvent) => {
          if (!selectMode || isSubmitted) return;

          const latlng = mouseEvent.latLng;

          geocoder.coord2Address(
            latlng.getLng(),
            latlng.getLat(),
            function (result, status) {
              if (status === window.kakao.maps.services.Status.OK) {
                const address = result[0].address.address_name;

                if (selectMode === "departure") {
                  setDepartureAddress(address);
                  setDepartureLatLng({ lat: latlng.getLat(), lng: latlng.getLng() });
                  depMarker.setPosition(latlng);
                } else if (selectMode === "arrival") {
                  setArrivalAddress(address);
                  setArrivalLatLng({ lat: latlng.getLat(), lng: latlng.getLng() });
                  arrMarker.setPosition(latlng);
                }
              }
            }
          );
        });

        setMap(mapInstance);
        setDepartureMarker(depMarker);
        setArrivalMarker(arrMarker);
      });
    };
  }, [selectMode, isSubmitted]);

  const handleJoinParty = () => {
    setIsSubmitted(true);
    setSelectMode(null);
    console.log({
      partyName,
      departure: departureLatLng,
      arrival: arrivalLatLng,
      time,
      people,
    });
  };

  return (
    <Wrapper>
      <MapBox>
        <div id="map" style={{ width: "100%", height: "100%", borderRadius: "12px" }} />
      </MapBox>

      <Content>
        <Title>
          <input
            type="text"
            placeholder="파티명 입력"
            value={partyName}
            onChange={(e) => setPartyName(e.target.value)}
            disabled={isSubmitted}
          />
        </Title>

        <Info>
          <InfoTitle>
            <Img src={PartyIcon1} alt="출발지" />
            출발지
          </InfoTitle>
          <InfoItem onClick={() => !isSubmitted && setSelectMode("departure")}>
            <input
              type="text"
              value={departureAddress}
              readOnly
              placeholder="이곳을 클릭 후 지도에서 선택"
            />
          </InfoItem>
        </Info>

        <Info>
          <InfoTitle>
            <Img src={PartyIcon2} alt="도착지" />
            도착지
          </InfoTitle>
          <InfoItem onClick={() => !isSubmitted && setSelectMode("arrival")}>
            <input
              type="text"
              value={arrivalAddress}
              readOnly
              placeholder="이곳을 클릭 후 지도에서 선택"
            />
          </InfoItem>
        </Info>

        <Info>
          <InfoTitle>
            <Img src={PartyIcon3} alt="시간" />
            시간
          </InfoTitle>
          <InfoItem>
            <input
              type="text"
              placeholder="출발 시간을 입력(00:00)"
              value={time}
              onChange={(e) => setTime(e.target.value)}
              disabled={isSubmitted}
            />
          </InfoItem>
        </Info>

        <Info>
          <InfoTitle>
            <Img src={PartyIcon4} alt="인원" />
            인원
          </InfoTitle>
          <InfoItem>
            <input
              type="text"
              placeholder="파티의 최대 인원을 입력"
              value={people}
              onChange={(e) => setPeople(e.target.value)}
              disabled={isSubmitted}
            />
          </InfoItem>
        </Info>

        <Button onClick={handleJoinParty} disabled={isSubmitted}>
          {isSubmitted ? "생성 완료!" : "파티 생성"}
        </Button>
      </Content>
    </Wrapper>
  );
}

export default PartyAdd;
