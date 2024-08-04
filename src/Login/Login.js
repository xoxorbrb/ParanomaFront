import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../css/Login/login.css";

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
            <div className="login-card signin">
              <h2>Login</h2>
              <form>
                <input type="text" placeholder="Username" />
                <input type="password" placeholder="Password" />
                <button type="submit">Login</button>
              </form>
              <button onClick={() => handleCurrentPage()}>Sign</button>
            </div>

            <div
              className={`login-card-sign-right ${
                state.currentPage === "login" ? "show" : "hidden"
              }`}
            >
              <div>
                <h2>Sign Up</h2>
                <form>
                  <input type="text" placeholder="Username" />
                  <input type="email" placeholder="Email" />
                  <input type="password" placeholder="Password" />
                  <button type="submit">Sign Up</button>
                </form>
              </div>
            </div>
          </div>
        ) : (
          <div>
            <div className="login-card signup">
              <h2>Login</h2>
              <form>
                <input type="text" placeholder="Username" />
                <input type="password" placeholder="Password" />
                <button type="submit">Login</button>
              </form>
              <button onClick={() => handleCurrentPage()}>Sign</button>
            </div>

            <div
              className={`login-card-sign-right ${
                state.currentPage === "login" ? "hidden" : "show"
              }`}
            >
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
