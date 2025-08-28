import Header from "./components/header/header";
import Footer from "./components/footer/footer";

function Layout({ children }) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}

export default Layout;
