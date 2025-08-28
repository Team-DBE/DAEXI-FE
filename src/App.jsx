import { Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Login from "./pages/login/login.jsx";
import Signup from "./pages/signup/signup.jsx";
import Home from "./pages/home/home.jsx";
import MyPage from "./pages/mypage/mypage.jsx";
import Party from "./pages/party/party.jsx";
import PartyAdd from "./pages/partyAdd/partyAdd.jsx";
import { createGlobalStyle } from "styled-components";
import PeopleList from "./pages/peopleList/peopleList.jsx";
import AboutDev from "./pages/about/aboutDev.jsx";

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route
          path="/mypage"
          element={
            <Layout>
              <MyPage />
            </Layout>
          }
        />
        <Route
          path="/home"
          element={
            <Layout>
              <Home />
            </Layout>
          }
        />
        <Route
          path="/party"
          element={
            <Layout>
              <Party />
            </Layout>
          }
        />
        <Route
          path="/add"
          element={
            <Layout>
              <PartyAdd />
            </Layout>
          }
        />
        <Route
          path="*"
          element={
            <Layout>
              <Home />
            </Layout>
          }
        />
        <Route
          path="/peoplelist"
          element={
            <Layout>
              <PeopleList />
            </Layout>
          }
        />
        <Route
          path="/about"
          element={
            <Layout>
              <AboutDev />
            </Layout>
          }
        />
      </Routes>
    </>
  );
}

export default App;
