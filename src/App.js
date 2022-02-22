import React from "react";
import Main from "./component/Main";
import Sidebar from "./component/Sidebar";
import Nav from "./component/Nav";
import './App.css';

function App() {
  return (
    <div className="App">
      <Sidebar />
      <Nav />
      <Main />
    </div>
  )
};

export default App;