import React from 'react';
import Header from './components/Header';
import SubHeader from './components/SubHeader';
import Content from './components/Content';
import Footer from './components/Footer';
import './App.scss';

function App() {
  return (
    <div className="App">
      <div className="card">
        <Header />
        <SubHeader />
        <Content />
        <Footer />
      </div>
    </div>
  );
}

export default App;
