import React from 'react';
import GlobalStyles from './global-styles';
import Header from './components/Header';
import Apr from './components/Apr';
import Depoiments from './components/Depoiments';
import About from './components/About';

function App() {
  return (
    <>
      <GlobalStyles />
      <Header />
      <Apr />
      <Depoiments />
      <About />
    </>
  );
}

export default App;
