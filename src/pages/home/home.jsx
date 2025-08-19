import "../../components/reset.css";
import Header from "../../components/header/header.jsx";
import Footer from "../../components/footer/footer.jsx";
import {
  Body,
  Contents,
  NormalText,
  Highlight,
  SmallText,
  Img,
  Img2,
  Textbox,
  Contents2,
} from "./home.styles";

import R1 from "../../assets/images/img_save-money.svg";
import R2 from "../../assets/images/img_save-time.svg";
import R3 from "../../assets/images/img_move-con.svg";

function Home() {
  return (
    <Body>
      <Header />
      <Contents>
        <NormalText>
          <Highlight>DAEXI</Highlight>?
        </NormalText>
        <NormalText>
          <Highlight>DAEXI</Highlight>를 왜 써야하지?
        </NormalText>
      </Contents>

      <Contents2>
        <Img src={R1}></Img>
        <Textbox>
          <SmallText>
            <Highlight>첫번째 이유</Highlight>
          </SmallText>
          <NormalText>택시를 이용할때</NormalText>
          <NormalText>많은 비용을 절감</NormalText>
        </Textbox>
      </Contents2>

      <Contents2>
        <Img2 src={R2}></Img2>
        <Textbox>
          <SmallText>
            <Highlight>두번째 이유</Highlight>
          </SmallText>
          <NormalText>이동에 사용하는</NormalText>
          <NormalText>시간을 절감</NormalText>
        </Textbox>
      </Contents2>

      <Contents2>
        <Img2 src={R3}></Img2>
        <Textbox>
          <SmallText>
            <Highlight>세번째 이유</Highlight>
          </SmallText>
          <NormalText>이동은 편안하게</NormalText>
          <NormalText>많은 비용을 절감</NormalText>
        </Textbox>
      </Contents2>
      <Footer />
    </Body>
  );
}

export default Home;
