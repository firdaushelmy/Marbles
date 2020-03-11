import React, { useState, useEffect } from 'react';
import { Route } from 'react-router-dom'
import './App.css';
// import logo from './logo.svg';
import './App.css';
import axios from "axios";
import LoadingIndicator from "./components/LoadingIndicator";
import LandingPage from "./pages/LandingPage"

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
        <div className="App">
          <Route exact path="/">
            <LandingPage users={users} isLoading={isLoading} />
          </Route>
        </div>
      </>
    )
  }
};

export default App;
