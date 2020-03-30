import React, { useState, useEffect } from "react";
import Landing from "./landing";
import { Link, useHistory } from "react-router-dom";
import "./signuppage.css";
import { ToastContainer, toast } from "react-toastify";
import Axios from "axios";
import "react-toastify/dist/ReactToastify.css";

function SignUpPage(props) {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [gender, setGender] = useState("");
  const { isLoggedIn, setIsLoggedIn, setLogInStateToTrue } = props;
  const history = useHistory();

  function randomString(len, an) {
    an = an && an.toLowerCase();
    var str = "",
      i = 0,
      min = an == "a" ? 10 : 0,
      max = an == "n" ? 10 : 62;
    for (; i++ < len;) {
      var r = (Math.random() * (max - min) + min) << 0;
      str += String.fromCharCode((r += r > 9 ? (r < 36 ? 55 : 61) : 48));
    }
    return str;
  }

  // const handleSubmit = callback => {
  //   let u = randomString(16);
  //   console.log(u);
  //   let email = randomString(16);
  //   console.log(email);
  //   let p = randomString(16);
  //   let g = "none";
  //   console.log(p);
  //   setUsername(randomString(16));
  //   setPassword(p);
  //   setEmail(email);
  //   setGender(g);
  //   console.log(username);
  //   callback();
  // };

  const handleSubmit = () => {
    let u = randomString(16);
    console.log(u);
    let email = randomString(16);
    console.log(email);
    let p = randomString(16);
    let g = "none";
    console.log(p);
    setUsername(randomString(16));
    setPassword(p);
    setEmail(email);
    setGender(g);
    console.log(username);
  };

 
  useEffect(() => {
    if (username !== "") {
      Axios.post("https://marbles-backend.herokuapp.com/api/v1/users/", {
        name: username,
        email: email,
        password: password,
        gender: gender
      })
        .then(response => {

          // console.log(response.data);
          toast.success("You have successfully signed up");
          // localStorage.setItem("jwt", response.data.access_token);
          // localStorage.setItem("user", response.data.new_user.id);
          const { status, message, access_token, new_user } = response.data
          // console.log(result.data.user.id)
          localStorage.setItem('jwt', access_token)
          localStorage.setItem('user', JSON.stringify(new_user))
          history.push("/mood");
        })
        .catch(error => {
          console.log(error.message);
        });
    }
  }, [username, email, password, gender]);

  console.log(username);

  

  return (
    <>
      <Landing />
      <div className="mx-auto row" id="SignUpButtonContainer">
        <img className="Logo" src="./logo.png"></img>
        <h6 className="AnythingOnYourMind">anything on your mind</h6>
        <div className="StartAnonDiv">
          <Link
            // onClick={() => handleSubmit(signUp)}
            onClick={handleSubmit}
            className="StartAnon"
          >
            start anonymously
          </Link>
        </div>
        <div className="SignUpLogIn">
          <Link className="SignUpButton" tag={Link} to="/signup">
            sign up
          </Link>
          <Link className="SignUpButton" tag={Link} to="/login">
            log in
          </Link>
        </div>
      </div>
    </>
  );
}

export default SignUpPage;
