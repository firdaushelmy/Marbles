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
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Anonymous from "./anonymous"
import Volunteer from "./volunteer"
import FAQ from "./FAQ"

function App() {
  const [threads, setThreads] = useState([]);
  const [userID, setUserID] = useState("")
  const [isLoading, setIsLoading] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  const setLogInStateToTrue = () => {
    if (localStorage.getItem("jwt")) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
      toast.error("You have NOT successfully logged in");
    }
  };

  useEffect(() => {
    axios.get("https://marbles-backend.herokuapp.com/api/v1/threads/").then(result => {
    console.log(result.data)  
    setThreads(result.data);
    setUserID(result.data.user)
      setIsLoading(false);
    });
  }, []);
  if (isLoading) {
    return <LoadingIndicator />;
  } else {
    return (
      <>
        <Nav />
        <ToastContainer />
        <Route exact path="/">
          <SignUpPage
            isLoggedIn={isLoggedIn}
            setIsLoggedIn={setIsLoggedIn}
            setLogInStateToTrue={setLogInStateToTrue}
          />
        </Route>
        <Route path="/anonymous">
          <Anonymous />
        </Route>
        <Route path="/home">
          <Home threads={threads} userID={userID} isLoading={isLoading} />
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
        <Route path="/volunteer">
          <Volunteer />
        </Route>
        <Route path="/faq">
          <FAQ />
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
