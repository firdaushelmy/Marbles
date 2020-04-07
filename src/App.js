import React, { useState, useEffect } from "react";
import "./App.css";
import Feelings from "./feelings";
import { Route, Redirect } from "react-router-dom";
import LoadingIndicator from "./components/LoadingIndicator";
import axios from "axios"
import Panic from "./panic"
import Nav from "./navbar"
import Login from "./login"
import SignUp from "./signup"
import Landing from "./landing.js"
import Home from "./pages/Home"
import AddEmergency from "./AddEmergency"
import SignUpPage from "./signuppage"
import Profile from "./profile"
import EditProfile from "./editprofile"
import Anonymous from "./anonymous"
import Volunteer from "./volunteer"
import FAQ from "./FAQ"
import MarbleBtn from "./components/marbleBtn";
import Emergency from "./Emergency";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Comments from "./components/comments.js";
import Threads from "./components/threads.js";
import AddThoughts from "./AddThoughts";
import Playlist from "./playlist";
import CommentLikes from "./components/commentlikes";
import SupportGroup from "./supportgroup.js";
import Thoughts from "./thoughts";
import styled, { ThemeProvider, keyframes, withTheme } from 'styled-components';


function App() {
  const [threads, setThreads] = useState([]);
  const [userID, setUserID] = useState(null)
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

  // ---Issue: App currently loads all threads when first loading up. Might slow down app --

  useEffect(() => {
    axios.get("https://marbles-backend.herokuapp.com/api/v1/threads/").then(result => {
      console.log(result.data)
      let tempt = result.data;
      let temp = tempt.sort((a, b) => {
        return b.id - a.id;
      });
      setThreads(temp);
      setUserID(result.data.user)
      setIsLoading(false);
      console.log(result.data)
    });
  }, []);

  //User <PrivateRoute/> instead of <Route><Route> when you need user to be loggedin first bfore accessing page. It will check if a jwt exists and kick back to "/" if none available
  const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={(props) => (
      localStorage.getItem("jwt")
        ? <Component {...props} />
        : <Redirect to='/' />
    )} />
  );

  const defaultTheme = {
    navBg: "rgb(250, 229, 223)",
    btnBg: "#FBA589",
    btnBgHover: "#FBD6C8",
    btnCol: "white",
    btnColHover: "black",
    linkCol: "coral",
    phdBg: "#FBD6C8",
    xBtnCol: "coral",
    barsModalDivCol: "#747779",
    commentLikeButtonBg: "#FBD6C8",
    commentLikeButtonBorder: "2px solid pink",
    commentLikeButtonBgFocus: "pink",
    encBtnBg: "#FBD6C8",
    encBtnCol: "black",
    encBtnBorder: "#FBA589",
    encBtnBgHover: "#FBA589",
    encBtnColHover: "black",
    encBtnBorderHover: "#FBA589",
    homeModalBg: "rgb(250, 228, 220)",
    emergencyPinkDivBg: "rgb(250, 229, 223)",
    emergencyInputBoxShadow: "#FBA589",
    emergencyInputBoxShadowFocus: "#FBD6C8",
    addThoughtsDivBg: "#F7BDA9",
    questionCardHeaderBorder: "#FBD6C8",
    questionCardColHover: "coral",
    answerCardBg: "#FBD6C8",
    howYouDoinDivCol: "rgb(241, 93, 38)",
    delayLinkCol: "coral",
    emotionDivBorderCol: "rgb(247, 154, 120)",
    votePlaylistButtonsCol: "#FBA589",
    playlistContainerCol: "coral",
    votePlaylistButtonsFocusCol: "#FBD6C8",
    profileLinkBg: "#FBD6C8",
    profileLinkBoxShadow: "coral",
    profileLinkHoverCol: "coral",
    profilePicDisplayDivBg: "#FBD6C8",
    profileModalBg: "lavenderblush",
    chooseFileLabelBg: "#FBD6C8",
    supportGroupDivBg: "#FBD6C8",
    border: "#FBA589",
    supportGroupAnswerCardBg: "#FBD6C8",
    googleMapBorder: "#FBA589",
    orgLogoDivBg: "#FBD6C8",
    volunteerH1Col: "#FBA589",
    volunteerLinkCol: "black",
    volunteerLinkHoverCol: "coral",
    volunteerModalDivBg: "#FBD6C8",
    volunteerModalDivCol: "#584646",
    imagePreviewDivBg: "#FBD6C8",
    commentTextInputCol: "#FBA589",
    anonLinkBg: "#FBA589",
    anonLinkBoxShadow: "coral",
    anonLinkHoverCol: "white",
    anonLinkBg2: "#FBD6C8",
    anonLinkBoxShadow2: "coral",
    anonLinkHoverCol2: "coral",
    panicButtonContactDivBg: "#FBD6C8",
    circleFill: "#F48157",
    circleFill2: "#F48157",
    thoughtsDisplayDivBg: "#FBD6C8",
    InputBoxShadow: "#FBA589"
  };

  const depressedTheme =  {
    navBg: "#b1cff7",
    btnBg: "#1d73d0",
    btnBgHover: "#87CEFA",
    btnCol: "white",
    btnColHover: "black",
    linkCol: "#3b7dd8",
    phdBg: "#4b9ff9",
    xBtnCol: "#3b7dd8",
    barsModalDivCol: "#3b7dd8",
    commentLikeButtonBg: "#bfd6f6",
    commentLikeButtonBorder: "2px solid #8dbcf9",
    commentLikeButtonBgFocus: "#8dbcf9",
    encBtnBg: "#8dbcf9",
    encBtnCol: "black",
    encBtnBorder: "#3b7dd8",
    encBtnBgHover: "#3b7dd8",
    encBtnColHover: "white",
    encBtnBorderHover: "#3b7dd8",
    homeModalBg: "#b1cff7",
    emergencyPinkDivBg: "#b1cff7",
    emergencyInputBoxShadow: "#3b7dd8",
    emergencyInputBoxShadowFocus: "#8dbcf9",
    addThoughtsDivBg: "#b1cff7",
    questionCardHeaderBorder: "#b1cff7",
    questionCardColHover: "#3b7dd8",
    answerCardBg: "#b1cff7",
    howYouDoinDivCol: "#3b7dd8",
    delayLinkCol: "#3b7dd8",
    emotionDivBorderCol: "#3b7dd8",
    votePlaylistButtonsCol: "#3b7dd8",
    playlistContainerCol: "#1d73d0",
    votePlaylistButtonsFocusCol: "#1d73d0",
    profileLinkBg: "#b1cff7",
    profileLinkBoxShadow: "#1d73d0",
    profileLinkHoverCol: "#1d73d0",
    profilePicDisplayDivBg: "#b1cff7",
    profileModalBg: "#b1cff7",
    chooseFileLabelBg: "#8dbcf9",
    supportGroupDivBg: "#b1cff7",
    border: "black",
    supportGroupAnswerCardBg: "#cbdef7",
    googleMapBorder: "#3b7dd8",
    orgLogoDivBg: "#b1cff7",
    volunteerH1Col: "#3b7dd8",
    volunteerLinkCol: "black",
    volunteerLinkHoverCol: "white",
    volunteerModalDivBg: "#b1cff7",
    volunteerModalDivCol: "black",
    imagePreviewDivBg: "#8dbcf9",
    commentTextInputCol: "#3b7dd8",
    anonLinkBg: "#8dbcf9",
    anonLinkBoxShadow: "#1d73d0",
    anonLinkHoverCol: "white",
    anonLinkBg2: "#b1cff7",
    anonLinkBoxShadow2: "#1d73d0",
    anonLinkHoverCol2: "#007bff",
    panicButtonContactDivBg: "#b1cff7",
    circleFill: "#b1cff7",
    circleFill2: "#bed4f1",
    thoughtsDisplayDivBg: "#b1cff7",
    InputBoxShadow: "blue"
  };

  function setToDepressedTheme() {
    setTheme(depressedTheme)
    
  }

  const [theme, setTheme] = useState(defaultTheme);
  console.log(theme)

  
  if (isLoading) {
    return <LoadingIndicator />;
  } else {
    return (
      <>
        <ThemeProvider theme={theme} setTheme={setTheme}>
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
            <Feelings theme={theme} setTheme={setTheme} depressedTheme={depressedTheme} />
          </Route>
          <Route path="/addthoughts">
            <AddThoughts />
          </Route>
          <Route path="/panic">
            <Panic />
          </Route>
          <Route path="/addemergency">
            <AddEmergency />
          </Route>
          <PrivateRoute path="/profile" component={Profile} />
          <Route path="/volunteer">
            <Volunteer />
          </Route>
          <Route path="/faq">
            <FAQ />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/emergency">
            <Emergency />
          </Route>
          <Route path="/clicker">
            <MarbleBtn />
          </Route>
          <Route path="/comments">
            <Comments />
          </Route>
          <Route path="/commentlikes">
            <CommentLikes />
          </Route>
          <Route path="/threads">
            <Threads userID={userID} />
          </Route>
          <Route path="/playlist">
            <Playlist />
          </Route>
          <Route path="/supportgroup">
            <SupportGroup />
          </Route>
          <Route path="/thoughts">
            <Thoughts />
          </Route>
          <Route path="/editprofile">
            <EditProfile />
          </Route>
        </ThemeProvider>
      </>
    );
  }
}

export default App;
