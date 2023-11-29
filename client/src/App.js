// client/src/App.js

import React from 'react';
import Header from './components/Header/Header';
import './App.css';
import Sidebar from "./components/Sidebar/Sidebar";

function App() {
  return (
      <div className="App">
        <Header />
        <Sidebar />
        {/* Другие компоненты и контент здесь */}
      </div>
  );
}

export default App;
