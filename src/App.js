import React, { useState, useEffect } from 'react';
import './App.css';
import Feelings from "./feelings"
import { Route } from "react-router-dom"
import LoadingIndicator from "./components/LoadingIndicator";
import axios from "axios"
import Panic from "./panic"
import Navbar from "./navbar"
import Login from "./login"
import SignUp from "./signup"
import Landing from "./landing.js"
import Home from "./pages/Home"
import Emergency from "./Emergency"
import AccountInfo from "./AccountInfo"
import SignUpPage from "./signuppage"

function App() {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    axios.get("https://insta.nextacademy.com/api/v1/users/").then(result => {
      setUsers(result.data);
      setIsLoading(false);
    });
  }, []);
  if (isLoading) {
    return <LoadingIndicator />;
  }
  else {
    return (
      <>
        <Navbar />
        <Route exact path="/">
          <SignUpPage />
        </Route>
        <Route path="/home">
          <Home users={users} isLoading={isLoading} />
        </Route>
        <Route path="/signup">
          <SignUp />
        </Route>
        <Route path="/mood">
          <Feelings />
        </Route>
        <Route path="/panic">
          <Panic />
        </Route>
        <Route path="/emergency">
          <Emergency />
        </Route>
        <Route path="/accountinfo">
          <AccountInfo />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
      </>
    )
  }
}

export default App;
