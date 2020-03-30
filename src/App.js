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
  )

  console.log(threads.user)
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
        {/* Change Route to the above PrivateRoute pattern if you want to require login first */}
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
      </>
    );
  }
}

export default App;
