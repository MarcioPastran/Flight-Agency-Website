import React from "react";
import NavBar from "./components/NavBar/NavBar";
import Home from "./components/Home/Home";
import Serch from "./components/Search/Serch";
import Support from "./components/Support/Support";
import Info from "./components/Info/Info";
import Lounge from "./components/Lounge/Lounge";
import Travelers from "./components/Travelers/Travelers";
import Subscribers from "./components/Subscribers/Subscribers";
import Footer from "./components/Footer/Footer";

const App = () => {
  return (
    <div>
      <NavBar />
      <Home />
      <Serch />
      <Support />
      <Info />
      <Lounge />
      <Travelers />
      <Subscribers />
      <Footer />
    </div>
  );
};

export default App;
