import React, { useState, useEffect } from "react";
import "./App.css";
import Feelings from "./feelings";
import { Route, Redirect, useHistory } from "react-router-dom";
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

  const depressedTheme = {
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

  const angryTheme = {
    navBg: "lightpink",
    btnBg: "crimson",
    btnBgHover: "tomato",
    btnCol: "white",
    btnColHover: "black",
    linkCol: "crimson",
    phdBg: "lightpink",
    xBtnCol: "crimson",
    barsModalDivCol: "crimson",
    commentLikeButtonBg: "tomato",
    commentLikeButtonBorder: "2px solid crimson",
    commentLikeButtonBgFocus: "crimson",
    encBtnBg: "lightpink",
    encBtnCol: "black",
    encBtnBorder: "crimson",
    encBtnBgHover: "crimson",
    encBtnColHover: "white",
    encBtnBorderHover: "crimson",
    homeModalBg: "lightpink",
    emergencyPinkDivBg: "lightpink",
    emergencyInputBoxShadow: "crimson",
    emergencyInputBoxShadowFocus: "crimson",
    addThoughtsDivBg: "lightpink",
    questionCardHeaderBorder: "lightpink",
    questionCardColHover: "crimson",
    answerCardBg: "lightpink",
    howYouDoinDivCol: "crimson",
    delayLinkCol: "crimson",
    emotionDivBorderCol: "crimson",
    votePlaylistButtonsCol: "crimson",
    playlistContainerCol: "crimson",
    votePlaylistButtonsFocusCol: "crimson",
    profileLinkBg: "lightpink",
    profileLinkBoxShadow: "crimson",
    profileLinkHoverCol: "crimson",
    profilePicDisplayDivBg: "lightpink",
    profileModalBg: "lightpink",
    chooseFileLabelBg: "tomato",
    supportGroupDivBg: "lightpink",
    border: "black",
    supportGroupAnswerCardBg: "lightpink",
    googleMapBorder: "crimson",
    orgLogoDivBg: "lightpink",
    volunteerH1Col: "crimson",
    volunteerLinkCol: "black",
    volunteerLinkHoverCol: "white",
    volunteerModalDivBg: "lightpink",
    volunteerModalDivCol: "black",
    imagePreviewDivBg: "lightpink",
    commentTextInputCol: "crimson",
    anonLinkBg: "lightcoral",
    anonLinkBoxShadow: "crimson",
    anonLinkHoverCol: "white",
    anonLinkBg2: "lightpink",
    anonLinkBoxShadow2: "crimson",
    anonLinkHoverCol2: "crimson",
    panicButtonContactDivBg: "lightpink",
    circleFill: "lightpink",
    circleFill2: "lightcoral",
    thoughtsDisplayDivBg: "lightpink",
    InputBoxShadow: "tomato"
  };

  const worriedTheme = {
    navBg: "#f7ce91",
    btnBg: "#ee8236",
    btnBgHover: "#f96a05",
    btnCol: "black",
    btnColHover: "white",
    linkCol: "#ee8236",
    phdBg: "#f7ce91",
    xBtnCol: "#ee8236",
    barsModalDivCol: "#ee8236",
    commentLikeButtonBg: "#f96a05",
    commentLikeButtonBorder: "2px solid #ee8236",
    commentLikeButtonBgFocus: "#ee8236",
    encBtnBg: "#f7ce91",
    encBtnCol: "black",
    encBtnBorder: "#ee8236",
    encBtnBgHover: "#ee8236",
    encBtnColHover: "white",
    encBtnBorderHover: "#ee8236",
    homeModalBg: "#f7ce91",
    emergencyPinkDivBg: "#f7ce91",
    emergencyInputBoxShadow: "#ee8236",
    emergencyInputBoxShadowFocus: "#ee8236",
    addThoughtsDivBg: "#f7ce91",
    questionCardHeaderBorder: "#f7ce91",
    questionCardColHover: "#ee8236",
    answerCardBg: "#f7ce91",
    howYouDoinDivCol: "#ee8236",
    delayLinkCol: "#ee8236",
    emotionDivBorderCol: "#ee8236",
    votePlaylistButtonsCol: "#ee8236",
    playlistContainerCol: "#ee8236",
    votePlaylistButtonsFocusCol: "#ee8236",
    profileLinkBg: "#f7ce91",
    profileLinkBoxShadow: "#ee8236",
    profileLinkHoverCol: "#ee8236",
    profilePicDisplayDivBg: "#f7ce91",
    profileModalBg: "#f7ce91",
    chooseFileLabelBg: "#f96a05",
    supportGroupDivBg: "#f7ce91",
    border: "black",
    supportGroupAnswerCardBg: "#f7ce91",
    googleMapBorder: "#ee8236",
    orgLogoDivBg: "#f7ce91",
    volunteerH1Col: "#ee8236",
    volunteerLinkCol: "black",
    volunteerLinkHoverCol: "white",
    volunteerModalDivBg: "#f7ce91",
    volunteerModalDivCol: "black",
    imagePreviewDivBg: "#f7ce91",
    commentTextInputCol: "#ee8236",
    anonLinkBg: "orange",
    anonLinkBoxShadow: "#ee8236",
    anonLinkHoverCol: "white",
    anonLinkBg2: "#f7ce91",
    anonLinkBoxShadow2: "#ee8236",
    anonLinkHoverCol2: "#ee8236",
    panicButtonContactDivBg: "#f7ce91",
    circleFill: "#f7ce91",
    circleFill2: "orange",
    thoughtsDisplayDivBg: "#f7ce91",
    InputBoxShadow: "#f96a05"
  };

  const reflectiveTheme = {
    navBg: "lightblue",
    btnBg: "paleturquoise",
    btnBgHover: "turquoise",
    btnCol: "black",
    btnColHover: "white",
    linkCol: "cadetblue",
    phdBg: "paleturquoise",
    xBtnCol: "cadetblue",
    barsModalDivCol: "paleturqouise",
    commentLikeButtonBg: "paleturquoise",
    commentLikeButtonBorder: "2px solid turquoise",
    commentLikeButtonBgFocus: "turquoise",
    encBtnBg: "paleturquoise",
    encBtnCol: "black",
    encBtnBorder: "turquoise",
    encBtnBgHover: "turquoise",
    encBtnColHover: "black",
    encBtnBorderHover: "turquoise",
    homeModalBg: "lightblue",
    emergencyPinkDivBg: "lightblue",
    emergencyInputBoxShadow: "turquoise",
    emergencyInputBoxShadowFocus: "paleturquoise",
    addThoughtsDivBg: "lightblue",
    questionCardHeaderBorder: "paleturquoise",
    questionCardColHover: "cadetblue",
    answerCardBg: "paleturquoise",
    howYouDoinDivCol: "cadetblue",
    delayLinkCol: "cadetblue",
    emotionDivBorderCol: "cadetblue",
    votePlaylistButtonsCol: "turquoise",
    playlistContainerCol: "cadetblue",
    votePlaylistButtonsFocusCol: "paleturquoise",
    profileLinkBg: "paleturquoise",
    profileLinkBoxShadow: "cadetblue",
    profileLinkHoverCol: "cadetblue",
    profilePicDisplayDivBg: "paleturquoise",
    profileModalBg: "lavenderblush",
    chooseFileLabelBg: "paleturquoise",
    supportGroupDivBg: "paleturquoise",
    border: "turquoise",
    supportGroupAnswerCardBg: "#c5eaf7",
    googleMapBorder: "turquoise",
    orgLogoDivBg: "paleturquoise",
    volunteerH1Col: "turquoise",
    volunteerLinkCol: "black",
    volunteerLinkHoverCol: "cadetblue",
    volunteerModalDivBg: "paleturquoise",
    volunteerModalDivCol: "cadetblue",
    imagePreviewDivBg: "paleturquoise",
    commentTextInputCol: "turquoise",
    anonLinkBg: "turquoise",
    anonLinkBoxShadow: "cadetblue",
    anonLinkHoverCol: "white",
    anonLinkBg2: "paleturquoise",
    anonLinkBoxShadow2: "cadetblue",
    anonLinkHoverCol2: "cadetblue",
    panicButtonContactDivBg: "paleturquoise",
    circleFill: "paleturquoise",
    circleFill2: "lightblue",
    thoughtsDisplayDivBg: "paleturquoise",
    InputBoxShadow: "turquoise"
  };

  const otherTheme = {
    navBg: "lavender",
    btnBg: "#dcb0dc",
    btnBgHover: "plum",
    btnCol: "black",
    btnColHover: "white",
    linkCol: "mediumpurple",
    phdBg: "#dcb0dc",
    xBtnCol: "mediumpurple",
    barsModalDivCol: "#dcb0dc",
    commentLikeButtonBg: "#dcb0dc",
    commentLikeButtonBorder: "2px solid plum",
    commentLikeButtonBgFocus: "plum",
    encBtnBg: "#dcb0dc",
    encBtnCol: "black",
    encBtnBorder: "plum",
    encBtnBgHover: "plum",
    encBtnColHover: "black",
    encBtnBorderHover: "plum",
    homeModalBg: "lavender",
    emergencyPinkDivBg: "lavender",
    emergencyInputBoxShadow: "plum",
    emergencyInputBoxShadowFocus: "#dcb0dc",
    addThoughtsDivBg: "lavender",
    questionCardHeaderBorder: "#dcb0dc",
    questionCardColHover: "mediumpurple",
    answerCardBg: "#dcb0dc",
    howYouDoinDivCol: "mediumpurple",
    delayLinkCol: "mediumpurple",
    emotionDivBorderCol: "mediumpurple",
    votePlaylistButtonsCol: "plum",
    playlistContainerCol: "mediumpurple",
    votePlaylistButtonsFocusCol: "#dcb0dc",
    profileLinkBg: "#dcb0dc",
    profileLinkBoxShadow: "mediumpurple",
    profileLinkHoverCol: "mediumpurple",
    profilePicDisplayDivBg: "#dcb0dc",
    profileModalBg: "lavenderblush",
    chooseFileLabelBg: "#dcb0dc",
    supportGroupDivBg: "#dcb0dc",
    border: "plum",
    supportGroupAnswerCardBg: "lavender",
    googleMapBorder: "plum",
    orgLogoDivBg: "#dcb0dc",
    volunteerH1Col: "plum",
    volunteerLinkCol: "black",
    volunteerLinkHoverCol: "mediumpurple",
    volunteerModalDivBg: "#dcb0dc",
    volunteerModalDivCol: "mediumpurple",
    imagePreviewDivBg: "#dcb0dc",
    commentTextInputCol: "plum",
    anonLinkBg: "plum",
    anonLinkBoxShadow: "mediumpurple",
    anonLinkHoverCol: "white",
    anonLinkBg2: "#dcb0dc",
    anonLinkBoxShadow2: "mediumpurple",
    anonLinkHoverCol2: "mediumpurple",
    panicButtonContactDivBg: "#dcb0dc",
    circleFill: "lavender",
    circleFill2: "#dcb0dc",
    thoughtsDisplayDivBg: "#dcb0dc",
    InputBoxShadow: "plum"
  };

  const [theme, setTheme] = useState(defaultTheme);
  console.log(theme)

  let history = useHistory();

  const DepressedColorScheme = (e) => {
    e.preventDefault();
    setTheme(depressedTheme);
    history.push("/home");
  }

  console.log(threads.user)
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
            <Feelings theme={theme} setTheme={setTheme} depressedTheme={depressedTheme} defaultTheme={defaultTheme} angryTheme={angryTheme} worriedTheme={worriedTheme} reflectiveTheme={reflectiveTheme} otherTheme={otherTheme} DepressedColorScheme={DepressedColorScheme} />
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
