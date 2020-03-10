import React from 'react';
import './App.css';
import Feelings from "./feelings"
import { Route } from "react-router-dom"
import Panic from "./panic"
import Navbar from "./navbar"

function App() {
  return (
    <>
      <Navbar />
      <Route exact path="/mood">
        <Feelings />
      </Route>
      <Route exact path="/panic">
        <Panic />
      </Route>
    </>
  )
}

export default App;
