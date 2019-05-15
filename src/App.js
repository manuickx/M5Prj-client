import React from 'react';

import NavBar from './components/NavBar/NavBar';

import './App.scss';

function App() {
  return (
    <div className="main-page">
      <NavBar />
      {/* <div>navbar</div> */}
      <div className='show-page'>SHOW PAGE</div>
    </div>
  );
}

export default App;
