import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [state, setState] = useState({
    currentPage: "login",
  });

  const handleCurrentPage = () => {
    setState((prevState) => ({
      currentPage: prevState.currentPage === "login" ? "signup" : "login",
    }));
  };

  return (
    <div className="login-page">
      <div className="login-container">
        {state.currentPage === "login" ? (
          <div>
            <div className={`login-card signin`}>
              <div className={"box-center"}>
                <img
                  className="icon-image"
                  src="/resource/images/movie_write_icon.png"
                  width={"100px"}
                  height={"100px"}
                  alt=""
                />
                <h2>Sign in to Paranoma</h2>

                <form className="form-container">
                  <span className="left-aligned">
                    Username or email address
                  </span>
                  <input
                    className="gray-input"
                    type="text"
                    placeholder="Username"
                  />
                  <input
                    className="gray-input"
                    type="password"
                    placeholder="Password"
                  />
                </form>
                <button
                  className="text-button gray-text mb20"
                  onClick={() => handleCurrentPage()}
                >
                  Forgot your password?
                </button>
                <button className="orange-button" type="submit">
                  Login
                </button>
              </div>
            </div>

            <div className={`login-card-sign-right show`}>
              <div className="box-center">
                <h2 className="white-text">Hello, Friend!</h2>
                <span className="white-text fs12 mb20">
                  Share your screenplay and let's write a new chapter in film
                  together.
                </span>
                <button
                  className="write-outline-button"
                  onClick={() => handleCurrentPage()}
                >
                  Signup
                </button>
              </div>
            </div>
          </div>
        ) : (
          <div>
            <div className={`login-card-sign-left show`}>
              <h2>ddds</h2>
              <form>
                <input type="text" placeholder="Username" />
                <input type="password" placeholder="Password" />
                <button type="submit">Login</button>
              </form>
              <button onClick={() => handleCurrentPage()}>Sign</button>
            </div>

            <div className={`login-card signup`}>
              <div>
                <h2>dddddd</h2>
                <form>
                  <input type="text" placeholder="Username" />
                  <input type="email" placeholder="Email" />
                  <input type="password" placeholder="Password" />
                  <button type="submit">Sign Up</button>
                </form>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Login;
