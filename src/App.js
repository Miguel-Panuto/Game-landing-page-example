import React from "react";
import GlobalStyles, { Center } from "./global-styles";
import Header from "./components/Header";
import Apr from "./components/Apr";
import Depoiments from "./components/Depoiments";
import About from "./components/About";

function App() {
  return (
    <>
      <GlobalStyles />
      <Header />
      <Apr />
      <Depoiments />
      <About />
      <footer>
        <Center>
          <p>All rights reserved to</p>
          <p>Miguel Panuto</p>
        </Center>
      </footer>
    </>
  );
}

export default App;
