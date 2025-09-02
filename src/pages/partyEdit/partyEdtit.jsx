// PartyEdit.jsx
import React, { useState, useEffect } from "react";
import {
  Body,
  Wrapper,
  MapBox,
  Content,
  Title,
  Info,
  Img,
  InfoTitle,
  InfoItem,
  Button,
} from "./partyEdit.styles";

import PartyIcon1 from "../../assets/images/party_departure.svg";
import PartyIcon2 from "../../assets/images/party_arrive.svg";
import PartyIcon3 from "../../assets/images/party_clock.svg";
import PartyIcon4 from "../../assets/images/party_people.svg";

function PartyEdit({ initialData }) {
  let latPosition = 36.391828;
  let lngPosition = 127.363368;

  const [partyName, setPartyName] = useState("");
  const [departureAddress, setDepartureAddress] = useState("");
  const [departureLatLng, setDepartureLatLng] = useState(null);
  const [arrivalAddress, setArrivalAddress] = useState("");
  const [arrivalLatLng, setArrivalLatLng] = useState(null);

  const [departureTime, setDepartureTime] = useState("");
  const [arrivalTime, setArrivalTime] = useState("");
  const [people, setPeople] = useState("");

  const [selectMode, setSelectMode] = useState(null);
  const [map, setMap] = useState(null);
  const [departureMarker, setDepartureMarker] = useState(null);
  const [arrivalMarker, setArrivalMarker] = useState(null);

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  useEffect(() => {
    if (initialData) {
      setPartyName(initialData.partyName || "");
      setDepartureAddress(initialData.departureAddress || "");
      setDepartureLatLng(initialData.departureLatLng || null);
      setArrivalAddress(initialData.arrivalAddress || "");
      setArrivalLatLng(initialData.arrivalLatLng || null);
      setDepartureTime(initialData.departureTime || "");
      setArrivalTime(initialData.arrivalTime || "");
      setPeople(initialData.people || "");
      console.log("기존 파티 데이터", initialData);
    }
  }, [initialData]);

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

        const depMarker = new window.kakao.maps.Marker({ map: mapInstance });
        const arrMarker = new window.kakao.maps.Marker({ map: mapInstance });

        if (initialData?.departureLatLng) {
          const pos = new window.kakao.maps.LatLng(
            initialData.departureLatLng.lat,
            initialData.departureLatLng.lng
          );
          depMarker.setPosition(pos);
        }
        if (initialData?.arrivalLatLng) {
          const pos = new window.kakao.maps.LatLng(
            initialData.arrivalLatLng.lat,
            initialData.arrivalLatLng.lng
          );
          arrMarker.setPosition(pos);
        }

        window.kakao.maps.event.addListener(mapInstance, "click", (mouseEvent) => {
          if (!selectMode || isSubmitted) return;

          const latlng = mouseEvent.latLng;
          console.log("지도 클릭 좌표:", { lat: latlng.getLat(), lng: latlng.getLng() });

          geocoder.coord2Address(
            latlng.getLng(),
            latlng.getLat(),
            function (result, status) {
              if (status === window.kakao.maps.services.Status.OK) {
                const address = result[0].address.address_name;
                console.log("변환된 주소:", address);

                if (selectMode === "departure") {
                  setDepartureAddress(address);
                  setDepartureLatLng({ lat: latlng.getLat(), lng: latlng.getLng() });
                  depMarker.setPosition(latlng);
                  console.log("출발지 수정:", {
                    address,
                    lat: latlng.getLat(),
                    lng: latlng.getLng(),
                  });
                } else if (selectMode === "arrival") {
                  setArrivalAddress(address);
                  setArrivalLatLng({ lat: latlng.getLat(), lng: latlng.getLng() });
                  arrMarker.setPosition(latlng);
                  console.log("도착지 수정:", {
                    address,
                    lat: latlng.getLat(),
                    lng: latlng.getLng(),
                  });
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

  const handleUpdateParty = () => {
    if (
      !partyName ||
      !departureLatLng ||
      !arrivalLatLng ||
      !departureTime ||
      !arrivalTime ||
      !people
    ) {
      setErrorMsg("모든 내용을 입력해주세요!");
      setTimeout(() => setErrorMsg(""), 500);
      return;
    }

    setIsSubmitted(true);
    setSelectMode(null);
    console.log("파티 수정", {
      partyName,
      departure: departureLatLng,
      arrival: arrivalLatLng,
      departureTime,
      arrivalTime,
      people,
    });
  };

  return (
    <Body>
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
              onChange={(e) => {
                setPartyName(e.target.value);
                console.log("파티명 수정:", e.target.value);
              }}
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
              <Img src={PartyIcon3} alt="출발 시간" />
              출발 시간
            </InfoTitle>
            <InfoItem>
              <input
                type="time"
                value={departureTime}
                onChange={(e) => {
                  setDepartureTime(e.target.value);
                  console.log("출발 시간 수정:", e.target.value);
                }}
                disabled={isSubmitted}
                style={{ fontFamily: "inherit" }}
              />
            </InfoItem>
          </Info>

          <Info>
            <InfoTitle>
              <Img src={PartyIcon3} alt="도착 시간" />
              도착 시간
            </InfoTitle>
            <InfoItem>
              <input
                type="time"
                value={arrivalTime}
                onChange={(e) => {
                  setArrivalTime(e.target.value);
                  console.log("도착 시간 수정:", e.target.value);
                }}
                disabled={isSubmitted}
                style={{ fontFamily: "inherit" }}
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
                type="number"
                placeholder="파티의 최대 인원을 입력"
                value={people}
                onChange={(e) => {
                  setPeople(e.target.value);
                  console.log("인원 수정:", e.target.value);
                }}
                disabled={isSubmitted}
                min="1"
                style={{ fontFamily: "inherit" }}
              />
            </InfoItem>
          </Info>
        </Content>
      </Wrapper>

      <Button onClick={handleUpdateParty} disabled={isSubmitted}>
        {isSubmitted ? "수정 완료!" : "파티 수정"}
      </Button>

      {errorMsg && (
        <p
          style={{
            color: "red",
            fontSize: "15px",
            fontWeight: "bold",
            marginTop: "8px",
            textAlign: "center",
          }}>
          {errorMsg}
        </p>
      )}
    </Body>
  );
}

export default PartyEdit;
