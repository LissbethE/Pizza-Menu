import React from "react";
import "./index.css";

import Header from "./components/Header";
import Menu from "./components/Menu";
import Footer from "./components/Footer";

function App() {
  return (
    <React.Fragment>
      <Header />
      <Menu />
      <Footer />
    </React.Fragment>
  );
}

export default App;
