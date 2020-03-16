import React, { useState, useEffect } from "react";
import "./App.css";
import Feelings from "./feelings";
import { Route } from "react-router-dom";
import LoadingIndicator from "./components/LoadingIndicator";
import axios from "axios";
import Panic from "./panic";
import Nav from "./navbar";
import Login from "./login";
import SignUp from "./signup";
import Landing from "./landing.js";
import Home from "./pages/Home";
import Emergency from "./Emergency";
import SignUpPage from "./signuppage";
import Profile from "./profile";
import MarbleBtn from "./components/marbleBtn";

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
  } else {
    return (
      <>
        <Nav />
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
        <Route path="/profile">
          <Profile />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/clicker">
          <MarbleBtn />
        </Route>
      </>
    );
  }
}

export default App;
