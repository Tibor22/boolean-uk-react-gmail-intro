import "./styles/app.css";
import Header from "./components/Header/Header.js";
import LeftMenu from "./components/LeftMenu/LeftMenu.js";
import EmailView from "./components/Email/EmailView.js";
import Footer from "./components/Footer/Footer.js";

function App() {
  return (
    <div className="app">
      <Header />
      <LeftMenu />
      <EmailView />
      <Footer />
    </div>
  );
}

export default App;
